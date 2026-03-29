<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'
import BaseCard from '../components/ui/BaseCard.vue'

const historico = ref<any[]>([])
const search = ref('')

const carregarHistorico = async () => {
  try {
    const snap = await getDocs(collection(db, 'historico_temas'))
    const records: any[] = []
    snap.forEach(d => records.push({ id: d.id, ...d.data() }))
    historico.value = records.sort((a, b) => {
      const da = a.dataRealizada ? new Date(a.dataRealizada).getTime() : new Date(`${a.anoRealizado || 2000}-01-01`).getTime()
      const dbDate = b.dataRealizada ? new Date(b.dataRealizada).getTime() : new Date(`${b.anoRealizado || 2000}-01-01`).getTime()
      const safeDa = isNaN(da) ? 0 : da
      const safeDb = isNaN(dbDate) ? 0 : dbDate
      return safeDb - safeDa // Descendente (mais recente primeiro)
    })
  } catch (e) {
    console.error("Erro ao carregar histórico: ", e)
  }
}

const apagarRegistro = async (id: string) => {
  if (confirm('Tem certeza que deseja apagar este registo? Ele não bloqueará mais a regra de 6 meses.')) {
    await deleteDoc(doc(db, 'historico_temas', id))
    await carregarHistorico()
  }
}

onMounted(() => {
  carregarHistorico()
})

const historicoFiltrado = computed(() => {
  if (!search.value.trim()) return historico.value

  const query = search.value.toLowerCase().trim()
  return historico.value.filter(h => 
    (h.oradorNome && h.oradorNome.toLowerCase().includes(query)) || 
    (h.temaTitulo && h.temaTitulo.toLowerCase().includes(query)) ||
    (h.numeroTema && h.numeroTema.toString() === query) ||
    (h.congregacaoBase && h.congregacaoBase.toLowerCase().includes(query))
  )
})
</script>

<template>
  <div class="max-w-6xl mx-auto pb-10 fade-in">
    <header class="mb-8">
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Histórico S-99-T</h1>
      <p class="text-gray-500 mt-1">Discursos proferidos localmente. O sistema impõe uma carência de 6 meses.</p>
    </header>

    <div class="mb-6">
      <div class="relative max-w-md">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i class="fas fa-search text-gray-400"></i>
        </div>
        <input v-model="search" type="text" class="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-white" placeholder="Filtre por orador ou tema...">
      </div>
    </div>

    <BaseCard>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-600 border-collapse">
          <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100">
            <tr>
              <th scope="col" class="px-4 py-3 font-semibold">Data R.</th>
              <th scope="col" class="px-4 py-3 font-semibold">Orador</th>
              <th scope="col" class="px-4 py-3 font-semibold hidden md:table-cell">Congregação Base</th>
              <th scope="col" class="px-4 py-3 font-semibold">Nº</th>
              <th scope="col" class="px-4 py-3 font-semibold">Tema Proferido</th>
              <th scope="col" class="px-4 py-3 font-semibold text-center hidden md:table-cell">Ações Mestra</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="historicoFiltrado.length === 0">
              <td colspan="6" class="px-4 py-8 text-center text-sm text-gray-400">Nenhum registo no histórico encontrado.</td>
            </tr>
            <tr v-for="h in historicoFiltrado" :key="h.id" class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
              <td class="px-4 py-3 whitespace-nowrap font-medium text-gray-900">{{ h.dataRealizada ? h.dataRealizada.split('-').reverse().join('/') : h.anoRealizado }}</td>
              <td class="px-4 py-3 font-medium text-blue-700">{{ h.oradorNome }}</td>
              <td class="px-4 py-3 hidden md:table-cell">{{ h.congregacaoBase || 'Não listada' }}</td>
              <td class="px-4 py-3">
                <span class="bg-blue-50 text-blue-700 font-bold px-2 py-1 rounded text-xs">#{{ h.numeroTema }}</span>
              </td>
              <td class="px-4 py-3">{{ h.temaTitulo }}</td>
              <td class="px-4 py-3 text-center whitespace-nowrap hidden md:table-cell">
                <div class="flex items-center justify-center gap-2">
                  <button @click="apagarRegistro(h.id)" title="Eliminar Registro" class="w-8 h-8 flex items-center justify-center rounded-md bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
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
