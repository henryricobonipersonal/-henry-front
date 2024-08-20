import type { Dispatch, SetStateAction } from 'react'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

import {
	ListDashes,
	PersonArmsSpread,
	Ruler,
} from '@phosphor-icons/react/dist/ssr'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function PhysicalReassessmentDetailsDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="ml-2.5 hover:text-gray600 text-sm  text-gray500 flex gap-2 items-center transition-all">
				<ListDashes size={24} weight="light" />
				Detalhes
			</DrawerTrigger>
			<DrawerContent className="w-1/2 sm:w-full sm:h-[92vh] h-screen right-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="flex justify-between items-center border-b-[1px] border-gray200 pt-12 pb-8 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">
								Detalhes de Reavaliação Física
							</h1>
							<p className="text-gray500 text-sm mt-4">
								Detalhes de reavaliação física do aluno: Aluno 1
								<br />
								<strong className="mt-2 text-gray900 block">
									📅 Data da reavaliação: 05/10/2024
								</strong>
							</p>
						</div>
					</div>
					<div className="b-12 px-12 sm:px-5">
						<div>
							<div className="mt-12">
								<div className="flex gap-3 items-center mb-6">
									<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
										<Ruler />
									</div>
									<p className="text-gray900 font-semibold">
										Medidas de Perimetria
									</p>
								</div>
								<div className="mb-6 grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Ombro:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Cintura:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Quadril:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Tórax:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Abdome:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
								</div>
								<div className="mb-6 grid grid-cols-1 gap-6">
									<div className=" p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Coxa Superior:
										</p>
										<div className="grid grid-cols-2">
											<div>
												<p className="text-sm">Esquerda Anterior: 0,0</p>
												<p className="text-sm">Esquerda Atual: 0,0</p>
												<p className="text-sm">Diferença Esquerda: 0,0</p>
											</div>
											<div>
												<p className="text-sm">Direta Anterior: 0,0</p>
												<p className="text-sm">Direira Atual: 0,0</p>
												<p className="text-sm">Diferença Direita: 0,0</p>
											</div>
										</div>
									</div>
									<div className=" p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Coxa Medial:
										</p>
										<div className="grid grid-cols-2">
											<div>
												<p className="text-sm">Esquerda Anterior: 0,0</p>
												<p className="text-sm">Esquerda Atual: 0,0</p>
												<p className="text-sm">Diferença Esquerda: 0,0</p>
											</div>
											<div>
												<p className="text-sm">Direta Anterior: 0,0</p>
												<p className="text-sm">Direira Atual: 0,0</p>
												<p className="text-sm">Diferença Direita: 0,0</p>
											</div>
										</div>
									</div>
									<div className=" p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Antebraço:
										</p>
										<div className="grid grid-cols-2">
											<div>
												<p className="text-sm">Esquerda Anterior: 0,0</p>
												<p className="text-sm">Esquerda Atual: 0,0</p>
												<p className="text-sm">Diferença Esquerda: 0,0</p>
											</div>
											<div>
												<p className="text-sm">Direta Anterior: 0,0</p>
												<p className="text-sm">Direira Atual: 0,0</p>
												<p className="text-sm">Diferença Direita: 0,0</p>
											</div>
										</div>
									</div>
									<div className=" p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Panturrilha:
										</p>
										<div className="grid grid-cols-2">
											<div>
												<p className="text-sm">Esquerda Anterior: 0,0</p>
												<p className="text-sm">Esquerda Atual: 0,0</p>
												<p className="text-sm">Diferença Esquerda: 0,0</p>
											</div>
											<div>
												<p className="text-sm">Direta Anterior: 0,0</p>
												<p className="text-sm">Direira Atual: 0,0</p>
												<p className="text-sm">Diferença Direita: 0,0</p>
											</div>
										</div>
									</div>
									<div className=" p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Braço Relaxado:
										</p>
										<div className="grid grid-cols-2">
											<div>
												<p className="text-sm">Esquerda Anterior: 0,0</p>
												<p className="text-sm">Esquerda Atual: 0,0</p>
												<p className="text-sm">Diferença Esquerda: 0,0</p>
											</div>
											<div>
												<p className="text-sm">Direta Anterior: 0,0</p>
												<p className="text-sm">Direira Atual: 0,0</p>
												<p className="text-sm">Diferença Direita: 0,0</p>
											</div>
										</div>
									</div>
									<div className=" p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Coxa Contraído
										</p>
										<div className="grid grid-cols-2">
											<div>
												<p className="text-sm">Esquerda Anterior: 0,0</p>
												<p className="text-sm">Esquerda Atual: 0,0</p>
												<p className="text-sm">Diferença Esquerda: 0,0</p>
											</div>
											<div>
												<p className="text-sm">Direta Anterior: 0,0</p>
												<p className="text-sm">Direira Atual: 0,0</p>
												<p className="text-sm">Diferença Direita: 0,0</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-12">
								<div className="flex gap-3 items-center mb-6">
									<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
										<PersonArmsSpread />
									</div>
									<p className="text-gray900 font-semibold">
										Composição Corporal (Guedes)
									</p>
								</div>
								<div>
									<div className="p-6 border rounded-md w-full max-w-[200px] mb-6">
										<p className="mb-2 text-gray900 text-sm">
											Peso atual (kg): 0,0
										</p>
									</div>
									<p className="font-medium mb-4">Dobras Cutâneas (mm)</p>
								</div>
								<div className="mb-6 grid grid-cols-3 sm:grid-cols-2 gap-6">
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Subescapular:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Coxa:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Tríceps:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Suprailíaca:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Abdome:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
								</div>
							</div>
							<div className="mt-12">
								<div className="flex gap-3 items-center mb-6">
									<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
										<PersonArmsSpread />
									</div>
									<p className="text-gray900 font-semibold">
										Composição Corporal (Jackson e Pollock)
									</p>
								</div>
								<div>
									<p className="font-medium mb-4">Dobras Cutâneas (mm)</p>
								</div>
								<div className="mb-6 grid grid-cols-3 sm:grid-cols-2 gap-6">
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Subescapular:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Coxa:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Tríceps:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Peitoral:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Suprailíaca:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Abdome:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
									<div className="p-6 border rounded-md">
										<p className="font-medium mb-2 text-gray900 text-sm">
											Axilar-média:
										</p>
										<p className="text-sm">Anterior: 0,0</p>
										<p className="text-sm">Atual: 0,0</p>
										<p className="text-sm">Diferença: 0,0</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
