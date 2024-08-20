'use client'

import { Button } from '@/components/ui/button'
import { SaveAll } from 'lucide-react'

export function SaveButton() {
	return (
		<Button form="create-student-form" type="submit">
			<span>
				<SaveAll className="size-5 text-white z-50 mr-1.5" strokeWidth={2} />
			</span>
			Salvar
		</Button>
	)
}
