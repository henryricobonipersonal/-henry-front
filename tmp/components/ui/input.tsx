import { type ComponentProps, forwardRef } from 'react'

import { cn } from '@/utils/cn'
import { XCircleIcon } from '@heroicons/react/24/outline'

export interface InputProps extends ComponentProps<'input'> {
	error?: string
	className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, error, ...props }, ref) => {
		const options = {
			none: '',
			small: 'w-[80px]',
			full: 'w-full',
			medium: 'w-[160px]',
		}

		return (
			<div className={cn('w-full max-w-sm', className)}>
				<input
					type={type}
					className={cn(
						'w-full max-w-sm shadow flex h-10 rounded-md border border-zinc-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
						className,
					)}
					ref={ref}
					{...props}
				/>
				{error && (
					<div className="mt-2 flex items-center gap-1.5 text-red-600">
						<div>
							<XCircleIcon className="h-5" />
						</div>
						<span className="text-xs">{error}</span>
					</div>
				)}
			</div>
		)
	},
)
Input.displayName = 'Input'

export { Input }
