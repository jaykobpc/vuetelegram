import Vue from 'vue';
import VueRouter from 'vue-router';

/** routes */
import Home from "@/views/Home";
import Chats from "@/views/Chats";
import Contacts from "@/views/Contacts";
import Settings from "@/views/Settings";
import Search from "@/views/Search";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
    },
    {
        path: '/chat',
        name: "Chat",
        component: Chats,
    },
    {
        path: '/contacts',
        name: "contacts",
        component: Contacts,
    },
    {
        path: '/settings',
        name: "settings",
        component: Settings,
    },
    {
        path: '/search',
        name: "search",
        component: Search,
    }
];

const router = new VueRouter({
    routes,
});

export default router;