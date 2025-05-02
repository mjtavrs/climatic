import HomeView from '../pages/HomeView.vue'
import DisplayWeatherView from '../pages/DisplayWeatherView.vue'
import NotFoundView from '../pages/NotFoundView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: HomeView },
    { path: '/result', component: DisplayWeatherView},
    { path: '/:catchAll(.*)', component: NotFoundView }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router