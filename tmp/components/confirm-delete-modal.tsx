import type { Dispatch, SetStateAction } from 'react'

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
	title?: string
	subtitle?: string
}

export function ConfirmDeleteModal({
	open,
	setOpen,
	title,
	subtitle,
	...props
}: Props) {
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<form>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Excluir dados</AlertDialogTitle>
						<AlertDialogDescription>
							<p className="mb-2 font-semibold">{title}</p>
							<p className="mb-2">{subtitle}</p>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter className="mt-4 flex flex-row items-center justify-end gap-3">
						<AlertDialogCancel type="button">Cancelar</AlertDialogCancel>
						<AlertDialogAction
							type="button"
							className="bg-red500 hover:bg-red500 hover:opacity-70"
							{...props}
						>
							Excluir
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</form>
		</AlertDialog>
	)
}
