import { createRouter, createWebHistory } from 'vue-router'
import Question from '@/pages/QuestionPage.vue'
import MainPage from '@/pages/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainPage
    },
    {
      path: '/question',
      name: 'Question',
      component: Question
    }
  ]
})

export default router
