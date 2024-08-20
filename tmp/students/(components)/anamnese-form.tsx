'use client'

import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Barbell,
  Brain,
  BriefcaseMetal,
  Cigarette,
  Heartbeat,
  Person,
  Stethoscope,
} from '@phosphor-icons/react/dist/ssr'
import { SaveAll } from 'lucide-react'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { strMessage } from '@/utils/custom-error'
import { Format } from '@/utils/format'

const schema = z.object({
	ageAndGender: z.object({
		ageAndGender: z.string(strMessage('idade e gênero')).optional(),
	}),
	professionFamily: z.object({
		profession: z
			.string(strMessage('profissão'))
			.min(1, 'O campo profissão é obrigatório'),
		workHours: z
			.string(strMessage('horas de trabalho por dia'))
			.min(1, 'O campo horas de trabalho por dia é obrigatório'),
		haveChildren: z.string(strMessage('tem crianças')).optional(),
		ageChildren: z.string(strMessage('idade das crianças')).optional(),
	}),
	smoker: z.object({
		isSmoker: z.string().optional(),
	}),
	heartHealth: z.object({
		heartProblems: z.string(strMessage('problemas de coração')).optional(),
		dateOfLastCardiacExam: z.string(
			strMessage('data do último exame cardíaco'),
		),
		whatHeartProblems: z.string(strMessage('quais problemas de coração')),
		medicalMonitoring: z.string(strMessage('acompanhamento médico')),
		familyHistoryOfHeartDisease: z
			.string(strMessage('histórico familiar de doenças cardíacas'))
			.optional(),
		degreeOfKinship: z.string(strMessage('grau de parentesco')).optional(),
	}),
	mentalHealth: z.object({
		haveMentalIllness: z.string(strMessage('tem doença mental')).optional(),
		haveMedicalCare: z.string(strMessage('tem atendimento médico')).optional(),
		recommendationIfThereIsAMentalCrisis: z.string(
			strMessage('recomendação em caso de crise mental'),
		),
	}),
	jointHealth: z.object({
		haveJointPathology: z.string(strMessage('tem patologia articular')),
		feelPainWhenMoving: z.string(strMessage('sente dor ao se mover')),
		causeOfPain: z.string(strMessage('causa da dor')),
		haveAdoctorsRecommendation: z.string(strMessage('tem recomendação médica')),
		practicePhysicalActivity: z
			.string(strMessage('pratica atividade física'))
			.optional(),
		whichOneAndHowLong: z.string(strMessage('qual e por quanto tempo')),
		weeklyFrequency: z.string(strMessage('frequência semanal')),
		obs: z.string(strMessage('observações')),
	}),
	generalHealth: z.object({
		hadSurgery: z.string(strMessage('teve cirurgia')).optional(),
		whichAndWhy: z.string(strMessage('qual e por quê')),
		healthProblems: z.string(strMessage('problemas de saúde')),
	}),
})

type AnamneseStudentFormData = z.infer<typeof schema>

export function AnamneseForm() {
	const { register, handleSubmit, control, watch, setValue } =
		useForm<AnamneseStudentFormData>({
			resolver: zodResolver(schema),
		})

	const watchDate = watch('heartHealth.dateOfLastCardiacExam')

	useEffect(() => {
		if (watchDate) {
			setValue('heartHealth.dateOfLastCardiacExam', Format.parseIso(watchDate))
		}
	}, [watchDate, setValue])

	function handleAnamneseSchema(data: AnamneseStudentFormData) {
		console.log(data)
	}

	return (
		<form
			onSubmit={handleSubmit(handleAnamneseSchema)}
			className="w-full flex flex-col gap-4"
		>
			<div className="relative">
				<Button
					type="submit"
					className="fixed top-[60px] right-20 z-[999] max-w-[168px]"
				>
					<span>
						<SaveAll
							className="size-5 text-white z-50 mr-1.5"
							strokeWidth={2}
						/>
					</span>
					Salvar
				</Button>
			</div>

			<Accordion type="multiple" className="w-full">
				<AccordionItem value="sexo">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<Person />
							</div>
							<p className="text-gray900 font-semibold">Sexo e Idade</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="mb-5">
							<div className="shadow p-5 rounded-sm ">
								<div className="w-full">
									<Label>Sexo e Idade:</Label>
									<Controller
										control={control}
										name="ageAndGender.ageAndGender"
										render={({ field }) => (
											<Select
												onValueChange={field.onChange}
												value={field.value}
											>
												<SelectTrigger className="w-full max-w-[320px] sm:max-w-full">
													<SelectValue placeholder="Sexo e Idade" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Sexo e Idade</SelectLabel>
														<SelectItem value="mulher-com-menos-de-46-anos">
															Mulher com menos de 46 anos
														</SelectItem>
														<SelectItem value="mulher-com-mais-de-46-anos-de-idade">
															Mulher com mais de 46 anos de idade
														</SelectItem>
														<SelectItem value="homem-com-até-30-anos">
															Homem com até 30 anos
														</SelectItem>
														<SelectItem value="homem-com-idade-entre-de-31-e-45-anos">
															Homem com idade entre de 31 e 45 anos
														</SelectItem>
														<SelectItem value="homem-com-mais-de-45-anos">
															Homem com mais de 45 anos
														</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										)}
									/>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="profissao-familia">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<BriefcaseMetal />
							</div>
							<p className="text-gray900 font-semibold">Profissão e Família</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-full flex gap-5 sm:flex-col">
									<div className="gap-5 w-1/2 sm:w-full flex">
										<div className="w-full">
											<Label>Profissão:</Label>
											<Input
												placeholder="Profissão"
												type="text"
												{...register('professionFamily.profession')}
											/>
										</div>
										<div className="w-full">
											<Label>Quantas horas de trabalho por dia:</Label>
											<Input
												placeholder="Hrs/dia de trabalho"
												type="text"
												{...register('professionFamily.workHours')}
											/>
										</div>
									</div>
									<div className="sm:hidden">
										<div className="w-[1px] h-full bg-gray200" />
									</div>
									<div className="gap-5 w-1/2 sm:w-full flex">
										<div className="w-full">
											<Label>Possui filhos:</Label>
											<Controller
												control={control}
												name="professionFamily.haveChildren"
												render={({ field }) => (
													<Select
														onValueChange={field.onChange}
														value={field.value}
													>
														<SelectTrigger className="w-full">
															<SelectValue placeholder="Possui filhos?" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectLabel>Possui filhos?</SelectLabel>
																<SelectItem value="sim">Sim</SelectItem>
																<SelectItem value="não">Não</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												)}
											/>
										</div>
										<div className="w-full flex flex-col justify-end">
											<Label>Se sim, qual a idade:</Label>
											<Input
												placeholder="Idade(s)"
												type="text"
												{...register('professionFamily.ageChildren')}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="tabagismo">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<Cigarette />
							</div>
							<p className="text-gray900 font-semibold">Tabagismo</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-[100%] flex gap-5 sm:flex-col">
									<div className="gap-5 w-1/2 sm:w-full flex">
										<div className="w-full">
											<Label>Fumante:</Label>
											<Controller
												control={control}
												name="smoker.isSmoker"
												render={({ field }) => (
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<SelectTrigger className="w-full max-w-[320px] sm:max-w-full">
															<SelectValue placeholder="Fumante?" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectLabel>Fumante?</SelectLabel>
																<SelectItem value="não-fuma">
																	Não fuma
																</SelectItem>
																<SelectItem value="parou-de-fumar-há-menos-de-1-ano">
																	Parou de fumar há menos de 1 ano
																</SelectItem>
																<SelectItem value="parou-de-fumar-há-mais-de-1-ano">
																	Parou de fumar há mais de 1 ano
																</SelectItem>
																<SelectItem value="fuma-ocasionalmente">
																	Fuma ocasionalmente
																</SelectItem>
																<SelectItem value="fuma-caximbo-ou-charuto">
																	Fuma caximbo ou charuto
																</SelectItem>
																<SelectItem value="fuma-menos-de-10-cigarros-por-dia">
																	Fuma menos de 10 cigarros por dia
																</SelectItem>
																<SelectItem value="fuma-entre-11-e-20-cigarros-por-dia">
																	Fuma entre 11 e 20 cigarros por dia
																</SelectItem>
																<SelectItem value="fuma-mais-de-20-cigarros-por-dia">
																	Fuma mais de 20 cigarros por dia
																</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												)}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="saude-cardiada">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<Heartbeat />
							</div>
							<p className="text-gray900 font-semibold">Saúde Cardíaca</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-[100%] flex gap-5 sm:flex-col">
									<div className="gap-5 w-1/2 sm:w-full flex flex-col">
										<div className="flex w-full gap-5">
											<div className="w-full">
												<Label>Possui problemas cardíacos:</Label>
												<Controller
													control={control}
													name="heartHealth.heartProblems"
													render={({ field }) => (
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value}
														>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Possui problemas cardíacos?" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>
																		Possui problemas cardíacos?
																	</SelectLabel>
																	<SelectItem value="sim">Sim</SelectItem>
																	<SelectItem value="não">Não</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													)}
												/>
											</div>
											<div className="w-full">
												<Label>Data do último exame cardiológico:</Label>
												<Input
													placeholder="Data do último exame cardiológico"
													type="text"
													{...register('heartHealth.dateOfLastCardiacExam')}
												/>
											</div>
										</div>
										<div className="w-full">
											<Label>Quais problemas cardíacos possui:</Label>
											<Textarea
												placeholder="Descrever aqui"
												{...register('heartHealth.whatHeartProblems')}
											/>
										</div>
										<div className="w-full">
											<Label>
												Caso possua acompanhamento médico cardiológico,
												recomendação médica cardiológica ou limitação a prática
												de atividade física, descreva aqui:
											</Label>
											<Textarea
												placeholder="Descrever aqui"
												{...register('heartHealth.medicalMonitoring')}
											/>
										</div>
									</div>
									<div className="sm:hidden">
										<div className="w-[1px] h-full bg-gray200" />
									</div>
									<div className="gap-5 w-1/2 sm:w-full flex">
										<div className="w-1/2">
											<Label>
												Possui histórico de cardiopatias na família,
												especialmente antes dos 50 anos:{' '}
											</Label>
											<Controller
												control={control}
												name="heartHealth.familyHistoryOfHeartDisease"
												render={({ field }) => (
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<SelectTrigger className="w-full">
															<SelectValue placeholder="Histórico de cardiopatias na família" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectLabel>
																	Histórico de cardiopatias na família?
																</SelectLabel>
																<SelectItem value="sim">Sim</SelectItem>
																<SelectItem value="não">Não</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												)}
											/>
										</div>
										<div className="w-1/2 mt-6">
											<Label>Em caso de sim, qual o grau de parentesco:</Label>
											<Controller
												control={control}
												name="heartHealth.degreeOfKinship"
												render={({ field }) => (
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<SelectTrigger className="w-full">
															<SelectValue placeholder="Grau de parentesco" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectLabel>Grau de parentesco</SelectLabel>
																<SelectItem value="1º-grau">1º grau</SelectItem>
																<SelectItem value="2º-grau">2º grau</SelectItem>
																<SelectItem value="3º-grau">3º grau</SelectItem>
																<SelectItem value="4º-grau">4º grau</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												)}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="saude-mental">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<Brain />
							</div>
							<p className="text-gray900 font-semibold">Saúde Mental</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-[100%] flex gap-5 sm:flex-col">
									<div className="gap-5 w-1/2 sm:w-full flex flex-col">
										<div className="flex w-full gap-5">
											<div className="w-full">
												<Label>
													Tem ou já teve: Crise de ansiedade, Síndrome do Pânico
													ou qualquer outra situação semelhante:
												</Label>
												<Controller
													control={control}
													name="mentalHealth.haveMentalIllness"
													render={({ field }) => (
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value}
														>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Possui problemas associados a mente" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>
																		Possui problemas associados a mente?
																	</SelectLabel>
																	<SelectItem value="sim">Sim</SelectItem>
																	<SelectItem value="não">Não</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													)}
												/>
											</div>
											<div className="w-full">
												<Label>
													Em caso de sim, teve ou tem tido acompanhamento médico
													para tratar a questão:
												</Label>
												<Controller
													control={control}
													name="mentalHealth.haveMedicalCare"
													render={({ field }) => (
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value}
														>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Possui acompanhamento médico" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>
																		Possui acompanhamento médico?
																	</SelectLabel>
																	<SelectItem value="sim">Sim</SelectItem>
																	<SelectItem value="não">Não</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													)}
												/>
											</div>
										</div>
										<div className="w-full">
											<Label>
												Caso tal situação ocorra qual a recomendação:
											</Label>
											<Textarea
												placeholder="Descrever aqui"
												{...register(
													'mentalHealth.recommendationIfThereIsAMentalCrisis',
												)}
											/>
										</div>
									</div>
									<div className="sm:hidden">
										<div className="w-[1px] h-full bg-gray200" />
									</div>
									<div className="gap-5 w-1/2 sm:w-full flex">
										<div className="w-1/2 mt-6" />
									</div>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="saude-das-articulacoes-e-fisico">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<Barbell />
							</div>
							<p className="text-gray900 font-semibold">
								Saúde das Articulações e Físico
							</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-[100%] flex gap-5 sm:flex-col">
									<div className="gap-5 w-1/2 sm:w-full flex flex-col">
										<div className="flex w-full gap-5">
											<div className="w-full">
												<Label>
													Possui alguma patologia articular? Joelhos. Quadril.
													Coluna. Ombro. Outros:
												</Label>
												<Textarea
													placeholder="Descrever aqui"
													{...register('jointHealth.haveJointPathology')}
												/>
											</div>
											<div className="w-full">
												<Label>
													Sente dores pelo corpo em algum movimento do dia a dia
													ou exercício físico:
												</Label>
												<Textarea
													placeholder="Descrever aqui"
													{...register('jointHealth.feelPainWhenMoving')}
												/>
											</div>
										</div>
										<div className="w-full">
											<Label>
												Em caso de sim qual a suposta causa na sua opinião:
											</Label>
											<Textarea
												placeholder="Descrever aqui"
												{...register('jointHealth.causeOfPain')}
											/>
										</div>
										<div className="w-full">
											<Label>Houve recomendação médica? Obs:</Label>
											<Textarea
												placeholder="Descrever aqui"
												{...register('jointHealth.haveAdoctorsRecommendation')}
											/>
										</div>
									</div>
									<div className="sm:hidden">
										<div className="w-[1px] h-full bg-gray200" />
									</div>
									<div className="gap-5 w-1/2 sm:w-full flex-col flex">
										<div className="flex w-full gap-5">
											<div className="w-full">
												<Label>Pratica alguma atividade física:</Label>
												<Controller
													control={control}
													name="jointHealth.practicePhysicalActivity"
													render={({ field }) => (
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value}
														>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Pratica alguma atividade física" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>
																		Pratica alguma atividade física?
																	</SelectLabel>
																	<SelectItem value="sim">Sim</SelectItem>
																	<SelectItem value="não">Não</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													)}
												/>
											</div>
											<div className="w-full">
												<Label>Qual e a quanto tempo:</Label>
												<Input
													placeholder="Qual e a quanto tempo"
													type="text"
													{...register('jointHealth.whichOneAndHowLong')}
												/>
											</div>
											<div className="w-full">
												<Label>Qual a frequência semanal:</Label>
												<Input
													placeholder="Qual e a quanto tempo"
													type="text"
													{...register('jointHealth.weeklyFrequency')}
												/>
											</div>
										</div>
										<div className="w-full">
											<Label>
												Você possui alguma outra informação relevante que deva
												ser acrescentada que não foi perguntado neste
												questionário? Obs:
											</Label>
											<Textarea
												placeholder="Descrever aqui"
												{...register('jointHealth.obs')}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="saude-geral">
					<AccordionTrigger>
						<div className="flex gap-3 items-center">
							<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
								<Stethoscope />
							</div>
							<p className="text-gray900 font-semibold">Saúde Geral</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="my-5">
							<div className="shadow p-5 rounded-sm">
								<div className="w-[100%] flex gap-5 sm:flex-col">
									<div className="gap-5 w-1/2 sm:w-full flex flex-col">
										<div className="flex w-full gap-5">
											<div className="w-full">
												<Label>Já passou por alguma cirurgia:</Label>
												<Controller
													control={control}
													name="generalHealth.hadSurgery"
													render={({ field }) => (
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value}
														>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Já passou por alguma cirurgia" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>
																		Já passou por alguma cirurgia?
																	</SelectLabel>
																	<SelectItem value="sim">Sim</SelectItem>
																	<SelectItem value="não">Não</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													)}
												/>
											</div>
											<div className="w-full">
												<Label>Se sim, qual e por que:</Label>
												<Input
													placeholder="Qual e por que"
													type="text"
													{...register('generalHealth.whichAndWhy')}
												/>
											</div>
										</div>
										<div className="w-full">
											<Label>
												Possui algum problema de saúde? Se sim, descrever o
												problema e se está realizando tratamento médico:
											</Label>
											<Textarea
												placeholder="Descrever aqui"
												{...register('generalHealth.healthProblems')}
											/>
										</div>
									</div>
									<div className="sm:hidden">
										<div className="w-[1px] h-full bg-gray200" />
									</div>
									<div className="gap-5 w-1/2 sm:w-full flex">
										<div className="w-1/2 mt-6" />
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
