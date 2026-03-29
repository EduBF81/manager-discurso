<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import BaseCard from '../components/ui/BaseCard.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import { temasFormatados } from '../data/temas'

const activeTab = ref('oradores')

// --- CONGREGAÇÕES ---
const congregacoes = ref<any[]>([])
const formCongregacao = ref({ 
  nome: '', 
  cidade: '', 
  coordenador: '', 
  telefone: '', 
  isLocal: false, 
  diaReuniao: '', 
  horarioReuniao: '' 
})
const isSavingCongregacao = ref(false)
const temCongregacaoLocal = ref(false)
const idEdicaoCongregacao = ref<string | null>(null)

const carregarCongregacoes = async () => {
  const snap = await getDocs(collection(db, 'congregacoes'))
  const items: any[] = []
  snap.forEach(d => items.push({ id: d.id, ...d.data() }))
  congregacoes.value = items.sort((a, b) => a.nome.localeCompare(b.nome))
}

const editarCongregacao = (c: any) => {
  idEdicaoCongregacao.value = c.id
  const localCong = localStorage.getItem('minhaCongregacao')
  formCongregacao.value = {
    nome: c.nome,
    cidade: c.cidade,
    telefone: c.telefone,
    coordenador: c.coordenador,
    isLocal: localCong ? localCong.trim().toLowerCase() === c.nome.trim().toLowerCase() : false,
    diaReuniao: c.diaReuniao || '',
    horarioReuniao: c.horarioReuniao || ''
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const cancelarEdicaoCongregacao = () => {
  idEdicaoCongregacao.value = null
  formCongregacao.value = { 
    nome: '', cidade: '', coordenador: '', telefone: '', isLocal: false,
    diaReuniao: '', horarioReuniao: ''
  }
}

const salvarCongregacao = async () => {
  if (!formCongregacao.value.nome || !formCongregacao.value.cidade) return
  
  const nomeNorm = formCongregacao.value.nome.trim().toLowerCase()
  const cidadeNorm = formCongregacao.value.cidade.trim().toLowerCase()
  
  const existe = congregacoes.value.find(c => 
    c.nome.toLowerCase() === nomeNorm && 
    c.cidade.toLowerCase() === cidadeNorm
  )
  
  if (existe && existe.id !== idEdicaoCongregacao.value) {
    alert(`⚠️ ERRO: A Congregação "${formCongregacao.value.nome}" na cidade de "${formCongregacao.value.cidade}" já existe!`)
    return
  }

  isSavingCongregacao.value = true
  try {
    const isLocal = formCongregacao.value.isLocal
    const payload = {
      nome: formCongregacao.value.nome.trim(),
      cidade: formCongregacao.value.cidade.trim(),
      coordenador: formCongregacao.value.coordenador.trim(),
      telefone: formCongregacao.value.telefone.trim(),
      diaReuniao: formCongregacao.value.diaReuniao,
      horarioReuniao: formCongregacao.value.horarioReuniao
    }
    
    if (idEdicaoCongregacao.value) {
      await updateDoc(doc(db, 'congregacoes', idEdicaoCongregacao.value), payload)
      if (isLocal) {
        localStorage.setItem('minhaCongregacao', formCongregacao.value.nome.trim())
        temCongregacaoLocal.value = true
        alert(`✅ Congregação atualizada e fixada como base local!`)
      } else {
        const currentLocal = localStorage.getItem('minhaCongregacao')
        if (currentLocal && currentLocal.trim().toLowerCase() === formCongregacao.value.nome.trim().toLowerCase()) {
           localStorage.removeItem('minhaCongregacao')
           temCongregacaoLocal.value = false
        }
        alert(`✅ Dados da congregação atualizados!`)
      }
      idEdicaoCongregacao.value = null
    } else {
      await addDoc(collection(db, 'congregacoes'), payload)
      if (isLocal) {
        localStorage.setItem('minhaCongregacao', formCongregacao.value.nome.trim())
        temCongregacaoLocal.value = true
        alert(`🎉 Congregação registada e fixada como base local!`)
      } else {
        alert("✅ Nova congregação registada!")
      }
    }

    formCongregacao.value = { nome: '', cidade: '', coordenador: '', telefone: '', isLocal: false, diaReuniao: '', horarioReuniao: '' }
    await carregarCongregacoes()
  } catch (e) {
    console.error(e)
  } finally {
    isSavingCongregacao.value = false
  }
}

const apagarCongregacao = async (id: string) => {
  if (confirm("Tens a certeza que desejas eliminar esta congregação da base de dados?")) {
    await deleteDoc(doc(db, 'congregacoes', id))
    await carregarCongregacoes()
  }
}

// --- ORADORES ---
const oradores = ref<any[]>([])
const searchOrador = ref('')
const formOrador = ref({
  nome: '',
  congregacaoId: '',
  telefone: '',
  email: '',
  temas: [] as number[],
  cargo: '',
  disponibilidade: ''
})
const isSavingOrador = ref(false)
const temOradoresRegistrados = ref(false)
const isModoEdicao = ref(false)
const oradorEditandoId = ref('')

const carregarOradores = async () => {
  const snap = await getDocs(collection(db, 'palestrantes'))
  const items: any[] = []
  snap.forEach(d => items.push({ id: d.id, ...d.data() }))
  oradores.value = items.sort((a, b) => a.nome.localeCompare(b.nome))
  temOradoresRegistrados.value = oradores.value.length > 0
}

const toggleTema = (temaNum: number) => {
  const i = formOrador.value.temas.findIndex(t => t === temaNum)
  if (i > -1) formOrador.value.temas.splice(i, 1)
  else formOrador.value.temas.push(temaNum)
}

const editarOrador = (o: any) => {
  isModoEdicao.value = true
  oradorEditandoId.value = o.id
  formOrador.value = {
    nome: o.nome,
    congregacaoId: o.congregacaoId || o.congregacao || '',
    telefone: o.telefone || '',
    email: o.email || '',
    temas: Array.isArray(o.temas) ? (typeof o.temas[0] === 'string' ? o.temas.map((t: string) => parseInt(t.split('|')[0])) : o.temas.map((t: any) => t.numero)) : [],
    cargo: o.cargo || '',
    disponibilidade: o.disponibilidade || ''
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const apagarOrador = async (id: string) => {
  if (confirm("Tens a certeza que desejas eliminar este Orador da base de dados?")) {
    await deleteDoc(doc(db, 'palestrantes', id))
    await carregarOradores()
  }
}

const cancelarEdicao = () => {
  isModoEdicao.value = false
  oradorEditandoId.value = ''
  formOrador.value = { nome: '', congregacaoId: '', telefone: '', email: '', temas: [], cargo: '', disponibilidade: '' }
}

const salvarOrador = async () => {
  if (!formOrador.value.nome) return
  isSavingOrador.value = true
  try {
    const cong = congregacoes.value.find(c => c.id === formOrador.value.congregacaoId)
    const fullTemas = formOrador.value.temas.map(n => {
      const t = temasFormatados.find(x => x.numero === n)
      return t ? `${t.numero}|${t.titulo}` : `${n}|Desconhecido`
    })
    
    const payload = {
      nome: formOrador.value.nome.trim(),
      congregacaoId: cong ? cong.id : '',
      congregacaoNome: cong ? cong.nome : formOrador.value.congregacaoId,
      telefone: formOrador.value.telefone.trim(),
      email: formOrador.value.email.trim(),
      temas: fullTemas,
      cargo: formOrador.value.cargo,
      disponibilidade: formOrador.value.disponibilidade
    }

    if (isModoEdicao.value) {
      await updateDoc(doc(db, 'palestrantes', oradorEditandoId.value), payload)
      alert("Orador atualizado com sucesso!")
    } else {
      await addDoc(collection(db, 'palestrantes'), payload)
      alert("Orador registado com sucesso!")
    }
    cancelarEdicao()
    await carregarOradores()
  } catch (e) {
    console.error(e)
  } finally {
    isSavingOrador.value = false
  }
}

onMounted(async () => {
  temCongregacaoLocal.value = !!localStorage.getItem('minhaCongregacao')
  await carregarCongregacoes()
  await carregarOradores()
})

const oradoresFiltrados = computed(() => {
  const query = searchOrador.value.toLowerCase()
  return oradores.value.filter(o => 
    o.nome.toLowerCase().includes(query) || 
    (o.congregacaoNome && o.congregacaoNome.toLowerCase().includes(query)) ||
    (o.congregacao && o.congregacao.toLowerCase().includes(query))
  )
})
</script>

<template>
  <div class="max-w-6xl mx-auto pb-10 fade-in">
    <header class="mb-8">
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Gestão da Agenda (Oradores e Congregações)</h1>
      <p class="text-gray-500 mt-1">Concentre aqui as informações dos colaboradores locais e os contatos das demais congregações visitadas.</p>
    </header>

    <div class="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-px">
      <button @click="activeTab = 'oradores'; cancelarEdicao()" class="px-5 py-3 font-semibold text-sm rounded-t-lg transition-colors" :class="activeTab === 'oradores' ? 'bg-blue-600 text-white' : 'text-gray-600 bg-gray-100/50 hover:bg-gray-200 border border-transparent'">
        <i class="fas fa-users mr-1.5"></i> Base de Oradores Publicos
      </button>
      <button @click="activeTab = 'congregacoes'" class="px-5 py-3 font-semibold text-sm rounded-t-lg transition-colors" :class="activeTab === 'congregacoes' ? 'bg-indigo-600 text-white' : 'text-gray-600 bg-gray-100/50 hover:bg-gray-200 border border-transparent'">
        <i class="fas fa-place-of-worship mr-1.5"></i> Gestão de Congregações
      </button>
    </div>

    <!-- TAB CONGREGAÇÕES -->
    <div v-if="activeTab === 'congregacoes' && !isModoEdicao" class="space-y-6">
      <BaseCard :title="idEdicaoCongregacao ? 'Editar Dados da Congregação' : 'Registar Nova Congregação'" :icon="idEdicaoCongregacao ? 'fas fa-pen' : 'fas fa-plus-circle'">
        <form @submit.prevent="salvarCongregacao" class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="space-y-1">
            <label class="block text-sm font-semibold text-gray-700">Nome da Congregação</label>
            <input v-model="formCongregacao.nome" required type="text" placeholder="Ex: Ls Progresso" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
          </div>
          <div class="space-y-1">
            <label class="block text-sm font-semibold text-gray-700">Cidade / Estado</label>
            <input v-model="formCongregacao.cidade" required type="text" placeholder="Ex: Belo Horizonte / MG" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
          </div>
          <div class="space-y-1">
            <label class="block text-sm font-semibold text-gray-700">Quem Coordena</label>
            <input v-model="formCongregacao.coordenador" required type="text" placeholder="Ex: Sr. Eduardo Borges" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
          </div>
          <div class="space-y-1">
            <label class="block text-sm font-semibold text-gray-700">Contacto Telefonico</label>
            <input v-model="formCongregacao.telefone" required type="tel" placeholder="+55 31 90000-0000" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
          </div>

          <!-- NOVO BLOCO DE HORÁRIO -->
          <div class="md:col-span-2 pt-4 border-t border-gray-100 mt-2">
            <h4 class="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
              <i class="fas fa-calendar-alt text-indigo-500"></i> Agendamento Base (Necessário para Convites Online)
            </h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 relative">
              <div class="space-y-1">
                <label class="block text-sm font-semibold text-gray-700">Dia de Reunião Rotineiro</label>
                <select v-model="formCongregacao.diaReuniao" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white">
                  <option value="">-- Indefinido --</option>
                  <option value="Sábado">Sábado</option>
                  <option value="Domingo">Domingo</option>
                </select>
              </div>
              <div class="space-y-1">
                <label class="block text-sm font-semibold text-gray-700">Horário</label>
                <input v-model="formCongregacao.horarioReuniao" type="time" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
              </div>
            </div>
          </div>
          
          <div class="md:col-span-2 pt-1 pb-2 fade-in">
            <label class="flex items-center gap-2 cursor-pointer bg-blue-50/50 p-3 rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors w-max pr-6">
              <input type="checkbox" v-model="formCongregacao.isLocal" class="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-600 focus:ring-2 bg-white">
              <span class="text-sm font-bold text-blue-800"><i class="fas fa-home mr-1.5 opacity-70"></i> Definir como minha Congregação Base (Local)</span>
            </label>
            <p class="text-xs text-gray-400 mt-1.5 ml-1">Pode fixar ou transferir a coroa principal para esta congregação a qualquer momento.</p>
          </div>

          <div class="md:col-span-2 pt-2 flex flex-row items-center gap-3">
            <BaseButton type="submit" :disabled="isSavingCongregacao" class="flex-1 sm:flex-none">
              <i class="fas" :class="idEdicaoCongregacao ? 'fa-check' : 'fa-save'"></i> 
              {{ isSavingCongregacao ? 'A processar...' : (idEdicaoCongregacao ? 'Salvar Alterações' : 'Adicionar Congregação') }}
            </BaseButton>
            
            <BaseButton v-if="idEdicaoCongregacao" variant="secondary" type="button" @click="cancelarEdicaoCongregacao" class="flex-1 sm:flex-none">
              <i class="fas fa-times mr-1"></i> Cancelar
            </BaseButton>
          </div>
        </form>
      </BaseCard>

      <BaseCard title="Congregações Registadas" icon="fas fa-list-ul">
        <div class="overflow-x-auto -mx-6 mb-[-24px]">
          <table class="w-full text-sm text-left text-gray-600 border-collapse">
            <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100">
              <tr>
                <th scope="col" class="px-4 py-3 font-semibold">Nome</th>
                <th scope="col" class="px-4 py-3 font-semibold">Região</th>
                <th scope="col" class="px-4 py-3 font-semibold">Congregações</th>
                <th scope="col" class="px-4 py-3 font-semibold text-center hidden md:table-cell">Editar | Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="congregacoes.length === 0">
                <td colspan="4" class="px-4 py-8 text-center text-sm text-gray-400">Nenhum registo inserido neste momento.</td>
              </tr>
              <tr v-for="c in congregacoes" :key="c.id" class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td class="px-4 py-3 whitespace-nowrap">
                  <span class="block font-medium text-indigo-700">{{ c.nome }}</span>
                  <div class="mt-1 flex items-center gap-1.5" v-if="c.diaReuniao || c.horarioReuniao">
                     <span v-if="c.diaReuniao" class="inline-block text-[10px] font-bold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded leading-none border border-gray-200">{{ c.diaReuniao }}</span>
                     <span v-if="c.horarioReuniao" class="inline-block text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded leading-none"><i class="far fa-clock mr-1"></i>{{ c.horarioReuniao }}</span>
                  </div>
                </td>
                <td class="px-4 py-3">{{ c.cidade }}</td>
                <td class="px-4 py-3 whitespace-nowrap">
                  <span class="block text-gray-800"><i class="fas fa-user-tie text-xs opacity-50 mr-1"></i> {{ c.coordenador }}</span>
                  <span class="block text-xs text-gray-500 mt-1"><i class="fab fa-whatsapp text-[11px] text-green-600 opacity-70 mr-1"></i> {{ c.telefone }}</span>
                </td>
                <td class="px-4 py-3 text-center whitespace-nowrap hidden md:table-cell">
                  <div class="flex items-center justify-center gap-2">
                    <button @click="editarCongregacao(c)" title="Modificar Registo" class="w-8 h-8 flex items-center justify-center rounded-md bg-orange-50 text-orange-500 hover:bg-orange-100 transition-colors">
                      <i class="fas fa-pen"></i>
                    </button>
                    <button @click="apagarCongregacao(c.id)" title="Eliminar Congregação" class="w-8 h-8 flex items-center justify-center rounded-md bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </BaseCard>
    </div>

    <!-- TAB ORADORES -->
    <div v-if="activeTab === 'oradores'" class="space-y-6">
      <BaseCard :title="oradorEditandoId ? 'Edição Estrutural da Ficha' : 'Adicionar Novo Orador Público'" :icon="oradorEditandoId ? 'fas fa-user-edit' : 'fas fa-user-plus'">
        <form @submit.prevent="salvarOrador" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-b border-gray-100 pb-6">
            <div class="space-y-1">
              <label class="block text-sm font-semibold text-gray-700">A Identificação do Orador <span class="text-red-500">*</span></label>
              <input v-model="formOrador.nome" required type="text" placeholder="O Primeiro e o Último nome" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-blue-50/20">
            </div>
            
            <div class="space-y-1">
              <label class="block text-sm font-semibold text-gray-700">Sua Congregação (obrigatório) <span class="text-red-500">*</span></label>
              <div class="relative">
                <select v-model="formOrador.congregacaoId" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow appearance-none cursor-pointer bg-blue-50/20 border-b-2 border-b-blue-500">
                  <option value="" disabled>-- Selecione a Congregação --</option>
                  <option v-for="c in congregacoes" :key="c.id" :value="c.id">{{ c.nome }} ({{ c.cidade }})</option>
                </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <i class="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>

              <div class="space-y-1">
                <label class="block text-sm font-semibold text-gray-700">Telefone do Orador (Opcional)</label>
                <input v-model="formOrador.telefone" type="tel" placeholder="Ex: 31 99999-9999" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
              </div>

              <div class="space-y-1">
                <label class="block text-sm font-semibold text-gray-700">E-mail (Opcional)</label>
                <input v-model="formOrador.email" type="email" placeholder="email@exemplo.com" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
              </div>

              <div class="space-y-1">
                <label class="block text-sm font-semibold text-gray-700">Privilégio</label>
                <div class="relative">
                  <select v-model="formOrador.cargo" class="appearance-none block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-gray-700 cursor-pointer">
                    <option value="">-- Sem Privilégio (Opcional) --</option>
                    <option value="Ancião">Ancião</option>
                    <option value="Servo Ministerial">Servo Ministerial</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <i class="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>

              <div class="space-y-1">
                <label class="block text-sm font-semibold text-gray-700">Disponibilidade</label>
                <select v-model="formOrador.disponibilidade" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white">
                  <option value="">-- Selecione --</option>
                  <option value="Presencial">Presencial</option>
                  <option value="Vídeo">Vídeo</option>
                  <option value="Ambos">Ambos</option>
                </select>
              </div>
            </div>

            <div class="pt-2">
              <div class="flex justify-between items-center mb-4">
                <h4 class="text-sm font-bold text-gray-800 flex items-center gap-2">
                  <i class="fas fa-book text-blue-500"></i> Temas S-99-T 
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full ml-1">{{ formOrador.temas.length }} selecionadas</span>
                </h4>
              </div>
              
              <div class="bg-gray-50/80 border border-gray-200 rounded-xl p-4 overflow-y-auto max-h-72 custom-scrollbar">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label v-for="t in temasFormatados" :key="t.numero" class="flex items-start gap-3 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-200 hover:shadow-sm">
                    <input type="checkbox" :checked="formOrador.temas.includes(t.numero)" @change="toggleTema(t.numero)" class="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 bg-white">
                    <span class="text-xs font-medium text-gray-700 leading-snug pt-0.5">
                      <span class="font-bold text-gray-500">Nº {{ t.numero }}</span> - {{ t.titulo }}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div class="pt-4 flex gap-3 flex-wrap">
              <BaseButton type="submit" :disabled="isSavingOrador" class="bg-blue-600 hover:bg-blue-700 shadow-sm min-w-[200px]">
                <i class="fas" :class="isSavingOrador ? 'fa-spinner fa-spin' : 'fa-save'"></i> <span class="ml-2 font-bold">{{ isSavingOrador ? 'Salvando...' : (oradorEditandoId ? 'Salvando Alterações' : 'Salvar') }}</span>
              </BaseButton>
              <BaseButton v-if="oradorEditandoId" type="button" variant="secondary" @click="cancelarEdicao" class="font-semibold">
                <i class="fas fa-times mr-1"></i> Cancelar
              </BaseButton>
            </div>
          </form>
      </BaseCard>

      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 fade-in pt-4">
        <div class="relative w-full sm:w-80">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fas fa-search text-gray-400"></i>
          </div>
          <input v-model="searchOrador" type="text" class="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-white text-sm" placeholder="Procure oradores por nome ou congregação...">
        </div>
      </div>

      <BaseCard title="Diretório de Oradores" icon="fas fa-address-book">
          <div class="overflow-x-auto -mx-6 mb-[-24px]">
            <table class="w-full text-sm text-left text-gray-600 border-collapse">
              <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100">
                <tr>
                  <th scope="col" class="px-4 py-3 font-semibold">Orador</th>
                  <th scope="col" class="px-4 py-3 font-semibold">Congregação / Contato</th>
                  <th scope="col" class="px-4 py-3 font-semibold">Temas S-99-T</th>
                  <th scope="col" class="px-4 py-3 font-semibold text-center hidden md:table-cell">Editar | Excluir</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="oradoresFiltrados.length === 0">
                  <td colspan="4" class="px-4 py-8 text-center text-sm text-gray-400">Nenhum orador corresponde à sua pesquisa.</td>
                </tr>
                <tr v-for="o in oradoresFiltrados" :key="o.id" class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 flex-shrink-0">
                        <span class="text-blue-600 font-bold text-xs">{{ o.nome.charAt(0).toUpperCase() }}</span>
                      </div>
                      <div>
                        <div class="font-medium text-gray-900">{{ o.nome }}</div>
                        <div class="flex gap-1 mt-0.5" v-if="o.cargo || o.disponibilidade">
                          <span v-if="o.cargo" class="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-bold">{{ o.cargo }}</span>
                          <span v-if="o.disponibilidade" class="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">{{ o.disponibilidade === 'Ambos' ? 'Presencial/Vídeo' : o.disponibilidade }}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <span class="block font-medium text-gray-800"><i class="fas fa-place-of-worship opacity-50 mr-1 text-xs"></i> {{ o.congregacaoNome || o.congregacao || 'Não Listada' }}</span>
                    <span v-if="o.telefone" class="block text-xs text-gray-500 mt-1"><i class="fab fa-whatsapp opacity-70 mr-1 text-[11px] text-green-600"></i> {{ o.telefone }}</span>
                    <span v-if="o.email" class="block text-xs text-gray-500 mt-0.5"><i class="fas fa-envelope opacity-70 mr-1 text-[10px] text-blue-600"></i> {{ o.email }}</span>
                  </td>
                  <td class="px-4 py-3">
                    <div v-if="!o.temas || o.temas.length === 0" class="text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded inline-block font-medium">
                      Portefólio Vazio
                    </div>
                    <div v-else class="flex flex-wrap gap-1.5 max-w-[280px]">
                      <span v-for="(t, i) in o.temas" :key="i" class="inline-flex items-center justify-center text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded shadow-sm hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-help" :title="typeof t === 'string' ? t.split('|')[1] : t.titulo">
                        <i class="fas fa-hashtag text-[8px] opacity-50 mr-0.5"></i>{{ typeof t === 'string' ? t.split('|')[0] : t.numero }}
                      </span>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-center whitespace-nowrap hidden md:table-cell">
                    <div class="flex items-center justify-center gap-2">
                      <button @click="editarOrador(o)" title="Modificar Ficha" class="w-8 h-8 flex items-center justify-center rounded-md bg-orange-50 text-orange-500 hover:bg-orange-100 transition-colors">
                        <i class="fas fa-pen"></i>
                      </button>
                      <button @click="apagarOrador(o.id)" title="Expurgar Registro" class="w-8 h-8 flex items-center justify-center rounded-md bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </BaseCard>
    </div>
  </div>
</template>

<style scoped>
.fade-in { animation: fadeIn 0.4s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
</style>
