import { Dropdown } from '@/components/dropdown-component'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Dashboard',
}

interface Props {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	return <Dropdown>{children}</Dropdown>
}
