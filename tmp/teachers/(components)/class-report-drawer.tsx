import { UserList } from '@phosphor-icons/react/dist/ssr'
import type { Dispatch, SetStateAction } from 'react'

import { ClassReportDataTable } from '@/app/(dashboard)/teachers/(components)/class-report-data-table'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function ClassReportTeacherDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="ml-2.5 hover:text-gray600 text-sm  text-gray500 flex gap-2 items-center transition-all">
				<UserList size={24} weight="light" />
				Relatório de Aulas
			</DrawerTrigger>
			<DrawerContent className="inset-x-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="flex justify-between items-center border-b-[1px] border-gray200 pt-12 pb-8 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">Relatório de Aulas</h1>
							<p className="text-gray500 text-sm mt-4">
								Relatório de aulas do professor: Professor 1
							</p>
						</div>
					</div>
					<div className="pt-7 pb-12 px-12 sm:px-5">
						<ClassReportDataTable />
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
