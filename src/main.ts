import App from './App.vue'
import { routes } from './routes.js'
// import { ViteSSG } from 'vite-ssg'
import NProgress from 'nprogress'
import './assets/css/normal.css'
import './assets/css/skeleton.css'
import './assets/css/global.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// export const createApp = ViteSSG(
// 	App,
// 	{
// 		routes,
// 		scrollBehavior(to, from, savedPosition) {
// 			if (to.hash) {
// 				return {
// 					el: to.hash,
// 					behavior: 'smooth'
// 				}
// 			} else {
// 				return { top: 0 }
// 			}
// 		}
// 	},
// 	({ app, router, isClient }) => {
// 		// @ts-ignore
// 		app.use(AOS.init())

// 		if (isClient) {
// 			router.beforeEach(() => {
// 				NProgress.start()
// 			})
// 			router.afterEach(() => {
// 				NProgress.done()
// 			})
// 		}
// 	}
// )

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
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
})

// @ts-ignore
app.use(AOS.init())

app.use(router)
app.mount('#app')
