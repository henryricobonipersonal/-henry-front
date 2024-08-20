import { Barbell } from '@phosphor-icons/react/dist/ssr'
import type { Dispatch, SetStateAction } from 'react'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { PhysicalAssessmentForm } from '@/components/forms/physical-assessment-form'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function PhysicalAssessmentDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="ml-2.5 hover:text-gray600 text-sm  text-gray500 flex gap-2 items-center transition-all">
				<Barbell size={24} weight="light" />
				Avaliação Física
			</DrawerTrigger>
			<DrawerContent className="inset-x-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="fixed bg-white z-50 w-full flex justify-between items-center border-b-[1px] border-gray200 pt-8 pb-4 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">Avaliação Física</h1>
							<p className="text-gray500 text-sm mt-4">
								Avaliação Física do Aluno: Aluno 1 <br />
								<strong className="mt-2 text-gray900 block">
									📅 Última atualização em: 20/04/2024
								</strong>
							</p>
						</div>
					</div>
					<div className="pt-36 pb-12 px-12 sm:px-5">
						<PhysicalAssessmentForm />
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
