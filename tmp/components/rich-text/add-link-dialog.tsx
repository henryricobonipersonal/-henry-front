import type { Dispatch, FormEvent, SetStateAction } from 'react'
import { Plus, X } from '@phosphor-icons/react/dist/ssr'

import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Props {
	showLinkDialog: boolean
	setShowLinkDialog: Dispatch<SetStateAction<boolean>>
	url: string
	setUrl: Dispatch<SetStateAction<string>>
	handleLink: (data: FormEvent) => void
}

export function AddLinkDialog({
	showLinkDialog,
	setShowLinkDialog,
	url,
	setUrl,
	handleLink,
}: Props) {
	return (
		<AlertDialog open={showLinkDialog} onOpenChange={setShowLinkDialog}>
			<AlertDialogContent className="flex items-center gap-5">
				<button
					className=" text-gray900 hover:text-gray900/80 transition-all"
					type="button"
					onClick={() => setShowLinkDialog(false)}
				>
					<X size={24} />
				</button>
				<div className="w-full flex flex-col items-center gap-4">
					<div className="w-full flex gap-2 items-center">
						<Label className="font-bold">Url: </Label>
						<Input
							id="width"
							value={url}
							placeholder="https://www.site.com"
							onChange={(event) => setUrl(event.target.value)}
						/>
						<button
							className="bg-orange500 text-white p-2 rounded-md  hover:bg-orange500/80 transition-all"
							type="button"
							onClick={handleLink}
						>
							<Plus size={24} />
						</button>
					</div>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
