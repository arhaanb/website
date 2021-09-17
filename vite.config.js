import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/]
		}),

		Components({
			resolvers: IconsResolver({
				componentPrefix: ''
			}),
			dts: true,
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
		}),
		Icons()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src')
		}
	},
	server: {
		open: true,
		fs: {
			allow: ['..']
		}
	}
})
