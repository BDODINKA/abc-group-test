import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from './components/common/index'

import './assets/main.css'

const app = createApp(App)

app.use(router)

components.forEach((component) => app.component(component.name, component))

app.mount('#app')
