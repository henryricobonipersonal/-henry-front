import type { ReactNode } from 'react'
import Image from 'next/image'

interface Props {
	children: ReactNode
}

export default function Layout({ children }: Readonly<Props>) {
	return (
		<div className="min-h-screen">
			<div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				<div className="relative hidden h-full flex-col p-10 bg-muted text-white dark:border-r lg:flex">
				<Image
        src="/hero-01.jpg"
        alt="Cover Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"/>
				</div>
				{children}
			</div>
		</div>
	)
}
