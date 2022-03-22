import {createRouter, createWebHistory} from 'vue-router'
import Main from "@/components/Main";
import Gallery from "@/components/Gallery";
import GuestBook from "@/components/GuestBook";

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