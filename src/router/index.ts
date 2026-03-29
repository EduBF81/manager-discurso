import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory('/agenda-discursos/'),
  routes: [
    { path: '/login', name: 'login', component: LoginView },
    { path: '/', name: 'dashboard', component: DashboardView, meta: { requiresAuth: true } },
    { path: '/agendar', name: 'agendar', component: () => import('../views/AgendarView.vue'), meta: { requiresAuth: true } },
    { path: '/consulta', name: 'consulta', component: () => import('../views/ConsultaView.vue'), meta: { requiresAuth: true } },
    { path: '/historico', name: 'historico', component: () => import('../views/HistoricoView.vue'), meta: { requiresAuth: true } },
    { path: '/palestrantes', name: 'palestrantes', component: () => import('../views/PalestrantesView.vue'), meta: { requiresAuth: true } }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else if (to.path === '/login' && authStore.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
