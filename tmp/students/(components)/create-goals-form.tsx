'use client'

import { Controller, useForm } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { RichText } from '@/components/rich-text'
import { Button } from '@/components/ui/button'

const metaSchema = z.object({
	description: z.string(),
})

type MetaSchema = z.infer<typeof metaSchema>

export function CreateGoalsForm() {
	const { handleSubmit, control } = useForm<MetaSchema>({
		resolver: zodResolver(metaSchema),
	})

	function handleProntuario(data: MetaSchema) {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(handleProntuario)}>
			<div className="relative">
				<Button type="submit" className="fixed top-[60px] right-20 z-[999]">
					Adicionar Meta
				</Button>
			</div>
			<div className="w-full mb-8">
				<Label>1. Traçar metas do aluno:</Label>
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
