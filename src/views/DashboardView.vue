<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useAgendaStore } from '../stores/agendaStore'
import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import BaseCard from '../components/ui/BaseCard.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import { temasFormatados } from '../data/temas'
import { useRouter } from 'vue-router'

const router = useRouter()
const agendaStore = useAgendaStore()

const palestrantes = ref<any[]>([])
const temasSugeridos = ref<number[]>([])
const temasSugeridosEdit = ref<number[]>([])
const showModal = ref(false)
const isLoadingSettings = ref(true)
const minhaCongregacao = ref('')

const carregarDadosMatchmaking = async () => {
  try {
    const snapPalestrantes = await getDocs(collection(db, 'palestrantes'))
    const records: any[] = []
    snapPalestrantes.forEach(d => records.push({ id: d.id, ...d.data() }))
    palestrantes.value = records

    const docSnap = await getDoc(doc(db, 'settings', 'congregacao_local'))
    if (docSnap.exists() && docSnap.data().temasSugeridos) {
      temasSugeridos.value = docSnap.data().temasSugeridos
      temasSugeridosEdit.value = [...temasSugeridos.value]
    }
  } catch (error) {
    console.error("Erro no Matchmaking", error)
  } finally {
    isLoadingSettings.value = false
  }
}

const salvarNecessidades = async () => {
  try {
    await setDoc(doc(db, 'settings', 'congregacao_local'), { temasSugeridos: temasSugeridosEdit.value }, { merge: true })
    temasSugeridos.value = [...temasSugeridosEdit.value]
    showModal.value = false
  } catch(e) {
    alert("Erro ao salvar")
  }
}

const matchmaking = computed(() => {
  return temasSugeridos.value.map(temaNum => {
    const info = temasFormatados.find(t => t.numero === temaNum)
    const oradoresMatch = palestrantes.value.filter(p => {
      if (!p.temas) return false
      return p.temas.some((t: any) => {
        if (typeof t === 'string') return parseInt(t.split('|')[0]) === temaNum
        return t.numero === temaNum
      })
    })
    return {
      numero: temaNum,
      titulo: info ? info.titulo : 'Desconhecido',
      oradores: oradoresMatch
    }
  })
})

const getTelefoneFormatado = (palestranteId: string) => {
  const p = palestrantes.value.find(x => x.id === palestranteId)
  if (!p || !p.telefone) return ''
  const clnd = p.telefone.replace(/\D/g, '')
  if (clnd.length === 11) {
    return `${clnd.slice(0, 2)} ${clnd.slice(2, 7)}-${clnd.slice(7)}`
  } else if (clnd.length === 10) {
    return `${clnd.slice(0, 2)} ${clnd.slice(2, 6)}-${clnd.slice(6)}`
  }
  return p.telefone
}

onMounted(() => {
  minhaCongregacao.value = localStorage.getItem('minhaCongregacao') || 'Instituição Não Definida'
  agendaStore.fetchAgendamentos()
  carregarDadosMatchmaking()
})

const proximosDiscursos = computed(() => {
  const hoje = new Date()
  hoje.setHours(0, 0, 0, 0)
  return agendaStore.agendamentos.filter(d => new Date(d.dataDiscurso + "T00:00:00") >= hoje)
})

const ultimoDiscurso = computed(() => {
  const hoje = new Date()
  hoje.setHours(0, 0, 0, 0)
  const passados = agendaStore.agendamentos.filter(d => new Date(d.dataDiscurso + "T00:00:00") < hoje)
  return passados.length > 0 ? [passados[passados.length - 1]] : []
})

const formatData = (dataStr: string) => dataStr.split('-').reverse().join('/')
</script>

<template>
  <div class="max-w-6xl mx-auto pb-10 fade-in">
    <!-- Header -->
    <header class="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-gray-200 pb-5 mb-8 gap-4">
      <div>
        <div class="flex items-center gap-3 mb-1">
          <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Congregação</h1>
          <span class="bg-indigo-50 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-md flex items-center border border-indigo-100 shadow-sm transition-all hover:bg-indigo-100 cursor-help" :title="`Sua Instituição Local: ${minhaCongregacao}`">
            <i class="fas fa-place-of-worship mr-1.5 opacity-70"></i> {{ minhaCongregacao }}
          </span>
        </div>
        <p class="text-gray-500">Acompanhe as próximas programações e o histórico recente.</p>
      </div>
      <div>
        <router-link to="/agendar" class="inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full sm:w-auto">
          <i class="fas fa-calendar-plus mr-2"></i> Agendar Discurso
        </router-link>
      </div>
    </header>

    <div v-if="agendaStore.isLoading || isLoadingSettings" class="flex flex-col items-center justify-center py-20 text-blue-500">
      <i class="fas fa-spinner fa-spin fa-2x mb-3"></i>
      <span class="text-sm font-medium text-gray-500 animate-pulse">A Sincronizar Informações...</span>
    </div>

    <!-- Sections -->
    <template v-else>
      <!-- MATCHMAKING DE TEMAS -->
      <section class="mb-12">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <h2 class="text-lg font-bold text-gray-800 flex items-center">
            <i class="fas fa-bullseye text-red-500 w-6"></i> Necessidades da Congregação
          </h2>
          <button @click="showModal = true" class="text-sm text-blue-600 hover:text-blue-800 font-medium bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
            <i class="fas fa-cog mr-1"></i> Definir Necessidades
          </button>
        </div>

        <div v-if="matchmaking.length === 0" class="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center text-gray-500 text-sm">
          A congregação não tem nenhuma necessidade de tema definida no momento. Crie a lista no botão acima.
        </div>

        <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <BaseCard v-for="m in matchmaking" :key="m.numero" class="border-t-[3px] border-t-red-400">
            <h4 class="text-md font-bold text-gray-900 mb-3 leading-snug">Nº {{ m.numero }} - {{ m.titulo }}</h4>
            
            <div v-if="m.oradores.length === 0" class="text-xs font-semibold text-red-500 bg-red-50 p-2 rounded inline-block">
              <i class="fas fa-exclamation-triangle mr-1"></i> Oradores Esgotados na Base de Dados.
            </div>
            
            <div v-else class="flex flex-wrap gap-2">
              <button 
                v-for="o in m.oradores" :key="o.id" 
                @click="router.push(`/agendar?orador=${o.id}&temaNum=${m.numero}`)"
                class="inline-flex items-center text-xs font-medium text-blue-800 bg-blue-100/70 hover:bg-blue-200 px-3 py-1.5 rounded-full transition-colors group"
                title="Clique para agendar rapidamente este orador!"
              >
                <i class="fas fa-user-plus text-blue-400 group-hover:text-blue-600 mr-1.5"></i>
                {{ o.nome }}
                <span v-if="o.congregacao" class="ml-1 opacity-60">({{ o.congregacaoNome || o.congregacao }})</span>
              </button>
            </div>
          </BaseCard>
        </div>
      </section>

      <section>
        <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <i class="fas fa-calendar-alt text-blue-500 w-6"></i> Próximos Discursos
        </h2>

        <div v-if="proximosDiscursos.length === 0" class="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center text-gray-500">
          <i class="fas fa-inbox text-3xl mb-3 text-gray-300"></i>
          <p class="text-sm font-medium">Nenhum discurso agendado futuramente.</p>
        </div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <BaseCard v-for="d in proximosDiscursos" :key="d.id" class="border-t-[3px] border-t-blue-500 hover:-translate-y-1 transition-transform duration-300">
            <div class="flex justify-between items-start mb-3">
              <time class="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded inline-block tracking-wide">
                {{ formatData(d.dataDiscurso) }}
              </time>
              <button @click="router.push(`/agendar?id=${d.id}`)" class="text-orange-400 hover:text-orange-600 bg-orange-50 hover:bg-orange-100 w-7 h-7 flex items-center justify-center rounded transition-colors shadow-sm" title="Editar Programação">
                <i class="fas fa-pen text-xs"></i>
              </button>
            </div>
            <h4 class="text-lg font-bold text-gray-900 leading-tight mb-4">{{ d.temaSelecionado }}</h4>
            <div class="space-y-2 text-sm text-gray-600">
              <p class="flex items-center gap-2"><i class="fas fa-user text-gray-400 w-4"></i> <span class="font-medium text-gray-700">{{ d.palestranteNome }}</span></p>
              <p class="flex items-center gap-2" v-if="getTelefoneFormatado(d.palestranteId)"><i class="fas fa-phone-alt text-gray-400 w-4"></i> {{ getTelefoneFormatado(d.palestranteId) }}</p>
              <p class="flex items-center gap-2" v-if="d.congregacao"><i class="fas fa-place-of-worship text-gray-400 w-4"></i> {{ d.congregacao }}</p>
              <p class="flex items-center gap-2"><i class="fas fa-music text-gray-400 w-4"></i> Cântico nº {{ d.cantico }}</p>
            </div>
          </BaseCard>
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <i class="fas fa-history text-gray-500 w-6"></i> Último Discurso Realizado
        </h2>

        <div v-if="ultimoDiscurso.length === 0" class="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center text-gray-400">
          <p class="text-sm font-medium">Sem histórico de discursos anteriores nesta base de dados.</p>
        </div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <BaseCard v-for="d in ultimoDiscurso" :key="d.id" class="border-t-[3px] border-t-gray-300 bg-gray-50/50 opacity-90 hover:opacity-100 transition-opacity">
            <div class="flex justify-between items-start mb-2">
              <time class="text-xs font-medium text-gray-500 block">
                {{ formatData(d.dataDiscurso) }}
              </time>
              <button @click="router.push(`/agendar?id=${d.id}`)" class="text-gray-400 hover:text-orange-500 bg-white border border-gray-200 hover:border-orange-200 hover:bg-orange-50 w-6 h-6 flex items-center justify-center rounded transition-colors" title="Editar Registro Antigo">
                <i class="fas fa-pen text-[10px]"></i>
              </button>
            </div>
            <h4 class="text-base font-bold text-gray-800 mb-2">{{ d.temaSelecionado }}</h4>
            <div class="text-sm text-gray-500 space-y-1">
              <p class="flex items-center gap-2"><i class="fas fa-user-check text-gray-400 w-4"></i> {{ d.palestranteNome }}</p>
              <p class="flex items-center gap-2 text-xs" v-if="getTelefoneFormatado(d.palestranteId)"><i class="fas fa-phone-alt text-gray-300 w-4"></i> {{ getTelefoneFormatado(d.palestranteId) }}</p>
            </div>
          </BaseCard>
        </div>
      </section>
    </template>

    <!-- Modal Necessidades Trimestrais -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 fade-in">
      <div class="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        <header class="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <div>
            <h2 class="text-xl font-bold text-gray-800">Definir Necessidades Trimestrais</h2>
            <p class="text-sm text-gray-500 mt-1">Marque os discursos que a congregação precisa de ouvir.</p>
          </div>
          <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 bg-white p-2 rounded-full shadow-sm"><i class="fas fa-times"></i></button>
        </header>
        <div class="p-6 overflow-y-auto w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          <label v-for="t in temasFormatados" :key="t.numero" class="flex items-start gap-3 p-2.5 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-blue-100 group">
            <input type="checkbox" :value="t.numero" v-model="temasSugeridosEdit" class="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 bg-white">
            <span class="text-sm font-medium text-gray-700 group-hover:text-blue-900 leading-snug">
              <span class="font-bold text-gray-400 group-hover:text-blue-400">Nº {{ t.numero }}</span> <br> {{ t.titulo }}
            </span>
          </label>
        </div>
        <footer class="p-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
          <BaseButton variant="secondary" @click="showModal = false">Cancelar</BaseButton>
          <BaseButton @click="salvarNecessidades">Gravar Lista ({{ temasSugeridosEdit.length }} temas)</BaseButton>
        </footer>
      </div>
    </div>

    <!-- App Version & Support Footer -->
    <footer class="mt-16 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-end sm:items-center text-[11px] text-gray-400 uppercase tracking-wide font-medium">
      <span>Agenda de Discursos &copy; {{ new Date().getFullYear() }} — Versão 1.0.0</span>
      <a href="mailto:admin@exemplo.com" class="mt-3 sm:mt-0 hover:text-blue-500 transition-colors flex items-center gap-1.5 outline-none focus:text-blue-600 pb-1 border-b border-transparent hover:border-blue-200">
        <i class="fas fa-headset text-gray-300"></i> Relatar Problema
      </a>
    </footer>
  </div>
</template>

<style scoped>
.fade-in { animation: fadeIn 0.4s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
</style>
