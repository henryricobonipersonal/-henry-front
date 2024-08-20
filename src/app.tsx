import './views/styles/index.css'

import { QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

import { AppRoutes } from '@/router'

import { AuthProvider } from '@app/contexts/auth'
import { ThemeProvider } from '@app/contexts/theme'
import { queryClient } from '@app/services/query-client'

export function App() {
	return (
		<HelmetProvider>
			<Helmet titleTemplate="%s | Meu Contrato Online" />
			<AuthProvider>
				<ThemeProvider defaultTheme="light" storageKey="@meu-contrato-online:theme">
					<Toaster richColors closeButton expand duration={2500} position="top-right" />
					<QueryClientProvider client={queryClient}>
						<AppRoutes />
						{/* <ReactQueryDevtools initialIsOpen={true} /> */}
					</QueryClientProvider>
				</ThemeProvider>
			</AuthProvider>
		</HelmetProvider>
	)
}
