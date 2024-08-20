import { SaveAll } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'

import { ManualIncomesDataTable } from '@/app/(dashboard)/cash-flow/(components)/manual-incomes-data-table'
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

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function ManualIncomeModal({ open, setOpen }: Props) {
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogContent className="w-full max-w-[800px] max-h-[90vh] overflow-auto">
				<form className="w-full ">
					<AlertDialogHeader>
						<AlertDialogTitle>Recebimentos (outros): Dez 2024</AlertDialogTitle>
					</AlertDialogHeader>
					<AlertDialogDescription>
						⚠️ Qualquer edição implicará diretamento no Fluxo de Caixa.
					</AlertDialogDescription>
					<ManualIncomesDataTable />
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
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
