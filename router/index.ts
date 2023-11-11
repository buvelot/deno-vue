import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../src/components/HomePage.vue';
import Pokemon from '../src/components/Pokemon.vue';

const routes: { path: string; name: string; component: any; props: boolean }[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        props: false
    },
    {
        path: '/:pokemon',
        name: 'Pokemon',
        component: Pokemon,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory("/"),
    routes
});

export default router;
