'use client'

import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

import { Input } from '@/components/ui/input'

import { BodyCompositionColumnFormChart } from '@/components/graphics/body-composition-column-form-chart'
import { BodyCompositionPollockRadialFormChart } from '@/components/graphics/body-composition-pollock-radial-form-chart'
import { BodyCompositionRadialFormChart } from '@/components/graphics/body-composition-radial-form-chart'
import { PerimetryMeasurementsChart } from '@/components/graphics/perimetry-measurements-chart'
import { PerimetryMeasurementsChart2 } from '@/components/graphics/perimetry-measurements-chart2'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { numbMsg } from '@/utils/custom-error'
import { PersonArmsSpread, Ruler } from '@phosphor-icons/react/dist/ssr'
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

export function PhysicalReassessmentForm() {
	// logica de calculo depende do sexo do aluno (feminino ou masculino)
	const [sex, setSex] = useState('')

	const { handleSubmit, register } = useForm<PhysicalAssessmentSchema>({
		resolver: zodResolver(physicalAssessmentSchema),
	})

	function handlePhysicalAssessment(data: PhysicalAssessmentSchema) {
		console.log(data)
		setSex(data.sex)
	}

	return (
		<form onSubmit={handleSubmit(handlePhysicalAssessment)} className="w-full flex flex-col gap-4">
			<div className="relative">
				<Button type="submit" className="fixed top-[80px] right-20 z-[999] max-w-[168px]">
					<span>
						<SaveAll className="size-5 text-white z-50 mr-1.5" strokeWidth={2} />
					</span>
					Salvar
				</Button>
			</div>
			<Accordion type="multiple" className="w-full">
				<AccordionItem value="medidas-de-perimetria">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<Ruler />
							</div>
							<p className="text-gray900 font-semibold">Medidas de Perimetria</p>
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
												placeholder="Anterior"
												{...register('perimeterMeasurements.shoulder.previous')}
											/>
											<Input
												placeholder="Atual"
												{...register('perimeterMeasurements.shoulder.current')}
											/>
											<Input
												placeholder="Diferença"
												{...register('perimeterMeasurements.shoulder.difference')}
											/>
										</div>
										<div className="flex gap-2 items-center px-4">
											<Label className="w-full max-w-[60px]">Cintura:</Label>
											<Input
												placeholder="Anterior"
												{...register('perimeterMeasurements.waist.previous')}
											/>
											<Input
												placeholder="Atual"
												{...register('perimeterMeasurements.waist.current')}
											/>
											<Input
												placeholder="Diferença"
												{...register('perimeterMeasurements.waist.difference')}
											/>
										</div>
										<div className="flex gap-2 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">Quadril:</Label>
											<Input
												placeholder="Anterior"
												{...register('perimeterMeasurements.hip.previous')}
											/>
											<Input
												placeholder="Atual"
												{...register('perimeterMeasurements.hip.current')}
											/>
											<Input
												placeholder="Diferença"
												{...register('perimeterMeasurements.hip.difference')}
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
												placeholder="Anterior"
												{...register('perimeterMeasurements.thorax.previous')}
											/>
											<Input
												placeholder="Atual"
												{...register('perimeterMeasurements.thorax.current')}
											/>
											<Input
												placeholder="Diferença"
												{...register('perimeterMeasurements.thorax.difference')}
											/>
										</div>
										<div className="flex gap-2 items-center px-4">
											<Label className="w-full max-w-[60px]">Abdome:</Label>
											<Input
												placeholder="Anterior"
												{...register('perimeterMeasurements.abdomen.previous')}
											/>
											<Input
												placeholder="Atual"
												{...register('perimeterMeasurements.abdomen.current')}
											/>
											<Input
												placeholder="Diferença"
												{...register('perimeterMeasurements.abdomen.difference')}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="shadow mt-5 p-5 rounded-sm">
								<div className="w-full flex gap-5 sm:flex-col">
									<div className="gap-5 w-1/2 sm:w-full flex flex-col">
										<div className="flex gap-5 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">Coxa Superior:</Label>
											<div className="grid grid-cols-3 gap-2 ">
												<Input
													placeholder="Direita anterior"
													{...register('perimeterMeasurements.upperThigh.previousRight')}
												/>
												<Input
													placeholder="Direita atual"
													{...register('perimeterMeasurements.upperThigh.currentRight')}
												/>
												<Input
													placeholder="Diferença direita"
													{...register('perimeterMeasurements.upperThigh.differenceRight')}
												/>
												<Input
													placeholder="Esquerda anterior"
													{...register('perimeterMeasurements.upperThigh.previousLeft')}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register('perimeterMeasurements.upperThigh.currentLeft')}
												/>
												<Input
													placeholder="Diferença esquerda"
													{...register('perimeterMeasurements.upperThigh.differenceLeft')}
												/>
											</div>
										</div>
										<div className="flex gap-5 items-center px-4">
											<Label className="w-full max-w-[60px]">Antebraço:</Label>
											<div className="grid grid-cols-3 gap-2">
												<Input
													placeholder="Direita anterior"
													{...register('perimeterMeasurements.forearm.previousRight')}
												/>
												<Input
													placeholder="Direita atual"
													{...register('perimeterMeasurements.forearm.currentRight')}
												/>
												<Input
													placeholder="Diferença direita"
													{...register('perimeterMeasurements.forearm.differenceRight')}
												/>
												<Input
													placeholder="Esquerda anterior"
													{...register('perimeterMeasurements.forearm.previousLeft')}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register('perimeterMeasurements.forearm.currentLeft')}
												/>
												<Input
													placeholder="Diferença esquerda"
													{...register('perimeterMeasurements.forearm.differenceLeft')}
												/>
											</div>
										</div>
										<div className="flex gap-5 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">Braço Relaxado:</Label>
											<div className="grid grid-cols-3 gap-2">
												<Input
													placeholder="Direita anterior"
													{...register('perimeterMeasurements.relaxedArm.previousRight')}
												/>
												<Input
													placeholder="Direita atual"
													{...register('perimeterMeasurements.relaxedArm.currentRight')}
												/>
												<Input
													placeholder="Diferença direita"
													{...register('perimeterMeasurements.relaxedArm.differenceRight')}
												/>
												<Input
													placeholder="Esquerda anterior"
													{...register('perimeterMeasurements.relaxedArm.previousLeft')}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register('perimeterMeasurements.relaxedArm.currentLeft')}
												/>
												<Input
													placeholder="Diferença esquerda"
													{...register('perimeterMeasurements.relaxedArm.differenceLeft')}
												/>
											</div>
										</div>
									</div>
									<div className="sm:hidden">
										<div className="w-[1px] h-full bg-gray200" />
									</div>
									<div className="gap-5 w-1/2 flex-col sm:w-full flex">
										<div className="flex gap-5 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">Coxa Medial:</Label>
											<div className="grid grid-cols-3 gap-2">
												<Input
													placeholder="Direita anterior"
													{...register('perimeterMeasurements.medialThigh.previousRight')}
												/>
												<Input
													placeholder="Direita atual"
													{...register('perimeterMeasurements.medialThigh.currentRight')}
												/>
												<Input
													placeholder="Diferença direita"
													{...register('perimeterMeasurements.medialThigh.differenceRight')}
												/>
												<Input
													placeholder="Esquerda anterior"
													{...register('perimeterMeasurements.medialThigh.previousLeft')}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register('perimeterMeasurements.medialThigh.currentLeft')}
												/>
												<Input
													placeholder="Diferença esquerda"
													{...register('perimeterMeasurements.medialThigh.differenceLeft')}
												/>
											</div>
										</div>
										<div className="flex gap-5 items-center px-4">
											<Label className="w-full max-w-[60px]">Panturrilha:</Label>
											<div className="grid grid-cols-3 gap-2">
												<Input
													placeholder="Direita anterior"
													{...register('perimeterMeasurements.calf.previousRight')}
												/>
												<Input
													placeholder="Direita atual"
													{...register('perimeterMeasurements.calf.currentRight')}
												/>
												<Input
													placeholder="Diferença direita"
													{...register('perimeterMeasurements.calf.differenceRight')}
												/>
												<Input
													placeholder="Esquerda anterior"
													{...register('perimeterMeasurements.calf.previousLeft')}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register('perimeterMeasurements.calf.currentLeft')}
												/>
												<Input
													placeholder="Diferença esquerda"
													{...register('perimeterMeasurements.calf.differenceLeft')}
												/>
											</div>
										</div>
										<div className="flex gap-5 items-center bg-orange-100 p-4">
											<Label className="w-full max-w-[60px]">Braço Contraído:</Label>
											<div className="grid grid-cols-3 gap-2">
												<Input
													placeholder="Direita anterior"
													{...register('perimeterMeasurements.contractedArm.previousRight')}
												/>
												<Input
													placeholder="Direita atual"
													{...register('perimeterMeasurements.contractedArm.currentRight')}
												/>
												<Input
													placeholder="Diferença direita"
													{...register('perimeterMeasurements.contractedArm.differenceRight')}
												/>
												<Input
													placeholder="Esquerda anterior"
													{...register('perimeterMeasurements.contractedArm.previousLeft')}
												/>
												<Input
													placeholder="Esquerda atual"
													{...register('perimeterMeasurements.contractedArm.currentLeft')}
												/>
												<Input
													placeholder="Diferença esquerda"
													{...register('perimeterMeasurements.contractedArm.differenceLeft')}
												/>
											</div>
										</div>
									</div>
								</div>

								<div className="flex sm:flex-col md:flex-col gap-12 items-center my-8 justify-center">
									<PerimetryMeasurementsChart />
									<PerimetryMeasurementsChart2 />
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="composicao-comporal-guedes">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<PersonArmsSpread />
							</div>
							<p className="text-gray900 font-semibold">Composição Corporal (Guedes)</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-full flex gap-5 flex-col">
									<div className="gap-5 w-1/2 sm:w-full flex flex-col">
										<div className="flex gap-2 items-center">
											<Label>Peso Atual (kg):</Label>
											<Input placeholder="kg" {...register('bodyCompositionGuedes.kg')} />
										</div>
									</div>
									<div>
										<h3 className="font-semibold mb-3 mt-5">Dobras Cutâneas (mm)</h3>
										<div className="w-full flex gap-5 sm:flex-col">
											<div className="gap-5 w-1/2 sm:w-full flex flex-col">
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">DC Subescapular:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionGuedes.DCsubescapular.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionGuedes.DCsubescapular.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionGuedes.DCsubescapular.difference')}
													/>
												</div>
												<div className="flex gap-2 items-center px-4">
													<Label className="w-full max-w-[80px]">DC Coxa:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionGuedes.DCthigh.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionGuedes.DCthigh.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionGuedes.DCthigh.difference')}
													/>
												</div>
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">DC Tríceps:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionGuedes.DCtriceps.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionGuedes.DCtriceps.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionGuedes.DCtriceps.difference')}
													/>
												</div>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 flex-col sm:w-full flex">
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">DC Suprailíaca:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionGuedes.DCsuprailiaca.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionGuedes.DCsuprailiaca.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionGuedes.DCsuprailiaca.difference')}
													/>
												</div>
												<div className="flex gap-2 items-center px-4">
													<Label className="w-full max-w-[80px]">DC Abdome:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionGuedes.DCabdomen.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionGuedes.DCabdomen.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionGuedes.DCabdomen.difference')}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="flex sm:flex-col md:flex-col gap-12 items-center my-8 justify-center">
									<BodyCompositionRadialFormChart />
									<BodyCompositionColumnFormChart />
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
							<p className="text-gray900 font-semibold">Composição Corporal (Jackson e Pollock)</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-full flex gap-5 flex-col">
									<div>
										<h3 className="font-semibold mb-3 mt-5">Dobras Cutâneas (mm)</h3>
										<div className="w-full flex gap-5 sm:flex-col">
											<div className="gap-5 w-1/2 sm:w-full flex flex-col">
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">Subescapular:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionPollock.subescapular.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionPollock.subescapular.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionPollock.subescapular.difference')}
													/>
												</div>
												<div className="flex gap-2 items-center px-4">
													<Label className="w-full max-w-[80px]">Peitoral:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionPollock.breastplate.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionPollock.breastplate.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionPollock.breastplate.difference')}
													/>
												</div>
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">Coxa:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionPollock.thigh.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionPollock.thigh.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionPollock.thigh.difference')}
													/>
												</div>
												<div className="flex gap-2 items-center px-4">
													<Label className="w-full max-w-[80px]">Tríceps:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionPollock.triceps.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionPollock.triceps.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionPollock.triceps.difference')}
													/>
												</div>
											</div>
											<div className="sm:hidden">
												<div className="w-[1px] h-full bg-gray200" />
											</div>
											<div className="gap-5 w-1/2 flex-col sm:w-full flex">
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">Suprailíaca:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionPollock.suprailiaca.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionPollock.suprailiaca.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionPollock.suprailiaca.difference')}
													/>
												</div>
												<div className="flex gap-2 items-center px-4">
													<Label className="w-full max-w-[80px]">Abdome:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionPollock.abdomen.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionPollock.abdomen.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionPollock.abdomen.difference')}
													/>
												</div>
												<div className="flex gap-2 items-center bg-orange-100 p-4">
													<Label className="w-full max-w-[80px]">Axilar-média:</Label>
													<Input
														placeholder="Anterior"
														{...register('bodyCompositionPollock.axilarMedia.previous')}
													/>
													<Input
														placeholder="Atual"
														{...register('bodyCompositionPollock.axilarMedia.current')}
													/>
													<Input
														placeholder="Diferença"
														{...register('bodyCompositionPollock.axilarMedia.difference')}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="flex gap-12 items-center my-8 justify-center">
									<BodyCompositionPollockRadialFormChart />
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</form>
	)
}
