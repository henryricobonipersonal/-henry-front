import { CalendarBlank } from '@phosphor-icons/react/dist/ssr'
import type { Dispatch, SetStateAction } from 'react'

import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Format } from '@/utils/format'

interface Props {
	dateValue: Date | undefined
	setDateValue: Dispatch<SetStateAction<Date | undefined>>
	type?: 'normal' | 'clean'
}

export function CalendarSelect({
	dateValue,
	setDateValue,
	type = 'normal',
}: Props) {
	return (
		<Popover>
			<PopoverTrigger
				asChild
				className={`
        ${type === 'normal' ? 'rounded-md mt-1 w-full border shadow cursor-pointer px-3 py-[9px] text-sm text-gray-400' : 'border-b border-gray900 py-2 active:border-b-orange500 focus:border-b-orange500 hover:border-b-orange500 transition-colors'}
        `}
			>
				<div className="flex gap-2">
					<CalendarBlank size={20} />
					<span className="ml-1">
						{dateValue === undefined
							? 'Selecionar Data'
							: Format.formatDateToDDMMYYYY(dateValue)}
					</span>
				</div>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={dateValue}
					onSelect={setDateValue}
					className="rounded-md border self-center bg-white"
				/>
			</PopoverContent>
		</Popover>
	)
}
