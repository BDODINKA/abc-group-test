import { createRouter, createWebHistory } from 'vue-router'
import Question from '@/pages/QuestionPage.vue'
import MainPage from '@/pages/MainPage.vue'
import Result from '@/pages/ResultPage.vue'

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
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})

export default router
