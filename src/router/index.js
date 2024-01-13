import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'quizes',
			component: () => import('../views/Quizes.vue'),
		},
	],
});

export default router;
