import {createRouter, createWebHistory} from 'vue-router'
import Main from "@/components/Main";
import WeddingHall from "@/components/WeddingHall";
import Gallery from "@/components/Gallery";
import GuestBook from "@/components/GuestBook";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/weddingHall',
        name: 'WeddingHall',
        component: WeddingHall
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    },
    {
        path: '/guestBook',
        name: 'GuestBook',
        component: GuestBook
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router