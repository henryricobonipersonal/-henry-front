import { Bell, CaretDown } from '@phosphor-icons/react/dist/ssr'

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

export function NotificationPopover() {
	return (
		<Popover>
			<PopoverTrigger className="flex items-center gap-3 w-10 h-10 transition-all bg-gray100 hover:bg-gray200 text-orange500 shadow rounded-full text-2xl p-2">
				<div className="relative">
					<div className="absolute top-[-12px] right-[-12px] bg-red500 h-4 w-4 rounded-full" />
					<Bell />
				</div>
				<CaretDown color="white" size={16} />
			</PopoverTrigger>
			<PopoverContent className="bg-white w-full max-w-[200px] flex flex-col p-0">
				<span className="text-sm text-gray500 hover:bg-gray-200 hover:text-gray600 transition-all w-full border-b-[1px] py-3 px-4">
					Lorem Ipsum is simply dummy
				</span>
				<span className="text-sm text-gray500 hover:bg-gray-200 hover:text-gray600 transition-all w-full border-b-[1px] py-3 px-4">
					Lorem Ipsum is simply dummy
				</span>
				<span className="text-sm text-gray500 hover:bg-gray-200 hover:text-gray600 transition-all w-full border-b-[1px] py-3 px-4">
					Lorem Ipsum is simply dummy
				</span>

				<button
					type="button"
					className="font-medium text-center text-sm text-orange500 hover:bg-gray100 transition-all w-full p-2 px-4"
				>
					Marcar como lido
				</button>
			</PopoverContent>
		</Popover>
	)
}
