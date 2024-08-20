import Link from 'next/link'

import {
	AvatarFallback,
	AvatarImage,
	Avatar as RdxAvatar,
} from '@/components/ui/avatar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

import { CaretDown, SignOut, UserGear } from '@phosphor-icons/react/dist/ssr'

export function AvatarPopover() {
	return (
		<Popover>
			<PopoverTrigger className="relative flex items-center gap-3 ml-4">
				<RdxAvatar className="absolute right-[148px]">
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</RdxAvatar>
				<div className="border border-white flex items-center gap-2 py-3 border-l-0 pr-2 rounded-r-md pl-5">
					<p className="text-white font-semibold capitalize text-sm sm:hidden">
						Henry Ricoboni
					</p>
					<CaretDown color="white" size={16} />
				</div>
			</PopoverTrigger>
			<PopoverContent className="bg-white w-[200px] flex flex-col gap-2">
				<Link
					href="/editAccount"
					className="flex gap-2 text-gray500 hover:text-gray600 text-sm"
				>
					<UserGear size={20} className="text-orange-500" />
					Editar Conta
				</Link>

				<span className="border-b-[1px] w-full h-[1px] m-1" />

				<Link
					href="/"
					className="flex gap-2 text-gray500 hover:text-gray600 text-sm"
				>
					<SignOut size={20} className="text-red-600" />
					Sair
				</Link>
			</PopoverContent>
		</Popover>
	)
}
