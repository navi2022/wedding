import {createRouter, createWebHistory} from 'vue-router'
import Main from "@/components/Main";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import GuestBook from "@/components/GuestBook";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/guestBook',
        component: GuestBook
    },
    {
        path: '/gallery',
        component: Gallery
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router