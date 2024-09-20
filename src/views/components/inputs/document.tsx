import { forwardRef, type ComponentProps, type FocusEvent, type ChangeEvent } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { Field, Label } from '@views/components/tw/fieldset'
import { cn } from '@app/utils/cn'

export interface Props extends ComponentProps<'input'> {
	name: string
	label?: string
	error?: string
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

export const InputDocument = forwardRef<HTMLInputElement, Props>(
	({ name, label, error, onBlur, className, ...props }, ref) => {
		function applyCpfCnpjMask(value: string) {
			const baseValue = value?.replace(/\D/g, '')
			if (baseValue?.length <= 11) {
				return baseValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
			}
			return baseValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
		}

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			const maskedValue = applyCpfCnpjMask(e.target.value)
			e.target.value = maskedValue
			props.onChange?.(e)
		}

		return (
			<Field className="!space-y-0 !w-full">
				{label && (
					<Label htmlFor={props.id ?? name} className="cursor-pointer">
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
						{...props}
						id={props.id ?? name}
						name={name}
						ref={ref}
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
						onChange={handleChange}
						onBlur={(e) => {
							onBlur?.(e)
						}}
					/>
				</span>

				{error && (
					<div className="mb-2 mt-2 flex items-center gap-1.5 text-red-500">
						<XCircleIcon className="h-5" />
						<span className="text-xs">{error}</span>
					</div>
				)}
			</Field>
		)
	},
)

InputDocument.displayName = 'InputDocument'
