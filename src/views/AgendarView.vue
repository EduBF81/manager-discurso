<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAgendaStore } from '../stores/agendaStore'
import { collection, addDoc, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import BaseCard from '../components/ui/BaseCard.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import { temasFormatados } from '../data/temas'

const router = useRouter()
const route = useRoute()
const agendaStore = useAgendaStore()

const isScanningHistory = ref(false)
const historyWarning = ref('')
const isLoading = ref(false)

const agendamentoId = ref<string | null>(null)
const palestrantes = ref<any[]>([])
const historicoLocal = ref<any[]>([])

const form = ref({
  dataDiscurso: '',
  palestranteId: '',
  lemaSelecionado: '',
  cantico: '',
  formato: 'Presencial',
  isEventoEspecial: false,
  horaEspecial: ''
})

const carregarDadosEssenciais = async () => {
  try {
    const snapPal = await getDocs(collection(db, 'palestrantes'))
    const recordsPal: any[] = []
    snapPal.forEach(d => recordsPal.push({ id: d.id, ...d.data() }))
    palestrantes.value = recordsPal.sort((a, b) => a.nome.localeCompare(b.nome))

    const snapHist = await getDocs(collection(db, 'historico_temas'))
    const recordsHist: any[] = []
    snapHist.forEach(d => recordsHist.push({ id: d.id, ...d.data() }))
    historicoLocal.value = recordsHist

    if (route.query.id) {
      agendamentoId.value = route.query.id as string
      const docRef = doc(db, 'agendamentos', agendamentoId.value)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const d = docSnap.data()
        form.value.dataDiscurso = d.dataDiscurso
        form.value.palestranteId = d.palestranteId || ''
        form.value.lemaSelecionado = d.temaSelecionado
        form.value.cantico = d.cantico
        form.value.formato = d.formato || 'Presencial'
        form.value.isEventoEspecial = d.isEventoEspecial || false
        form.value.horaEspecial = d.horaEspecial || ''
      }
    } else {
      if (route.query.orador) form.value.palestranteId = route.query.orador as string
      if (route.query.temaNum) {
        const tObj = temasFormatados.find(t => t.numero === parseInt(route.query.temaNum as string))
        if (tObj) form.value.lemaSelecionado = `Nº ${tObj.numero} - ${tObj.titulo}`
      }
    }
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  carregarDadosEssenciais()
})

watch(() => form.value.palestranteId, (newId) => {
  historyWarning.value = ''
  if (!newId || agendamentoId.value) return
  
  const orador = palestrantes.value.find(p => p.id === newId)
  if (orador && orador.disponibilidade === 'Vídeo') {
    form.value.formato = 'Vídeo-Conferência'
  } else {
    form.value.formato = 'Presencial'
  }

  isScanningHistory.value = true
  setTimeout(() => {
    const oradorHistory = historicoLocal.value.filter(h => h.oradorId === newId)
    if (oradorHistory.length > 0) {
      const oradorNome = palestrantes.value.find(p => p.id === newId)?.nome || 'Este orador'
      const ultimo = oradorHistory.sort((a,b) => new Date(b.dataRealizada || `${b.anoRealizado}-01-01`).getTime() - new Date(a.dataRealizada || `${a.anoRealizado}-01-01`).getTime())[0]
      const dataUltimo = ultimo.dataRealizada ? ultimo.dataRealizada.split('-').reverse().join('/') : ultimo.anoRealizado
      
      const mesesPassados = ultimo.dataRealizada ? Math.floor((new Date().getTime() - new Date(ultimo.dataRealizada).getTime()) / (1000 * 60 * 60 * 24 * 30)) : 12

      if (mesesPassados < 6) {
        historyWarning.value = `⚠️ Atenção: ${oradorNome} proferiu o tema "${ultimo.temaTitulo}" recentemente (${dataUltimo}). Já passaram ${mesesPassados} meses. Recomendado: Carencia de 6 meses.`
      } else {
         historyWarning.value = `ℹ️ ${oradorNome} discursou aqui a última vez em ${dataUltimo}.`
      }
    }
    isScanningHistory.value = false
  }, 400)
})

const getOradorTemas = (id: string) => {
  const p = palestrantes.value.find(x => x.id === id)
  if (!p || !p.temas) return []
  return p.temas.map((t: any) => {
    if (typeof t === 'string') {
      const parts = t.split('|')
      if (parts.length > 1) return `Nº ${parts[0]} - ${parts[1]}`
      return t
    } else {
      return `Nº ${t.numero} - ${t.titulo}`
    }
  })
}

const isTemaDisponivel = (temaStr: string) => {
  if (agendamentoId.value) return true // Edit mode ignores
  if (!form.value.palestranteId) return true

  const match = temaStr.match(/Nº\s+(\d+)/i)
  if (!match) return true
  const numero = parseInt(match[1])

  const foiProferido = historicoLocal.value.find(h => h.numeroTema === numero)
  if (!foiProferido) return true

  if (!foiProferido.dataRealizada) return true

  const dataHis = new Date(foiProferido.dataRealizada)
  const dataHoje = form.value.dataDiscurso ? new Date(form.value.dataDiscurso) : new Date()
  
  const meses = (dataHoje.getFullYear() - dataHis.getFullYear()) * 12 + (dataHoje.getMonth() - dataHis.getMonth())
  return meses >= 6
}

const getRazaoBloqueio = (temaStr: string) => {
  const match = temaStr.match(/Nº\s+(\d+)/i)
  if (!match) return ''
  const numero = parseInt(match[1])
  const foiProferido = historicoLocal.value.find(h => h.numeroTema === numero)
  if (foiProferido && foiProferido.dataRealizada) {
     return `Proferido por ${foiProferido.oradorNome} em ${foiProferido.dataRealizada.split('-').reverse().join('/')}`
  }
  return 'Bloqueado por carência'
}

const salvarAgendamento = async () => {
  if (!form.value.dataDiscurso || !form.value.palestranteId || !form.value.lemaSelecionado || !form.value.cantico) {
    alert("Preencha todos os campos obrigatórios.")
    return
  }
  
  isLoading.value = true

  try {
    const snap = await getDocs(collection(db, 'agendamentos'))
    const atuais: any[] = []
    snap.forEach(d => atuais.push({ id: d.id, ...d.data() }))

    const duplicado = atuais.find(a => 
      a.id !== agendamentoId.value &&
      a.dataDiscurso === form.value.dataDiscurso && 
      a.palestranteId === form.value.palestranteId
    )

    if (duplicado) {
       alert(`⚠️ ERRO DUPICIDADE: O orador já está marcado para o dia ${form.value.dataDiscurso.split('-').reverse().join('/')}! Escolha outra data.`)
       isLoading.value = false
       return
    }

    const oradorInfo = palestrantes.value.find(p => p.id === form.value.palestranteId)
    const payload = {
      dataDiscurso: form.value.dataDiscurso,
      palestranteId: form.value.palestranteId,
      palestranteNome: oradorInfo?.nome || 'Desconhecido',
      congregacao: oradorInfo?.congregacaoNome || oradorInfo?.congregacao || '',
      temaSelecionado: form.value.lemaSelecionado,
      cantico: form.value.cantico,
      formato: form.value.formato,
      cargo: oradorInfo?.cargo || '',
      isEventoEspecial: form.value.isEventoEspecial,
      horaEspecial: form.value.isEventoEspecial ? form.value.horaEspecial : ''
    }
    
    if (agendamentoId.value) {
      await updateDoc(doc(db, 'agendamentos', agendamentoId.value), payload)
      alert("Agendamento modificado com sucesso!")
    } else {
      await addDoc(collection(db, 'agendamentos'), payload)
      alert("Novo discurso agendado com sucesso!")
    }
    
    await agendaStore.fetchAgendamentos(true)
    router.push('/consulta')
  } catch (error) {
    console.error(error)
    alert("Erro ao gravar. Tente novamente.")
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto pb-10 fade-in">
    <header class="mb-8">
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
        {{ agendamentoId ? 'Editar Programação' : 'Agendar Novo Discurso' }}
      </h1>
      <p class="text-gray-500 mt-1">Selecione uma data, o orador visitante ou local, e cruze os dados de histórico.</p>
    </header>

    <BaseCard class="border-t-[4px] border-t-blue-500 pb-2">
      <form @submit.prevent="salvarAgendamento" class="space-y-6">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-1.5 focus-within-glow p-2 -m-2 rounded-lg transition-colors">
            <label class="block text-sm font-semibold text-gray-800">Orador Convite <span class="text-red-500">*</span></label>
            <div class="relative">
              <select v-model="form.palestranteId" required class="appearance-none block w-full pl-3 pr-10 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-shadow cursor-pointer">
                <option value="" disabled>-- Selecione um Orador Ativo --</option>
                <option v-for="p in palestrantes" :key="p.id" :value="p.id">
                  {{ p.nome }} {{ p.cargo ? `[${p.cargo}] ` : '' }}{{ p.congregacaoNome || p.congregacao ? `(${p.congregacaoNome || p.congregacao})` : '' }}
                </option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <i class="fas fa-chevron-down text-sm"></i>
              </div>
            </div>

            <div v-if="historyWarning" class="mt-3 bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-md text-sm text-amber-800 animate-pulse">
              {{ historyWarning }}
            </div>
          </div>
          
          <div class="space-y-1.5 focus-within-glow p-2 -m-2 rounded-lg transition-colors">
            <label class="block text-sm font-semibold text-gray-800">Data do Discurso <span class="text-red-500">*</span></label>
            <input v-model="form.dataDiscurso" type="date" required class="block w-full px-3 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-shadow cursor-pointer">
          </div>
        </div>

        <!-- Toggle Evento Especial (Agendamento Customizado) -->
        <div class="bg-indigo-50/50 border border-indigo-100 rounded-lg p-4 mt-2 mb-2 transition-all">
          <label class="flex items-center gap-3 cursor-pointer w-max mb-3">
             <input type="checkbox" v-model="form.isEventoEspecial" class="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 focus:ring-2 bg-white">
             <span class="text-sm font-bold text-indigo-800"><i class="fas fa-calendar-star mr-1 opacity-70"></i> É um Evento / Discurso Especial ou Celebração?</span>
          </label>
          
          <div v-if="form.isEventoEspecial" class="grid grid-cols-1 md:grid-cols-2 gap-5 fade-in mt-4 pl-7 border-l-2 border-indigo-200">
             <div class="space-y-1">
               <label class="block text-sm font-semibold text-indigo-900">Hora Exata da Palestra</label>
               <input v-model="form.horaEspecial" type="time" class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow bg-white">
             </div>
             <div class="space-y-1">
               <label class="block text-sm font-semibold text-indigo-900">Motivo (Opcional)</label>
               <input type="text" placeholder="Ex: Ajuste de Horário da Reunião" class="w-full px-3 py-2 border border-indigo-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow bg-white text-gray-600">
             </div>
             <div class="md:col-span-2 mt-1">
               <p class="text-[11px] text-indigo-600 font-medium">Assinalar um evento especial previne que o Formulário do Orador puxe o horário semanal padrão da Congregação, e adota esta hora especificada para o agendamento.</p>
             </div>
          </div>
        </div>

        <div class="space-y-1.5 pt-2 focus-within-glow p-2 -m-2 rounded-lg transition-colors">
          <label class="block text-sm font-semibold text-gray-800">Tema a ser Proferido <span class="text-red-500">*</span></label>
          <div class="relative">
            <select v-model="form.lemaSelecionado" required :disabled="!form.palestranteId" class="appearance-none block w-full pl-3 pr-10 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-shadow cursor-pointer disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-not-allowed">
              <option value="" disabled>{{ form.palestranteId ? '-- Escolha o Tema --' : 'Selecione um orador primeiro' }}</option>
              <template v-if="form.palestranteId">
                <option 
                  v-for="tema in getOradorTemas(form.palestranteId)" 
                  :key="tema" 
                  :value="tema" 
                  :disabled="!isTemaDisponivel(tema)"
                  :class="!isTemaDisponivel(tema) ? 'text-gray-400 bg-gray-100 italic' : ''"
                >
                  {{ tema }} {{ !isTemaDisponivel(tema) ? `(BLOQUEADO - 6 Meses: ${getRazaoBloqueio(tema)})` : '' }}
                </option>
              </template>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
               <i class="fas" :class="!form.palestranteId ? 'fa-lock' : 'fa-chevron-down text-sm'"></i>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-1 ml-1 flex items-center gap-1.5">
            <i class="fas fa-info-circle"></i> O sistema bloqueia automaticamente temas S-99 feitos nos últimos 6 meses.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div class="space-y-1.5 focus-within-glow p-2 -m-2 rounded-lg transition-colors">
            <label class="block text-sm font-semibold text-gray-800">Cântico a ser usado <span class="text-red-500">*</span></label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-music text-gray-400"></i>
              </div>
              <input v-model="form.cantico" type="number" min="1" max="151" placeholder="Ex: 54" required class="block w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-shadow">
            </div>
          </div>
          
          <div class="space-y-1.5 focus-within-glow p-2 -m-2 rounded-lg transition-colors">
            <label class="block text-sm font-semibold text-gray-800">Formato da Reunião <span class="text-red-500">*</span></label>
            <div class="relative w-full">
              <select v-model="form.formato" required class="appearance-none block w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-shadow cursor-pointer">
                <option value="Presencial">Presencial (Físico no Salão)</option>
                <option value="Vídeo-Conferência">Via Zoom / Vídeo-Conferência</option>
              </select>
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas" :class="form.formato === 'Presencial' ? 'fa-users text-gray-400' : 'fa-video text-blue-500'"></i>
              </div>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <i class="fas fa-chevron-down text-sm"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-6 border-t border-gray-100 flex gap-4 md:justify-start">
          <BaseButton type="submit" :disabled="isLoading" class="py-2.5 px-6 min-w-[200px] text-base tracking-wide bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all">
            <i class="fas" :class="isLoading ? 'fa-spinner fa-spin' : (agendamentoId ? 'fa-save' : 'fa-calendar-check')"></i> 
            <span class="ml-2 font-bold">{{ isLoading ? 'A Sincronizar...' : (agendamentoId ? 'Salvar Edição' : 'Confirmar Agendamento') }}</span>
          </BaseButton>
          <BaseButton type="button" variant="secondary" @click="router.push('/consulta')" class="py-2.5 px-6 font-semibold">
            Cancelar
          </BaseButton>
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<style scoped>
.fade-in { animation: fadeIn 0.4s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
.focus-within-glow:focus-within { background-color: #f8fafc; }
</style>
