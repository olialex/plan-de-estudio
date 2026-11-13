import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	base: '/plan-de-estudio',

	build: {
		rolldownOptions: {
			input: {
				home: resolve(__dirname, 'index.html'),
				embudos: resolve(__dirname, 'embudos.html'),
				dataScience: resolve(__dirname, 'data-science.html')
			}
		}
	}
})