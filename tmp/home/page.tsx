import { Fragment } from 'react'
import type { Metadata } from 'next'

import { PageLayout } from '@/components/page-layout'
import { RenderContent } from '@/app/(dashboard)/home/(components)/content'

export const metadata: Metadata = {
	title: 'Dashboard',
}

export default function Home() {
	return (
		<Fragment>
			<PageLayout title="Dashboard" />
			<RenderContent />
		</Fragment>
	)
}
