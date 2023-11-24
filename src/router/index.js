import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/inicio',
			name: 'inicio',
			component: () => import('../views/Inicio.vue'),
		},
		{
			path: '/galeria',
			name: 'galeria',
			component: () => import('../views/Galeria.vue'),
		},
		{
			path: '/contacto',
			name: 'contacto',
			component: () => import('../views/Contacto.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
	],
});

export default router;

