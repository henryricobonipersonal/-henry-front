import './views/styles/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app.tsx'

const rootElement = document.getElementById('root') as HTMLElement | null

if (rootElement !== null) {
	createRoot(rootElement).render(
		<StrictMode>
			<App />
		</StrictMode>,
	)
} else {
	throw new Error('Root element not found')
}
