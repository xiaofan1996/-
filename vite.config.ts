import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},
	base: './', // 打包的基本路径
	server: {
		port: 8080, // 端口号
		open: true, // 浏览器自动打开
		cors: true, // 是否允许跨域
		// proxy: {
		// 	'/api': {
		// 		target: 'http://192.168.0.182',
		// 	  changeOrigin: true,
		// 		secure: false,
		// 		rewrite: (path) => path.replace('/api/', '/')
		// 	}
		// }
	}
})
