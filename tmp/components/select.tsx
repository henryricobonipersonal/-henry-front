import type { ComponentProps, ReactNode } from 'react'

import {
	SelectContent,
	SelectGroup,
	SelectLabel,
	Select as SelectShadcn,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

interface Props extends ComponentProps<'input'> {
	label: string
	children: ReactNode
}

export function Select({ label, children, ...props }: Props) {
	return (
		<SelectShadcn>
			<SelectTrigger>
				<SelectValue {...props} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>{label}</SelectLabel>
					{children}
				</SelectGroup>
			</SelectContent>
		</SelectShadcn>
	)
}
