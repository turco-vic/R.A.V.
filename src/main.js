import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import Home from './pages/Home.vue'
import Sobre from './pages/Sobre.vue'
import Contato from './pages/Contato.vue'
import Retiro from './pages/Retiro.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/sobre', component: Sobre },
        { path: '/contato', component: Contato },
        { path: '/retiros/:id', component: Retiro },
    ],
    scrollBehavior: () => ({ top: 0 }),
})

createApp(App).use(router).mount('#app')
