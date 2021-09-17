import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Explore from './views/Explore.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{
		path: '/projects',
		meta: { title: 'Projects' },
		component: Projects
	},
	{
		path: '/explore',
		meta: { title: 'Explore' },
		component: Explore
	},
	{ path: '/404', component: NotFound, meta: { title: 'notfound' } },
	{ path: '/:pathMatch(.*)', component: NotFound, meta: { title: 'notfound' } }
]
