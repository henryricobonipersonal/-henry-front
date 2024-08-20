'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { SaveAll } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { RichText } from '@/components/rich-text'
import { Button } from '@/components/ui/button'

const editMetaSchema = z.object({
	description: z.string(),
})

type EditMetaSchema = z.infer<typeof editMetaSchema>

export function EditMetasForm() {
	const { handleSubmit, control } = useForm<EditMetaSchema>({
		resolver: zodResolver(editMetaSchema),
	})

	function handleProntuario(data: EditMetaSchema) {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(handleProntuario)}>
			<div className="relative">
				<Button
					type="submit"
					className="absolute bottom-[100px] right-0 max-w-[168px]"
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
				<Label>1. Editar meta do aluno:</Label>
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
