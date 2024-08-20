import { PageLayout } from '@/components/page-layout'
import { Fragment } from 'react'

import { RenderContent } from '@/app/(dashboard)/schedule/(components)/content'
import { CreateClassButton } from '@/app/(dashboard)/schedule/(components)/create-class-button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Agenda',
}

export default function Schedule() {
	return (
		<Fragment>
			<PageLayout title="Agenda">
				<CreateClassButton />
			</PageLayout>
			<RenderContent />
		</Fragment>
	)
}
