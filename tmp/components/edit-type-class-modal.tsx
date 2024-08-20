import { SaveAll } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'

import { Select } from '@/components/select'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { SelectItem } from '@/components/ui/select'


interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function EditTypeClassModal({ open, setOpen }: Props) {
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<form>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Alterar Status da Aula</AlertDialogTitle>
						<AlertDialogDescription>
							<p className="mb-2 font-semibold">
								Aluno 1: Aula de 01/07/2024 das 05:00 - 06:00
							</p>
							<p className="mb-2">
								⚠️ Essa edição implicará diretamente nos relatórios financeiros
								do sistema.
							</p>
						</AlertDialogDescription>
						<Select
							placeholder="Selecionar status da aula"
							label="Status da Aula"
						>
							<SelectItem value="Presença Confirmada (Aula Normal)">
								Presença Confirmada (Aula Normal)
							</SelectItem>
							<SelectItem value="Falta (Aula Normal)">
								Falta (Aula Normal)
							</SelectItem>
							<SelectItem value="Presença Confirmada (Aula de reposição)">
								Presença Confirmada (Aula de reposição)
							</SelectItem>
							<SelectItem value="Falta (Aula de Reposição)">
								Falta (Aula de Reposição)
							</SelectItem>
							<SelectItem value="Falta do Professor">
								Falta do Professor
							</SelectItem>
							<SelectItem value="Aula Cancelad">Aula Cancelada</SelectItem>
						</Select>
					</AlertDialogHeader>
					<AlertDialogFooter className="mt-4 flex flex-row items-center justify-end gap-3">
						<AlertDialogCancel type="button">Cancelar</AlertDialogCancel>
						<AlertDialogAction type="submit" className="max-w-[168px]">
							<span>
								<SaveAll
									className="size-5 text-white z-50 mr-1.5"
									strokeWidth={2}
								/>
							</span>
							Salvar
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</form>
		</AlertDialog>
	)
}
