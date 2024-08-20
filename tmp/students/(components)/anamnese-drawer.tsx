import { FileText } from '@phosphor-icons/react/dist/ssr'
import type { Dispatch, SetStateAction } from 'react'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { AnamneseForm } from '@/app/(dashboard)/students/(components)/anamnese-form'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function AnamneseDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="ml-2.5 hover:text-gray600 text-sm  text-gray500 flex gap-2 items-center transition-all">
				<FileText size={24} weight="light" />
				Anamnese
			</DrawerTrigger>
			<DrawerContent className="inset-x-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="fixed bg-white z-50 w-full flex justify-between items-center border-b-[1px] border-gray200 pt-8 pb-4 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">Anamnese</h1>
							<p className="text-gray500 text-sm mt-4">
								Anamnese do aluno: Aluno 1
							</p>
						</div>
					</div>
					<div className="pt-36 pb-12 px-12 sm:px-5">
						<AnamneseForm />
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
