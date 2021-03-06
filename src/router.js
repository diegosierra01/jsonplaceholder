import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
           path: '/',
           name: 'home',
           component: () => import('./views/Home.vue') 
        },
        {
            path: '/galery/:albumId/albums/:id',
            name: 'albums',
            component: () => import('./views/Album.vue')
        },
        {
            path: '/galery',
            name: 'galery',
            component: () => import('./views/Galery.vue')
        }
        
    ]
})