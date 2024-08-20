import {
	BanknotesIcon,
	ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline'
import type { ComponentProps, ReactNode } from 'react'

interface Props extends ComponentProps<'button'> {
	title: string
	icon?: 'list' | 'cashFlow'
	children?: ReactNode
}

export function PageLayout({ title, icon, children }: Props) {
	return (
		<div className="bg-white border border-zinc-300 w-full rounded-md shadow">
			<div className="flex justify-between items-center border-b border-zinc-300 pt-12 pb-8 px-12 sm:px-5">
				<h1 className="text-2xl font-medium flex items-center gap-1.5">
					{icon === 'list' && <ClipboardDocumentListIcon className="size-6" />}
					{icon === 'cashFlow' && <BanknotesIcon className="size-6" />}
					{title}
				</h1>
				{children}
			</div>
		</div>
	)
}
