import { SaveAll } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'

import { ManualExpensesDataTable } from '@/app/(dashboard)/cash-flow/(components)/manual-expenses-data-table'
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

export function ManualExpenseModal({ open, setOpen }: Props) {
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<form>
				<AlertDialogContent className="w-full max-w-[800px] max-h-[90vh] overflow-auto">
					<AlertDialogHeader>
						<AlertDialogTitle>Pagamentos (outros): Dez 2024</AlertDialogTitle>
						<AlertDialogDescription>
							⚠️ Qualquer edição implicará diretamento no Fluxo de Caixa.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<ManualExpensesDataTable />
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
