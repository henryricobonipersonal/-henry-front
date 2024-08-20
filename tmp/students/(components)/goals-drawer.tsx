import type { Dispatch, SetStateAction } from 'react'
import { RocketLaunch } from '@phosphor-icons/react/dist/ssr'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { GoalsDataTable } from '@/app/(dashboard)/students/(components)/goals-data-table'
import { CreateGoalsForm } from '@/app/(dashboard)/students/(components)/create-goals-form'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function GoalsDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="hover:text-gray600 text-sm ml-2 text-gray500 flex gap-2 items-center transition-all">
				<RocketLaunch size={24} weight="light" />
				Nova Meta
			</DrawerTrigger>
			<DrawerContent className="w-full h-[96vh] right-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="fixed bg-white z-50 w-full flex justify-between items-center border-b-[1px] border-gray200 pt-8 pb-4 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">Metas</h1>
							<p className="text-gray500 text-sm mt-4">
								Metas do aluno: Aluno 1
							</p>
						</div>
					</div>
					<div className="pt-36 pb-12 px-12 sm:px-5">
						<CreateGoalsForm />
						<div className="border-t-[1px] border-gray200 pt-8 mt-12">
							<h2 className="text-lg text-gray900 font-medium">
								Lista de Metas
							</h2>
							<GoalsDataTable />
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
