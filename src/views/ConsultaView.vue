<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAgendaStore } from '../stores/agendaStore'
import { doc, deleteDoc, addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import BaseCard from '../components/ui/BaseCard.vue'

const router = useRouter()
const agendaStore = useAgendaStore()

const search = ref('')
const orderAsc = ref(true)
const startDate = ref('')
const endDate = ref('')
const minhaCongregacao = ref('')

onMounted(async () => {
  minhaCongregacao.value = localStorage.getItem('minhaCongregacao') || ''
  await agendaStore.fetchAgendamentos()
})

const deletar = async (id: string) => {
  if (confirm('Deseja realmente apagar este agendamento?')) {
    await deleteDoc(doc(db, 'agendamentos', id))
    await agendaStore.fetchAgendamentos(true)
  }
}

const marcarConcluido = async (agendamento: any) => {
  if (confirm(`Trancar o discurso de ${agendamento.palestranteNome} e salvá-lo no Histórico S-99? (Isto iniciará a regra de 6 meses para o tema).`)) {
    try {
      const match = agendamento.temaSelecionado.match(/Nº\s+(\d+)/i)
      const numero = match ? parseInt(match[1]) : 0
      
      await addDoc(collection(db, 'historico_temas'), {
        oradorId: agendamento.palestranteId || '',
        oradorNome: agendamento.palestranteNome,
        congregacaoBase: agendamento.congregacao || '',
        numeroTema: numero,
        temaTitulo: agendamento.temaSelecionado,
        dataRealizada: agendamento.dataDiscurso,
        formatoRealizado: agendamento.formato || 'Presencial'
      })

      await deleteDoc(doc(db, 'agendamentos', agendamento.id))
      await agendaStore.fetchAgendamentos(true)
      alert("✅ Movido para o Histórico S-99-T com sucesso!")
    } catch (e) {
      console.error(e)
      alert("Erro ao gravar no histórico.")
    }
  }
}

const exportToExcel = () => {
  import('xlsx').then(XLSX => {
    if (agendamentosFiltrados.value.length === 0) return alert('Nenhum dado para exportar!')
    const data = agendamentosFiltrados.value.map(a => ({
      'Data': formatData(a.dataDiscurso),
      'Formato': a.formato || 'Presencial',
      'Orador': a.palestranteNome,
      'Cargo': a.cargo || 'Não definido',
      'Congregação': a.congregacao,
      'Tema': a.temaSelecionado,
      'Cântico': a.cantico
    }))
    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "Agenda")
    XLSX.writeFile(wb, "Agenda_Discursos.xlsx")
  })
}

const formatData = (dataStr: string) => dataStr.split('-').reverse().join('/')

const isLocalCongregation = (congName: string) => {
  if (!minhaCongregacao.value) return false
  return congName.toLowerCase() === minhaCongregacao.value.toLowerCase()
}

const agendamentosFiltrados = computed(() => {
  let result = agendaStore.agendamentos

  if (search.value) {
    const s = search.value.toLowerCase()
    result = result.filter(a => 
      a.palestranteNome.toLowerCase().includes(s) || 
      (a.congregacao && a.congregacao.toLowerCase().includes(s)) ||
      a.temaSelecionado.toLowerCase().includes(s)
    )
  }

  if (startDate.value) {
    result = result.filter(a => new Date(a.dataDiscurso) >= new Date(startDate.value))
  }
  
  if (endDate.value) {
    result = result.filter(a => new Date(a.dataDiscurso) <= new Date(endDate.value))
  }

  result = [...result].sort((a, b) => {
    const da = new Date(a.dataDiscurso).getTime()
    const dbTime = new Date(b.dataDiscurso).getTime()
    return orderAsc.value ? da - dbTime : dbTime - da
  })

  return result
})
</script>

<template>
  <div class="max-w-6xl mx-auto pb-10 fade-in">
    <header class="mb-8">
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Consulta de Agendamentos</h1>
      <p class="text-gray-500 mt-1">Navegue pelas programações atuais marcadas na Base de Dados e faça a gestão.</p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
      <div class="lg:col-span-8 flex flex-col md:flex-row gap-3">
        <div class="relative flex-1">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fas fa-search text-gray-400"></i>
          </div>
          <input v-model="search" type="text" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-white" placeholder="Pesquisar discurso por orador, tema ou congregação...">
        </div>

        <div class="flex gap-2">
          <input v-model="startDate" type="date" title="Data Inicial" class="px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500">
          <span class="text-gray-400 self-center">-</span>
          <input v-model="endDate" type="date" title="Data Final" class="px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500">
        </div>
      </div>

      <div class="lg:col-span-4 flex justify-start lg:justify-end gap-3">
        <button @click="orderAsc = !orderAsc" class="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition-colors" title="Inverter Ordem Cronológica">
          <i class="fas" :class="orderAsc ? 'fa-sort-amount-down-alt' : 'fa-sort-amount-up'"></i> Ordenar
        </button>
        <button @click="exportToExcel" class="px-4 py-2 bg-green-50 border border-green-200 text-green-700 rounded-md shadow-sm text-sm font-medium hover:bg-green-100 hover:text-green-800 focus:outline-none transition-colors">
          <i class="fas fa-download mr-1.5"></i> Exportar
        </button>
      </div>
    </div>

    <BaseCard>
      <div v-if="agendaStore.isLoading" class="text-center py-10">
        <i class="fas fa-spinner fa-spin fa-2x text-blue-500"></i>
      </div>
      
      <div v-else class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-600 border-collapse">
          <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100">
            <tr>
              <th scope="col" class="px-4 py-3 font-semibold">Data</th>
              <th scope="col" class="px-4 py-3 font-semibold">Orador</th>
              <th scope="col" class="px-4 py-3 font-semibold">Congregação</th>
              <th scope="col" class="px-4 py-3 font-semibold">Tema</th>
              <th scope="col" class="px-4 py-3 font-semibold text-center">Cântico</th>
              <th scope="col" class="px-4 py-3 font-semibold text-center hidden md:table-cell">Arquivar | Editar | Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="agendamentosFiltrados.length === 0">
              <td colspan="6" class="px-4 py-8 text-center text-sm text-gray-400">Nenhum discurso corresponde à sua pesquisa.</td>
            </tr>
            <tr v-for="d in agendamentosFiltrados" :key="d.id" class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
              <td class="px-4 py-3 whitespace-nowrap font-medium text-gray-900">{{ formatData(d.dataDiscurso) }}</td>
              <td class="px-4 py-3">
                <div class="font-medium text-gray-900">{{ d.palestranteNome }}</div>
                <div class="flex gap-1 mt-0.5" v-if="d.cargo || d.formato">
                  <span v-if="d.cargo" class="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-bold">{{ d.cargo }}</span>
                  <span v-if="d.formato === 'Vídeo-Conferência'" class="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold" title="Via Zoom"><i class="fas fa-video mr-1"></i>Zoom</span>
                  <span v-else-if="d.formato === 'Presencial'" class="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold"><i class="fas fa-users mr-1"></i>Físico</span>
                </div>
              </td>
              <td class="px-4 py-3">
                <span v-if="isLocalCongregation(d.congregacao || '')" class="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide mr-1">Local</span>
                <span v-else class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide mr-1">Visitante</span>
                {{ d.congregacao }}
              </td>
              <td class="px-4 py-3 min-w-[200px]">{{ d.temaSelecionado }}</td>
              <td class="px-4 py-3 text-center">
                <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{{ d.cantico }}</span>
              </td>
              <td class="px-4 py-3 text-center whitespace-nowrap hidden md:table-cell">
                <div class="flex items-center justify-center gap-2">
                  <button @click="marcarConcluido(d)" title="Trancar e guardar no S-99" class="w-8 h-8 flex items-center justify-center rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-colors">
                    <i class="fas fa-check-circle"></i>
                  </button>
                  <button @click="router.push('/agendar?id=' + d.id)" title="Modificar Programação" class="w-8 h-8 flex items-center justify-center rounded-md bg-orange-50 text-orange-500 hover:bg-orange-100 transition-colors">
                    <i class="fas fa-pen"></i>
                  </button>
                  <button @click="deletar(d.id)" title="Eliminar Registro" class="w-8 h-8 flex items-center justify-center rounded-md bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
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
</template>

<style scoped>
.fade-in { animation: fadeIn 0.4s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
</style>
