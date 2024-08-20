import type { Dispatch, SetStateAction } from 'react'
import { Table } from '@phosphor-icons/react/dist/ssr'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { PhysicalAssessmentHistoryDataTable } from '@/app/(dashboard)/students/(components)/physical-assessment-history-data-table'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function PhysicalReassessmentHistoryDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="hover:text-gray600 text-sm ml-2 text-gray500 flex gap-2 items-center transition-all">
				<Table size={24} weight="light" />
				Histórico de Reavaliações Físicas
			</DrawerTrigger>
			<DrawerContent className="w-full h-[96vh] right-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="fixed bg-white z-50 w-full flex justify-between items-center border-b-[1px] border-gray200 pt-8 pb-4 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">
								Histórico de Reavaliações Físicas
							</h1>
							<p className="text-gray500 text-sm mt-4">
								Histórico de reavaliações físicas do aluno: Aluno 1
							</p>
						</div>
					</div>
					<div className="pt-36 pb-12 px-12 sm:px-5">
						<PhysicalAssessmentHistoryDataTable />
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
