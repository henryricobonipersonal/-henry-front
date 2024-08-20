import type { Dispatch, SetStateAction } from 'react'
import { ListDashes } from '@phosphor-icons/react/dist/ssr'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'


interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function GoalDetailsDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="ml-2.5 hover:text-gray600 text-sm  text-gray500 flex gap-2 items-center transition-all">
				<ListDashes size={24} weight="light" />
				Detalhes
			</DrawerTrigger>
			<DrawerContent className="w-1/2 sm:w-full sm:h-[92vh] h-screen right-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="flex justify-between items-center border-b-[1px] border-gray200 pt-12 pb-8 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">Detalhes</h1>
							<p className="text-gray500 text-sm mt-4">
								Detalhes do aluno: Aluno 1
							</p>
						</div>
					</div>
					<div className="pt-7 pb-12 px-12 sm:px-5">
						<div className="mb-4 w-full flex justify-between items-center">
							<p className="font-normal mb-1 text-gray900 text-sm">
								Detalhes da meta
							</p>
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
