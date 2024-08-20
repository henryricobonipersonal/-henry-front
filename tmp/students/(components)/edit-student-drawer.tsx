import type { Dispatch, SetStateAction } from 'react'
import { UserCircleGear } from '@phosphor-icons/react/dist/ssr'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { EditStudentForm } from '@/app/(dashboard)/students/(components)/edit-student-form'


interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function EditStudentDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="hover:text-gray600 text-sm ml-2 text-gray500 flex gap-2 items-center transition-all">
				<UserCircleGear size={24} weight="light" />
				Editar Dados
			</DrawerTrigger>
			<DrawerContent className="w-1/2 sm:w-full sm:h-[92vh] h-screen right-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="flex justify-between items-center border-b-[1px] border-gray200 pt-12 pb-8 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">Editar Dados</h1>
							<p className="text-gray500 text-sm mt-4">
								Editar dados do aluno: Aluno 1
							</p>
						</div>
					</div>
					<div className="pt-7 pb-12 px-12 sm:px-5">
						<EditStudentForm />
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
