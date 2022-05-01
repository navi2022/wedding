import {createRouter, createWebHistory} from 'vue-router'

const Main = () => import(/* webpackChunkName: "Main" */ "@/components/Main");
const Gallery = () => import(/* webpackChunkName: "Gallery" */ "@/components/Gallery");
const GuestBook = () => import(/* webpackChunkName: "GuestBook" */ "@/components/GuestBook");

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/gallery',
        component: Gallery
    },
    {
        path: '/guestBook',
        component: GuestBook
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router