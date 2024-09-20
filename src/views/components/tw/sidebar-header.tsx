import { ChevronDownIcon } from '@heroicons/react/24/outline'

import { cn } from '@app/utils/cn'

interface Props {
	title: string
	isOpen: boolean
	setIsOpen: (value: boolean) => void
	className?: string
}

export function SidebarHeader({
	title,
	isOpen,
	setIsOpen,
	className,
}: Props) {
	return (
		<div className="flex items-end justify-between">
			<h3
				className={cn(
					'mb-1 px-2 text-xs/6 font-medium text-zinc-500 dark:text-zinc-400',
					className,
				)}
			>
				{title}
			</h3>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="hidden"
			>
				<ChevronDownIcon className="size-4 mb-[7px]" />
			</button>
		</div>
	)
}
