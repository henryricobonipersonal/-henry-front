'use client'

import { useState } from 'react'

import { Controller, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

import { RichText } from '@/components/rich-text/add-link-dialog'
import { Input } from '@/components/ui/input'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

import { CooperChart } from '@/components/graphics/cooper-chart'
import { CooperMenTable } from '@/components/tables/cooper-men-table'
import { CooperWomanTable } from '@/components/tables/cooper-woman-table'
import { FlexibilityMenTable } from '@/components/tables/flexibility-men-table'
import { FlexibilityWomanTable } from '@/components/tables/flexibility-woman-table'
import {
	CheckFat,
	Heartbeat,
	PersonArmsSpread,
	PersonSimple,
	PersonSimpleTaiChi,
	Ruler,
} from '@phosphor-icons/react/dist/ssr'
import { SaveAll } from 'lucide-react'

const physicalAssessmentSchema = z.object({
	sex: z.string().default('feminino'),
	goals: z.object({
		goal1: z.string().optional(),
		goal2: z.string().optional(),
		goal3: z.string().optional(),
	}),
	perimeterMeasurements: z.object({
		shoulder: z.object({
			previous: z.string(),
			current: z.string(),
			difference: z.string(),
		}),
		thorax: z.object({
			previous: z.string(),
			current: z.string(),
			difference: z.string(),
		}),
		waist: z.object({
			previous: z.string(),
			current: z.string(),
			difference: z.string(),
		}),
		abdomen: z.object({
			previous: z.string(),
			current: z.string(),
			difference: z.string(),
		}),
		hip: z.object({
			previous: z.string(),
			current: z.string(),
			difference: z.string(),
		}),
		upperThigh: z.object({
			previousRight: z.string(),
			currentRight: z.string(),
			differenceRight: z.string(),
			previousLeft: z.string(),
			currentLeft: z.string(),
			differenceLeft: z.string(),
		}),
		medialThigh: z.object({
			previousRight: z.string(),
			currentRight: z.string(),
			differenceRight: z.string(),
			previousLeft: z.string(),
			currentLeft: z.string(),
			differenceLeft: z.string(),
		}),
		calf: z.object({
			previousRight: z.string(),
			currentRight: z.string(),
			differenceRight: z.string(),
			previousLeft: z.string(),
			currentLeft: z.string(),
			differenceLeft: z.string(),
		}),
		forearm: z.object({
			previousRight: z.string(),
			currentRight: z.string(),
			differenceRight: z.string(),
			previousLeft: z.string(),
			currentLeft: z.string(),
			differenceLeft: z.string(),
		}),
		relaxedArm: z.object({
			previousRight: z.string(),
			currentRight: z.string(),
			differenceRight: z.string(),
			previousLeft: z.string(),
			currentLeft: z.string(),
			differenceLeft: z.string(),
		}),
		contractedArm: z.object({
			previousRight: z.string(),
			currentRight: z.string(),
			differenceRight: z.string(),
			previousLeft: z.string(),
			currentLeft: z.string(),
			differenceLeft: z.string(),
		}),
	}),
	bodyCompositionGuedes: z.object({
		kg: z.string(),
		DCsubescapular: z.object({
			previous: z.string(),
			current: z.string(),
			difference: z.string(),
		}),
		DCthigh: z.object({
			previous: z.string(),
			current: z.string(),
			difference: z.string(),
		}),
		DCtriceps: z.object({
			previous: z.string(),
			current: z.string(),
			difference: z.string(),
		}),
		DCsuprailiaca: z.object({
			previous: z.string(),
			current: z.string(),
			difference: z.string(),
		}),
		DCabdomen: z.object({
			previous: z.string(),
			current: z.string(),
			difference: z.string(),
		}),
	}),
	bodyCompositionPollock: z.object({
		subescapular: z.object({
			previous: z.number(),
			current: z.number(),
			difference: z.number(),
		}),
		thigh: z.object({
			previous: z.number(),
			current: z.number(),
			difference: z.number(),
		}),
		triceps: z.object({
			previous: z.number(),
			current: z.number(),
			difference: z.number(),
		}),
		suprailiaca: z.object({
			previous: z.number(),
			current: z.number(),
			difference: z.number(),
		}),
		abdomen: z.object({
			previous: z.number(),
			current: z.number(),
			difference: z.number(),
		}),
		axilarMedia: z.object({
			previous: z.number(),
			current: z.number(),
			difference: z.number(),
		}),
		breastplate: z.object({
			previous: z.number(),
			current: z.number(),
			difference: z.number(),
		}),
	}),
})

type PhysicalAssessmentSchema = z.infer<typeof physicalAssessmentSchema>

export function PhysicalAssessmentForm() {
	// logica de calculo depende do sexo do aluno (feminino ou masculino)
	const [sex, setSex] = useState('')

	const { handleSubmit, control, register } = useForm<PhysicalAssessmentSchema>(
		{
			resolver: zodResolver(physicalAssessmentSchema),
		},
	)

	function handlePhysicalAssessment(data: PhysicalAssessmentSchema) {
		console.log(data)
		setSex(data.sex)
	}

	return (
		<form
			onSubmit={handleSubmit(handlePhysicalAssessment)}
			className="w-full flex flex-col gap-4"
		>
			<div className="relative">
				<Button type="submit" className="fixed top-[80px] right-20 z-[999]">
					<span>
						<SaveAll
							className="size-5 text-white z-50 mr-1.5 max-w-[168px]"
							strokeWidth={2}
						/>
					</span>
					Salvar
				</Button>
			</div>
			<Accordion type="multiple" className="w-full">
				<AccordionItem value="objetivos">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<CheckFat />
							</div>
							<p className="text-gray900 font-semibold">Objetivos</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-full flex gap-5 sm:flex-col">
									<div className="w-full">
										<Label>Objetivo 1:</Label>
										<Controller
											control={control}
											name="goals.goal1"
											render={({ field }) => (
												<RichText
													description={field.value}
													onChange={(value) => field.onChange(value)}
												/>
											)}
										/>
									</div>
									<div className="w-full">
										<Label>Objetivo 2:</Label>
										<Controller
											control={control}
											name="goals.goal2"
											render={({ field }) => (
												<RichText
													description={field.value}
													onChange={(value) => field.onChange(value)}
												/>
											)}
										/>
									</div>
									<div className="w-full">
										<Label>Objetivo 3:</Label>
										<Controller
											control={control}
											name="goals.goal3"
											render={({ field }) => (
												<RichText
													description={field.value}
													onChange={(value) => field.onChange(value)}
												/>
											)}
										/>
									</div>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="medidas-de-perimetria">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<Ruler />
							</div>
							<p className="text-gray900 font-semibold">
								Medidas de Perimetria
							</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-full flex gap-5 sm:flex-col">
									<div className="gap-5 w-1/2 sm:w-full flex flex-col">
										<div className="flex gap-2 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">Ombro:</Label>
											<Input
												placeholder="Atual"
												{...register('perimeterMeasurements.shoulder.current')}
											/>
										</div>
										<div className="flex gap-2 items-center px-4">
											<Label className="w-full max-w-[60px]">Cintura:</Label>
											<Input
												placeholder="Atual"
												{...register('perimeterMeasurements.waist.current')}
											/>
										</div>
										<div className="flex gap-2 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">Quadril:</Label>
											<Input
												placeholder="Atual"
												{...register('perimeterMeasurements.hip.current')}
											/>
										</div>
									</div>
									<div className="sm:hidden">
										<div className="w-[1px] h-full bg-gray200" />
									</div>
									<div className="gap-5 w-1/2 flex-col sm:w-full flex">
										<div className="flex gap-2 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">Tórax:</Label>
											<Input
												placeholder="Atual"
												{...register('perimeterMeasurements.thorax.current')}
											/>
										</div>
										<div className="flex gap-2 items-center px-4">
											<Label className="w-full max-w-[60px]">Abdome:</Label>
											<Input
												placeholder="Atual"
												{...register('perimeterMeasurements.abdomen.current')}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="shadow mt-5 p-5 rounded-sm">
								<div className="w-full flex gap-5 sm:flex-col">
									<div className="gap-5 w-1/2 sm:w-full flex flex-col">
										<div className="flex gap-5 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">
												Coxa Superior:
											</Label>
											<div className="grid grid-cols-3 gap-2 ">
												<Input
													placeholder="Direita atual"
													{...register(
														'perimeterMeasurements.upperThigh.currentRight',
													)}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register(
														'perimeterMeasurements.upperThigh.currentLeft',
													)}
												/>
											</div>
										</div>
										<div className="flex gap-5 items-center px-4">
											<Label className="w-full max-w-[60px]">Antebraço:</Label>
											<div className="grid grid-cols-3 gap-2">
												<Input
													placeholder="Direita atual"
													{...register(
														'perimeterMeasurements.forearm.currentRight',
													)}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register(
														'perimeterMeasurements.forearm.currentLeft',
													)}
												/>
											</div>
										</div>
										<div className="flex gap-5 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">
												Braço Relaxado:
											</Label>
											<div className="grid grid-cols-3 gap-2">
												<Input
													placeholder="Direita atual"
													{...register(
														'perimeterMeasurements.relaxedArm.currentRight',
													)}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register(
														'perimeterMeasurements.relaxedArm.currentLeft',
													)}
												/>
											</div>
										</div>
									</div>
									<div className="sm:hidden">
										<div className="w-[1px] h-full bg-gray200" />
									</div>
									<div className="gap-5 w-1/2 flex-col sm:w-full flex">
										<div className="flex gap-5 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">
												Coxa Medial:
											</Label>
											<div className="grid grid-cols-3 gap-2">
												<Input
													placeholder="Direita atual"
													{...register(
														'perimeterMeasurements.medialThigh.currentRight',
													)}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register(
														'perimeterMeasurements.medialThigh.currentLeft',
													)}
												/>
											</div>
										</div>
										<div className="flex gap-5 items-center px-4">
											<Label className="w-full max-w-[60px]">
												Panturrilha:
											</Label>
											<div className="grid grid-cols-3 gap-2">
												<Input
													placeholder="Direita atual"
													{...register(
														'perimeterMeasurements.calf.currentRight',
													)}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register(
														'perimeterMeasurements.calf.currentLeft',
													)}
												/>
											</div>
										</div>
										<div className="flex gap-5 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">
												Braço Contraído:
											</Label>
											<div className="grid grid-cols-3 gap-2">
												<Input
													placeholder="Direita atual"
													{...register(
														'perimeterMeasurements.contractedArm.currentRight',
													)}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register(
														'perimeterMeasurements.contractedArm.currentLeft',
													)}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="composicap-corporal-gueades">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<PersonArmsSpread />
							</div>
							<p className="text-gray900 font-semibold">
								Composição Corporal (Guedes)
							</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-full flex gap-5 flex-col">
									<div className="gap-5 w-1/2 sm:w-full flex flex-col">
										<div className="flex gap-2 items-center">
											<Label>Peso Atual (kg):</Label>
											<Input
												placeholder="kg"
												{...register('bodyCompositionGuedes.kg')}
											/>
										</div>
									</div>
									<div>
										<h3 className="font-semibold mb-3 mt-5">
											Dobras Cutâneas (mm)
										</h3>
										<div className="w-full flex gap-5 sm:flex-col">
											<div className="gap-5 w-1/2 sm:w-full flex flex-col">
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">
														DC Subescapular:
													</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionGuedes.DCsubescapular.current',
														)}
													/>
												</div>
												<div className="flex gap-2 items-center px-4">
													<Label className="w-full max-w-[80px]">
														DC Coxa:
													</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionGuedes.DCthigh.current',
														)}
													/>
												</div>
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">
														DC Tríceps:
													</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionGuedes.DCtriceps.current',
														)}
													/>
												</div>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 flex-col sm:w-full flex">
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">
														DC Suprailíaca:
													</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionGuedes.DCsuprailiaca.current',
														)}
													/>
												</div>
												<div className="flex gap-2 items-center px-4">
													<Label className="w-full max-w-[80px]">
														DC Abdome:
													</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionGuedes.DCabdomen.current',
														)}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="composicao-corporal-pollock">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<PersonArmsSpread />
							</div>
							<p className="text-gray900 font-semibold">
								Composição Corporal (Jackson e Pollock)
							</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-full flex gap-5 flex-col">
									<div>
										<h3 className="font-semibold mb-3 mt-5">
											Dobras Cutâneas (mm)
										</h3>
										<div className="w-full flex gap-5 sm:flex-col">
											<div className="gap-5 w-1/2 sm:w-full flex flex-col">
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">
														Subescapular:
													</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionPollock.subescapular.current',
														)}
													/>
												</div>
												<div className="flex gap-2 items-center px-4">
													<Label className="w-full max-w-[80px]">
														Peitoral:
													</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionPollock.breastplate.current',
														)}
													/>
												</div>
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">Coxa:</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionPollock.thigh.current',
														)}
													/>
												</div>
												<div className="flex gap-2 items-center px-4">
													<Label className="w-full max-w-[80px]">
														Tríceps:
													</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionPollock.triceps.current',
														)}
													/>
												</div>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 flex-col sm:w-full flex">
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">
														Suprailíaca:
													</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionPollock.suprailiaca.current',
														)}
													/>
												</div>
												<div className="flex gap-2 items-center px-4">
													<Label className="w-full max-w-[80px]">Abdome:</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionPollock.abdomen.current',
														)}
													/>
												</div>
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">
														Axilar-média:
													</Label>
													<Input
														placeholder="Atual"
														{...register(
															'bodyCompositionPollock.axilarMedia.current',
														)}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="avaliacao-postural">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<PersonSimpleTaiChi />
							</div>
							<p className="text-gray900 font-semibold">Avaliação Postural</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-full flex gap-5 flex-col">
									<div>
										<h3 className="font-semibold mb-3 mt-5">
											Posição Antero Posterior
										</h3>
										<div className="w-full flex gap-5 sm:flex-col">
											<div className="gap-5 w-1/2 sm:w-full flex flex-col bg-orange-100 p-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Pescoço alinhado"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Cervical:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Pescoço alinhado" />
																	<Label htmlFor="Pescoço alinhado">
																		Pescoço alinhado
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Cabeça levemente inclinada para direita" />
																<Label htmlFor="Cabeça levemente inclinada para direita">
																	Cabeça levemente inclinada para direita
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Cabeça levemente inclinada para esquerda" />
																<Label htmlFor="Cabeça levemente inclinada para esquerda">
																	Cabeça levemente inclinada para esquerda
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Cabeça acentuadamente inclinada para direita" />
																<Label htmlFor="Cabeça acentuadamente inclinada para direita">
																	Cabeça acentuadamente inclinada para direita
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Cabeça acentuadamente inclinada para esquerda" />
																<Label htmlFor="Cabeça acentuadamente inclinada para esquerda">
																	Cabeça acentuadamente inclinada para esquerda
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 flex-col sm:w-full flex bg-orange-100 p-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Ombros alinhados"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Ombros:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Ombros alinhados" />
																	<Label htmlFor="Ombros alinhados">
																		Ombros alinhados
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Ombro direito levemente elevado" />
																<Label htmlFor="Ombro direito levemente elevado">
																	Ombro direito levemente elevado
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Ombro esquerdo levemente elevado" />
																<Label htmlFor="Ombro esquerdo levemente elevado">
																	Ombro esquerdo levemente elevado
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Ombro direito acentuadamente elevado" />
																<Label htmlFor="Ombro direito acentuadamente elevado">
																	Ombro direito acentuadamente elevado
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Ombro esquerdo acentuadamente elevado" />
																<Label htmlFor="Ombro esquerdo acentuadamente elevado">
																	Ombro esquerdo acentuadamente elevado
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 flex-col sm:w-full flex bg-orange-100 p-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Coluna alinhada"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Coluna:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Coluna alinhada" />
																	<Label htmlFor="Coluna alinhada">
																		Coluna alinhada
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Coluna com leve escoliose direita" />
																<Label htmlFor="Coluna com leve escoliose direita">
																	Coluna com leve escoliose direita
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Coluna com leve escoliose esquerda" />
																<Label htmlFor="Coluna com leve escoliose esquerda">
																	Coluna com leve escoliose esquerda
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Coluna com acentuada escoliose direita" />
																<Label htmlFor="Coluna com acentuada escoliose direita">
																	Coluna com acentuada escoliose direita
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Coluna com acentuada escoliose esquerda" />
																<Label htmlFor="Coluna com acentuada escoliose esquerda">
																	Coluna com acentuada escoliose esquerda
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
										</div>
										<div className="w-full flex gap-5 sm:flex-col mt-14">
											<div className="gap-5 w-1/2 sm:w-full flex flex-col px-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Quadril alinhado"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Quadril:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Quadril alinhado" />
																	<Label htmlFor="Quadril alinhado">
																		Quadril alinhado
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Quadril levemente inclinado para direita" />
																<Label htmlFor="Quadril levemente inclinado para direita">
																	Quadril levemente inclinado para direita
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Quadril levemente inclinado para esquerda" />
																<Label htmlFor="Quadril levemente inclinado para esquerda">
																	Quadril levemente inclinado para esquerda
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Quadril acentuadamente inclinado para direita" />
																<Label htmlFor="Quadril acentuadamente inclinado para direita">
																	Quadril acentuadamente inclinado para direita
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Quadril acentuadamente inclinado para esquerda" />
																<Label htmlFor="Quadril acentuadamente inclinado para esquerda">
																	Quadril acentuadamente inclinado para esquerda
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 flex-col sm:w-full flex px-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Joelhos alinhados"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Joelhos:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Joelhos alinhados" />
																	<Label htmlFor="Joelhos alinhados">
																		Joelhos alinhados
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Joelhos com leve genu-varo" />
																<Label htmlFor="Joelhos com leve genu-varo">
																	Joelhos com leve genu-varo
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Joelhos com leve genu-valgo" />
																<Label htmlFor="Joelhos com leve genu-valgo">
																	Joelhos com leve genu-valgo
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Joelhos com acentuado genu-varo</" />
																<Label htmlFor="Joelhos com acentuado genu-varo</">
																	Joelhos com acentuado genu-varo
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Joelhos com acentuado genu-valgo" />
																<Label htmlFor="Joelhos com acentuado genu-valgo">
																	Joelhos com acentuado genu-valgo
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 flex-col sm:w-full flex px-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Pés alinhados"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Calcanhares:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Pés alinhados" />
																	<Label htmlFor="Pés alinhados">
																		Pés alinhados
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Coluna com leve escoliose direita" />
																<Label htmlFor="Coluna com leve escoliose direita">
																	Pés levemente abdutos
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Coluna com leve escoliose esquerda" />
																<Label htmlFor="Coluna com leve escoliose esquerda">
																	Pés levemente adutos
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Pés acentuadamente abdutos" />
																<Label htmlFor="Pés acentuadamente abdutos">
																	Pés acentuadamente abdutos
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Pés acentuadamente adutos" />
																<Label htmlFor="Pés acentuadamente adutos">
																	Pés acentuadamente adutos
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
										</div>
										<div className="w-full flex gap-5 sm:flex-col mt-14">
											<div className="gap-5 w-1/2 sm:w-full flex flex-col bg-orange-100 p-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Arcos dos pés com a curvatura normal"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">Pés:</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Arcos dos pés com a curvatura normal" />
																	<Label htmlFor="Arcos dos pés com a curvatura normal">
																		Arcos dos pés com a curvatura normal
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Arcos dos pés levemente planos" />
																<Label htmlFor="Arcos dos pés levemente planos">
																	Arcos dos pés levemente planos
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Arcos dos pés acentuadamente planos" />
																<Label htmlFor="Arcos dos pés acentuadamente planos">
																	Arcos dos pés acentuadamente planos
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="w-1/2 sm:w-full" />
											<div className="sm:hidden">
												<div className="w-[0px] h-full bg-gray200" />
											</div>
											<div className="w-1/2 sm:w-full" />
										</div>
									</div>
								</div>
							</div>
							<div className="shadow p-5 rounded-sm mt-5">
								<div className="w-full flex gap-5 flex-col">
									<div>
										<h3 className="font-semibold mb-3 mt-5">Posição Lateral</h3>
										<div className="w-full flex gap-5 sm:flex-col">
											<div className="gap-5 w-1/2 sm:w-full flex flex-col bg-orange-100 p-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Pescoço alinhado"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Pescoço:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Pescoço alinhado" />
																	<Label htmlFor="Pescoço alinhado">
																		Pescoço alinhado
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Leve hiperlordose cervical" />
																<Label htmlFor="Leve hiperlordose cervical">
																	Leve hiperlordose cervical
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Acentuada hiperlordose cervical" />
																<Label htmlFor="Acentuada hiperlordose cervical">
																	Acentuada hiperlordose cervical
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 sm:w-full flex flex-col bg-orange-100 p-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Joelhos alinhados"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Joelhos:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Joelhos alinhados" />
																	<Label htmlFor="Joelhos alinhados">
																		Joelhos alinhados
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Joelhos com ele hiperextensão" />
																<Label htmlFor="Joelhos com ele hiperextensão">
																	Joelhos com leve hiperextensão
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Acentuada protusão absominal" />
																<Label htmlFor="Acentuada protusão absominal">
																	Joelhos com acentuada hiperextensão
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 flex-col sm:w-full flex bg-orange-100 p-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Escapulas alinhadas"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Escapulas:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Escapulas alinhadas" />
																	<Label htmlFor="Escapulas alinhadas">
																		Escapulas alinhadas
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Escapulas levemente aladas" />
																<Label htmlFor="Escapulas levemente aladas">
																	Escapulas levemente aladas
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Escapulas acentuadamente aladas" />
																<Label htmlFor="Escapulas acentuadamente aladas">
																	Escapulas acentuadamente aladas
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
										</div>
										<div className="w-full flex gap-5 sm:flex-col mt-14">
											<div className="gap-5 w-1/2 sm:w-full flex flex-col px-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Coluna toracica alinhada"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Cifose:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Coluna toracica alinhada" />
																	<Label htmlFor="Coluna toracica alinhada">
																		Coluna toracica alinhada
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Leve cifose" />
																<Label htmlFor="Leve cifose">Leve cifose</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Quadril levemente inclinado para esquerda" />
																<Label htmlFor="Quadril levemente inclinado para esquerda">
																	Acentuada cifose
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 flex-col sm:w-full flex px-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Coluna lombar alinhada"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Lordose:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Coluna lombar alinhada" />
																	<Label htmlFor="Coluna lombar alinhada">
																		Coluna lombar alinhada
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Leve hiperlordose lombar" />
																<Label htmlFor="Leve hiperlordose lombar">
																	Leve hiperlordose lombar
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Acentuada hiperlordose lombar" />
																<Label htmlFor="Acentuada hiperlordose lombar">
																	Acentuada hiperlordose lombar
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 sm:w-full flex flex-col px-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Abdomem alinhado"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Abdomem:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Abdomem alinhado" />
																	<Label htmlFor="Abdomem alinhado">
																		Abdomem alinhado
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Leve protusão absominal" />
																<Label htmlFor="Leve protusão absominal">
																	Leve protusão absominal
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Acentuada protusão absominal" />
																<Label htmlFor="Acentuada protusão absominal">
																	Acentuada protusão absominal
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
										</div>
										<div className="w-full flex gap-5 sm:flex-col mt-14">
											<div className="gap-5 w-1/2 flex-col sm:w-full flex bg-orange-100 p-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Tronco alinhado"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Tronco:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Tronco alinhado" />
																	<Label htmlFor="Tronco alinhado">
																		Tronco alinhado
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Tronco levemente inclinado para traz da linha média" />
																<Label htmlFor="Tronco levemente inclinado para traz da linha média">
																	Tronco levemente inclinado para traz da linha
																	média
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Tronco levemente inclinado para frante da linha média" />
																<Label htmlFor="Tronco levemente inclinado para frante da linha média">
																	Tronco levemente inclinado para frante da
																	linha média
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Tronco acentuadamente inclinado para traz da linha média" />
																<Label htmlFor="CTronco acentuadamente inclinado para traz da linha média">
																	Tronco acentuadamente inclinado para traz da
																	linha média
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Tronco acentuadamente inclinado para frante da linha média" />
																<Label htmlFor="Tronco acentuadamente inclinado para frante da linha média">
																	Tronco acentuadamente inclinado para frante da
																	linha média
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 flex-col sm:w-full flex bg-orange-100 p-4">
												<Controller
													control={control}
													name="sex"
													render={({ field }) => (
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue="Peitoral alinhados"
															className="flex flex-col"
														>
															<div className="">
																<p className="text-sm mb-4 font-medium">
																	Peitoral:
																</p>
																<div className="flex items-center space-x-2">
																	<RadioGroupItem value="Peitoral alinhados" />
																	<Label htmlFor="Peitoral alinhadoss">
																		Peitoral alinhados
																	</Label>
																</div>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Peito levemente cavo" />
																<Label htmlFor="Peito levemente cavo">
																	Peito levemente cavo
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Peito levemente projetado" />
																<Label htmlFor="Peito levemente projetado">
																	Peito levemente projetado
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Peito acentuadamente cavo" />
																<Label htmlFor="Peito acentuadamente cavo">
																	Peito acentuadamente cavo
																</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="Peito acentuadamente projetado" />
																<Label htmlFor="Peito acentuadamente projetado">
																	Peito acentuadamente projetado
																</Label>
															</div>
														</RadioGroup>
													)}
												/>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="w-1/2 sm:w-full" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="avaliacao-de-flexibilidade">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<PersonSimple />
							</div>
							<p className="text-gray900 font-semibold">
								Avaliação de flexibilidade
							</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-full flex flex-col gap-5">
									{/**Condicional da tabela por sexo do aluno */}
									<FlexibilityWomanTable />
									<FlexibilityMenTable />
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="teste-cooper">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<Heartbeat />
							</div>
							<p className="text-gray900 font-semibold">
								Avaliação Cardiorrespiratória
							</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-full flex flex-col gap-5">
									{/**Condicional da tabela por sexo do aluno */}
									<CooperWomanTable />
									<CooperMenTable />
									<div className="flex gap-2 items-center mt-8 bg-orange-100 p-4">
										<Label>Distância total percorrida (12 minutos):</Label>
										<Input
											placeholder="Metros"
											{...register('bodyCompositionGuedes.kg')}
										/>
									</div>
									<p className="mt-5 mb-3 font-medium text-sm">
										Frequência cardíaca durante o teste
									</p>
									<div className="gap-20 flex sm:flex-col md:flex-col justify-between">
										<div className="flex flex-wrap gap-5 h-fit">
											<div className="flex gap-2 items-center">
												<Label>0 minutos:</Label>
												<Input placeholder="" />
											</div>
											<div className="flex gap-2 items-center">
												<Label>2 minutos:</Label>
												<Input placeholder="" />
											</div>
											<div className="flex gap-2 items-center">
												<Label>4 minutos:</Label>
												<Input placeholder="" />
											</div>
											<div className="flex gap-2 items-center">
												<Label>6 minutos:</Label>
												<Input placeholder="" />
											</div>
											<div className="flex gap-2 items-center">
												<Label>8 minutos:</Label>
												<Input placeholder="" />
											</div>
											<div className="flex gap-2 items-center">
												<Label>10 minutos:</Label>
												<Input placeholder="" />
											</div>
											<div className="flex gap-2 items-center">
												<Label>12 minutos:</Label>
												<Input placeholder="" />
											</div>
										</div>
										<div className="-mt-20">
											<CooperChart />
										</div>
									</div>
									<div className="w-full mt-5">
										<Label>Adicionar observações:</Label>
										<Controller
											control={control}
											name="goals.goal2"
											render={({ field }) => (
												<RichText
													description={field.value}
													onChange={(value) => field.onChange(value)}
												/>
											)}
										/>
									</div>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</form>
	)
}
