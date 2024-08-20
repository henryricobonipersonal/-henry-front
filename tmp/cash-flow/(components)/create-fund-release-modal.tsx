'use client'

import { Fragment, useState } from 'react'

import { FundReleaseModal } from '@/components/create-fund-release-modal'
import { Button } from '@/components/ui/button'

export function CreateFundReleaseModal() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Fragment>
			<Button type="button" onClick={() => setIsOpen(!isOpen)}>
				Novo lançamento
			</Button>
			<FundReleaseModal open={isOpen} setOpen={setIsOpen} />
		</Fragment>
	)
}
