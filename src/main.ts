import App from './App.vue'
import { routes } from './routes.js'
import { ViteSSG } from 'vite-ssg'
import NProgress from 'nprogress'
import './assets/css/normal.css'
import './assets/css/skeleton.css'
import './assets/css/global.css'

export const createApp = ViteSSG(
	App,
	{
		routes,
		scrollBehavior(to, from, savedPosition) {
			if (to.hash) {
				return {
					el: to.hash,
					behavior: 'smooth'
				}
			} else {
				return { top: 0 }
			}
		}
	},
	({ app, router, isClient }) => {
		if (isClient) {
			router.beforeEach(() => {
				NProgress.start()
			})
			router.afterEach(() => {
				NProgress.done()
			})
		}
	}
)
