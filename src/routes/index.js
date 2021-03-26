import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Kanban from '@/views/Kanban.vue';

Vue.use(Router);

const routes = [
    {
        name: 'home',
        component: Home,
        path: '/',
    },
    {
        name: 'kanban',
        component: Kanban,
        path: '/kanban'
    }
];

const router = new Router({ routes })

export default router;