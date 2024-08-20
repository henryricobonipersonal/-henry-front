import type { Dispatch, SetStateAction } from 'react'

import Link from 'next/link'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import {
	Envelope,
	FacebookLogo,
	InstagramLogo,
	LinkSimple,
	MapPinArea,
	Phone,
	UserList,
	XLogo,
} from '@phosphor-icons/react/dist/ssr'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function StudentDetailsDrawer({ open, setOpen }: Props) {
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
								Detalhes do aluno: Aluno 1
							</p>
						</div>
					</div>
					<div className="pt-7 pb-12 px-12 sm:px-5">
						<div className="border-b-[1px] pb-6">
							<div className="mb-4 w-full flex justify-between items-center">
								<h2 className="text-lg font-semibold text-gray900">Aluno 1</h2>
								<div className="flex gap-3 text-3xl ">
									<Link
										href="/"
										className="text-orange500 hover:text-orange500/70 transition-colors"
									>
										<InstagramLogo weight="fill" />
									</Link>
									<Link
										href="/"
										className="text-orange500 hover:text-orange500/70 transition-colors"
									>
										<FacebookLogo weight="fill" />
									</Link>
									<Link
										href="/"
										className="text-orange500 hover:text-orange500/70 transition-colors"
									>
										<XLogo weight="fill" />
									</Link>
									<Link
										href="/"
										className="text-orange500 hover:text-orange500/70 transition-colors"
									>
										<LinkSimple weight="bold" />
									</Link>
								</div>
							</div>
							<p className="font-medium mb-1 text-gray900 text-sm">
								Data de nascimento:
								<span className="font-normal ml-1">09/08/1998</span>
							</p>
							<p className="font-medium mb-1 text-gray900 text-sm">
								Sexo:
								<span className="font-normal ml-1">Feminino</span>
							</p>
							<p className="font-medium mb-1 text-gray900 text-sm">
								CPF:
								<span className="font-normal ml-1">000.000.000-00</span>
							</p>
							<p className="font-medium mb-1 text-gray900 text-sm">
								RG:
								<span className="font-normal ml-1">0.000.000</span>
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
						<div>
							<div className="mb-4 w-full flex flex-col">
								<h2 className="text-lg font-medium mb-6 mt-4 text-gray900">
									Endereço
								</h2>
								<div className="flex gap-3 text-3xl ">
									<p className="font-medium mb-1 flex items-center gap-2 text-gray500 text-sm">
										<MapPinArea className="text-orange500 text-2xl" />
										Criciúma, SC, Bortolo Pavan 111
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
