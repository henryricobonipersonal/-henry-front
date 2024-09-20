import { GoogleIcon } from '@/assets/icons/google'

import { Icons } from '@views/components/icons'
import { Button } from '@views/components/tw/button'

interface Props {
	isLoading: boolean
	setIsLoading: (value: boolean) => void
}

export function GoogleButton({ isLoading, setIsLoading }: Props) {
	return (
		<Button
			type="button"
			onClick={async () => {
				setIsLoading(true)
				try {
					// login with google
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
