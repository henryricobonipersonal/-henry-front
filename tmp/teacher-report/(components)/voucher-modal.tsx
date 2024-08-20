'use client'

import { SaveAll } from 'lucide-react'
import { type Dispatch, type SetStateAction, useState } from 'react'

import { VoucherDataTable } from '@/app/(dashboard)/teacher-report/(components)/voucher-data-table'
import { CalendarSelect } from '@/components/calendar-select'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function VoucherModal({ open, setOpen }: Props) {
	const [date, setDate] = useState<Date | undefined>(new Date())

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogContent className="w-full max-w-[800px] max-h-[90vh] overflow-auto">
				<AlertDialogHeader>
					<AlertDialogTitle>Novo Vale</AlertDialogTitle>
					<AlertDialogDescription>
						Lançar novo vale para o professor: Professor 1
					</AlertDialogDescription>
				</AlertDialogHeader>
				<form>
					<h2 className="font-semibold border-t-[1px] pt-5 mb-2">
						Lançar novo vale
					</h2>
					<div className="flex gap-5 items-end">
						<div className="w-full">
							<Label className="w-full">Valor do Vale:</Label>
							<Input placeholder="R$ 0,00" />
						</div>
						<div className="flex flex-col w-full">
							<Label className="">Selecionar data do Vale: </Label>
							<CalendarSelect dateValue={date} setDateValue={setDate} />
						</div>
						<AlertDialogAction type="submit" className="max-w-[168px]">
							<span>
								<SaveAll
									className="size-5 text-white z-50 mr-1.5"
									strokeWidth={2}
								/>
							</span>
							Salvar
						</AlertDialogAction>
					</div>
				</form>

				<div>
					<h2 className="font-semibold border-t-[1px] pt-4 mt-4 mb-5">
						Vales já lançados
					</h2>
					<VoucherDataTable />
				</div>
				<AlertDialogFooter className="mt-4 flex flex-row items-center justify-end gap-3">
					<AlertDialogCancel type="button">Cancelar</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
