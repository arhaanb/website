import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home', footerclass: 'home' } },
	{
		path: '/projects',
		meta: { title: 'Projects' },
		component: Projects
	},
	{
		path: '/hi',
		meta: { title: 'Contact' },
		component: Contact
	},
	{ path: '/:path(.*)', component: NotFound, meta: { title: 'notfound' } }
]
