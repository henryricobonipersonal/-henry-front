import type { Dispatch, SetStateAction } from 'react'

import { Envelope, Phone, UserList } from '@phosphor-icons/react/dist/ssr'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function TeacherDetailsDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="ml-2.5 hover:text-gray600 text-sm  text-gray500 flex gap-2 items-center transition-all">
				<UserList size={24} weight="light" />
				Detalhes
			</DrawerTrigger>
			<DrawerContent className="w-1/2 sm:w-full sm:h-[92vh] h-screen right-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="flex justify-between items-center border-b-[1px] border-gray200 pt-12 pb-8 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">Detalhes</h1>
							<p className="text-gray500 text-sm mt-4">
								Detalhes do professor: Professor 1
							</p>
						</div>
					</div>
					<div className="pt-7 pb-12 px-12 sm:px-5">
						<div className="border-b-[1px] pb-6">
							<div className="mb-4 w-full flex justify-between items-center">
								<h2 className="text-lg font-semibold text-gray900">
									Professor 1
								</h2>
							</div>
							<p className="font-medium mb-1 text-gray900 text-sm">
								RG:
								<span className="font-normal">0.000.000</span>
							</p>
							<p className="font-medium mb-1 text-gray900 text-sm">
								CPF:
								<span className="font-normal">000.000.000-00</span>
							</p>
							<p className="font-medium mb-1 text-gray900 text-sm">
								CREF:
								<span className="font-normal">999999</span>
							</p>
						</div>
						<div className="border-b-[1px] pb-4">
							<div className="mb-4 w-full flex flex-col">
								<h2 className="text-lg font-medium mb-6 mt-4 text-gray900">
									Contato
								</h2>
								<div className="flex gap-8 text-3xl ">
									<p className="font-medium mb-1 flex items-center gap-2 text-gray500 text-sm">
										<Phone className="text-orange500 text-2xl" />
										(00) 00000-0000
									</p>
									<p className="font-medium mb-1 flex items-center gap-2 text-gray500 text-sm">
										<Envelope className="text-orange500 text-2xl" />
										email@email.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
