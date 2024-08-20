'use client'

import { SaveAll } from 'lucide-react'
import { type Dispatch, type SetStateAction, useState } from 'react'

import { CalendarSelect } from '@/components/calendar-select'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function FundReleaseModal({ open, setOpen }: Props) {
	const [date, setDate] = useState<Date | undefined>(new Date())

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<form>
				<AlertDialogContent className="w-full max-w-[800px] max-h-[90vh] overflow-auto">
					<AlertDialogHeader>
						<AlertDialogTitle>Novo Lançamento</AlertDialogTitle>
					</AlertDialogHeader>
					<div>
						<div className="flex gap-5 items-end">
							<div className="w-full">
								<Label className="w-full">Tipo de lançamento:</Label>
								<Select>
									<SelectTrigger className="w-full max-w-[320px] sm:max-w-full">
										<SelectValue placeholder="Selecionar tipo de lançamento" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Tipo de lançamento</SelectLabel>
											<SelectItem value="entry">
												Recebimentos (outros)
											</SelectItem>
											<SelectItem value="exit">Pagamentos (outros)</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div className="w-full">
								<Label className="w-full">Assunto:</Label>
								<Input placeholder="Suplementos..." />
							</div>
							<div className="w-full">
								<Label className="w-full">Valor</Label>
								<Input placeholder="R$ 0,00" />
							</div>
							<div className="flex flex-col w-full">
								<Label>Selecionar data: </Label>
								<CalendarSelect dateValue={date} setDateValue={setDate} />
							</div>
						</div>
					</div>
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
