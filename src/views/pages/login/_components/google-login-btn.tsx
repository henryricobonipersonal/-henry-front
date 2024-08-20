'use client'

import Image from 'next/image'
import { signIn } from 'next-auth/react'


import { GoogleIcon } from '@/assets/icons/google-icon'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

interface Props {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export async function GoogleLoginBtn({ isLoading, setIsLoading }: Props) {
	return (
		<Button
			type="button"
			onClick={async () => {
				setIsLoading(true)
				try {
					signIn('google')
				} finally {
					setIsLoading(false)
				}
			}}
			disabled={isLoading}
			className="mt-1"
		>
			{isLoading ? (
				<Icons.spinner className="mr-2 size-4 animate-spin" />
			) : (
				<GoogleIcon className="mr-2 size-4" />
			)}
			Login com Google
		</Button>
	)
}
