import { File } from '@phosphor-icons/react/dist/ssr'
import type { Dispatch, SetStateAction } from 'react'

import { StudentReportDataTable } from '@/app/(dashboard)/student-report/(components)/student-report-data-table'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function StudentDetailsReportDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="ml-2.5 hover:text-gray600 text-sm  text-gray500 flex gap-2 items-center transition-all">
				<File size={24} weight="light" />
			</DrawerTrigger>
			<DrawerContent className="w-full h-[96vh] right-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="fixed bg-white z-50 w-full flex justify-between items-center border-b-[1px] border-gray200 pt-8 pb-4 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">Relatórios do Aluno</h1>
							<p className="text-gray500 text-sm mt-4">
								Relatórios do aluno: Aluno 1 <br />
							</p>
						</div>
					</div>
					<div className="pt-44 pb-12 px-12 sm:px-5">
						<StudentReportDataTable />
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
