import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			'@app': '/src/app',
			'@views': '/src/views',
			'@': '/src',
		},
	},
	server: {
		port: 3002,
		// open: true,
	},
})
