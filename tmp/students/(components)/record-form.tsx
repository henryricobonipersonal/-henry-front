'use client'

import { Controller, useForm } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { RichText } from '@/components/rich-text'
import { Button } from '@/components/ui/button'
import { SaveAll } from 'lucide-react'

const ProntuarioSchema = z.object({
	description: z.string(),
})

type ProntuarioSchema = z.infer<typeof ProntuarioSchema>

export function RecordForm() {
	const { handleSubmit, control } = useForm<ProntuarioSchema>({
		resolver: zodResolver(ProntuarioSchema),
	})

	function handleProntuario(data: ProntuarioSchema) {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(handleProntuario)}>
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
			<div className="w-full mb-8">
				<Label>
					1. Descreva sobre as questões observadas na Anamnese e quais
					abordagens serão utilizadas (Problemas de saúde, patologias e
					observações posturais; Estratégias de planejamento de treino,
					prescrição do treino ou exercícios necessários, manipulação de
					variáveis, frequência necessária, suplementação, etc).
				</Label>
				<Controller
					control={control}
					name="description"
					render={({ field }) => (
						<RichText
							description={field.value}
							onChange={(value) => field.onChange(value)}
						/>
					)}
				/>
			</div>
			<div className="w-full">
				<Label>
					2. Adicione abaixo toda a alteração de planejamento, alteração de
					treino, alteração de variáveis peso, tempo, ângulo, exercício,
					alteração, inclusão ou suspensão de suplementação, registro da
					evolução, regressão ou surgimento de novas situações, frequência
					necessária e atual do aluno, etc.
				</Label>
				<Controller
					control={control}
					name="description"
					render={({ field }) => (
						<RichText
							description={field.value}
							onChange={(value) => field.onChange(value)}
						/>
					)}
				/>
			</div>
		</form>
	)
}
