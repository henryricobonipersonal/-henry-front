'use client'

import { type ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useMediaQuery } from 'react-responsive'

import { HeaderDropdown } from '@/components/dropdown-component/header-dropdown'
import { NavDropdown } from '@/components/dropdown-component/nav-dropdown'

interface Props {
	children: ReactNode
}

export function Dropdown({ children }: Props) {
	const [expanded, setExpanded] = useState(true)

	const path = usePathname()
	const isMobile = useMediaQuery({ maxWidth: 768 })

	const closeWhenChangingPage = () => path && isMobile && setExpanded(false)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		closeWhenChangingPage()
	}, [path, isMobile])

	return (
		<div className="flex flex-col w-full h-full">
			<HeaderDropdown expanded={expanded} setExpanded={setExpanded} />
			<div className="h-[91vh] flex flex-row">
				<NavDropdown expanded={expanded} />
				<main
					className={` overflow-auto w-full p-4 sm:p-2
            ${expanded ? 'sm:w-0' : 'sm:w-full'}
          `}
				>
					{children}
				</main>
			</div>
		</div>
	)
}
