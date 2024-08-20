import type { ReactNode } from 'react'

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

interface Props {
	icon: ReactNode
	title: string
	content: ReactNode
}

export function ItemAccordion({ icon, title, content }: Props) {
	return (
		<AccordionItem value={title}>
			<AccordionTrigger>
				<div className="flex gap-3 items-center justify-between">
					<img className="w-6" src={`/${icon}.png`} alt="icon menu" />
					{title}
				</div>
			</AccordionTrigger>
			<AccordionContent className="flex flex-col gap-3 mt-1 pl-8">
				{content}
			</AccordionContent>
		</AccordionItem>
	)
}
