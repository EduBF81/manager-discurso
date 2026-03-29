import { defineStore } from 'pinia'
import { ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

export interface Agendamento {
  id: string
  dataDiscurso: string
  palestranteNome: string
  palestranteId: string
  congregacao?: string
  temaSelecionado: string
  cantico: string | number
  cargo?: string
  formato?: string
}

export const useAgendaStore = defineStore('agenda', () => {
  const agendamentos = ref<Agendamento[]>([])
  const isLoading = ref(false)
  const isFetched = ref(false)

  const fetchAgendamentos = async (force = false) => {
    if (isFetched.value && !force) return
    isLoading.value = true
    try {
      const querySnapshot = await getDocs(collection(db, 'agendamentos'))
      const records: Agendamento[] = []
      querySnapshot.forEach((doc) => {
        records.push({ id: doc.id, ...doc.data() } as Agendamento)
      })
      records.sort((a, b) => new Date(a.dataDiscurso).getTime() - new Date(b.dataDiscurso).getTime())
      agendamentos.value = records
      isFetched.value = true
    } catch (error) {
      console.error('Error fetching agendamentos:', error)
    } finally {
      isLoading.value = false
    }
  }

  return { agendamentos, isLoading, isFetched, fetchAgendamentos }
})
