import type { Dispatch, SetStateAction } from 'react'
import { Pencil } from '@phosphor-icons/react/dist/ssr'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { EditPhysicalReassessmentForm } from '@/components/forms/edit-physical-reassessment-form'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function EditPhysicalReassessmentDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="hover:text-gray600 text-sm ml-2 text-gray500 flex gap-2 items-center transition-all">
				<Pencil size={24} weight="light" />
				Editar
			</DrawerTrigger>
			<DrawerContent className="w-1/2 sm:w-full sm:h-[92vh] h-screen right-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="fixed bg-white z-50 w-full flex justify-between items-center border-b-[1px] border-gray200 pt-8 pb-4 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">
								Editar Reavaliação Física
							</h1>
							<p className="text-gray500 text-sm mt-4">
								Editar Reavaliação Física do aluno: Aluno 1
								<br />
								<strong className="mt-2 text-gray900 block">
									📅 Data da reavaliação: 05/10/2024
								</strong>
							</p>
						</div>
					</div>
					<div className="pt-36 pb-12 px-12 sm:px-5">
						<EditPhysicalReassessmentForm />
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
