import { forwardRef, useState, type ComponentProps } from 'react'
import { EyeIcon, EyeSlashIcon, XCircleIcon } from '@heroicons/react/24/outline'

import { cn } from '@app/utils/cn'
import { Field, Label } from '@views/components/tw/fieldset'

type PasswordProps = 'password' | 'text'

export interface Props extends ComponentProps<'input'> {
	label?: string
	error?: string
}

export const InputPassword = forwardRef<HTMLInputElement, Props>(
	({ error, label, className, ...props }, ref) => {
		const [isPwdVisible, setIsPwdVisible] = useState<PasswordProps>('password')

		return (
			<Field className="!space-y-0 !w-full">
				<div className="relative">
					{label && (
						<Label htmlFor={props.id ?? props.name} className="cursor-pointer">
							{label}
						</Label>
					)}
					<span
						data-slot="control"
						className={cn([
							className,
							// Basic layout
							'relative block w-full',
							// Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
							'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow',
							// Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
							'dark:before:hidden',
							// Focus ring
							'after:pointer-events-none after:absolute after:inset-0 after:rounded-md after:ring-inset after:ring-transparent after:focus-within:ring-1 after:focus-within:ring-orange-primary',
							// Disabled state
							'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none',
							// Invalid state
							'before:has-[[data-invalid]]:shadow-red-500/10',
						])}
					>
						<input
							id={props.id ?? props.name}
							name={props.name}
							ref={ref}
							type={isPwdVisible}
							disabled={props.disabled}
							placeholder={props.placeholder}
							className={cn(
								'relative block w-full appearance-none rounded-md px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
								'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white',
								'border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20',
								'bg-transparent dark:bg-white/5 focus:outline-none',
								'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500',
								'data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15',
								'dark:[color-scheme:dark]',
								className,
							)}
							autoComplete="off"
							autoCorrect="off"
							{...props}
						/>
					</span>
					<button
						type="button"
						onClick={() => setIsPwdVisible(isPwdVisible === 'password' ? 'text' : 'password')}
						className={cn(
							'absolute right-[1px] sm:top-[26px] top-[28px] p-1.5 py-[5px] cursor-pointer focus-visible:ring-orange500 focus-visible:ring-1 focus-visible:outline-none focus-visible:rounded-md focus-visible:border-none',
							props.disabled && 'disabled:opacity-50 disabled:pointer-events-none',
						)}
						disabled={props.disabled}
					>
						{isPwdVisible === 'password' ? (
							<EyeIcon
								className='size-6 text-zinc-900 dark:text-zinc-100'
								strokeWidth={1}
							/>
						) : (
							<EyeSlashIcon
								className='size-6 text-zinc-900 dark:text-zinc-100'
								strokeWidth={1}
							/>
						)}
					</button>
				</div>

				{error && (
					<div className="mb-2 mt-2 flex items-center gap-1.5 text-red-500">
						<div>
							<XCircleIcon className="h-5" />
						</div>
						<span className="text-xs">{error}</span>
					</div>
				)}
			</Field>
		)
	},
)

InputPassword.displayName = 'InputPassword'
