import { createContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
	children: ReactNode
	defaultTheme?: Theme
	storageKey?: string
}

type ThemeProviderState = {
	theme: Theme
	setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
	theme: 'system',
	setTheme: () => null,
}

export const ThemeProviderContext =
	createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
	children,
	defaultTheme = 'system',
	storageKey = 'vite-ui-theme',
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(() => {
		const storedTheme = localStorage.getItem(storageKey) as Theme
		return storedTheme || defaultTheme
	})

	useEffect(() => {
		const root = window.document.documentElement

		root.classList.remove('light', 'dark')

		const setSystemTheme = () => {
			const systemPrefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches
			root.classList.add(systemPrefersDark ? 'dark' : 'light')
		}

		if (theme === 'system') {
			setSystemTheme()
		} else {
			root.classList.add(theme)
		}

		localStorage.setItem(storageKey, theme)
	}, [theme, storageKey])

	const value = {
		theme,
		setTheme,
	}

	return (
		<ThemeProviderContext.Provider value={value}>
			{children}
		</ThemeProviderContext.Provider>
	)
}
