import { forwardRef, type ComponentProps } from 'react'
import IntlCurrencyInput from 'react-intl-currency-input'
import { XCircleIcon } from '@heroicons/react/24/outline'

import { Field, Label } from '@views/components/tw/fieldset'
import { cn } from '@app/utils/cn'
import { Controller } from 'react-hook-form'

interface Props extends ComponentProps<'input'> {
	name: string
	label?: string
	error?: string
	control: any
}

export const InputCurrency = forwardRef<HTMLInputElement, Props>(
	({ id, placeholder, label, name, error, control, className, ...props }, ref) => {
		return (
			<Field className="!space-y-0 !w-full">
				{label && (
					<Label htmlFor={id ?? name} className="cursor-pointer ">
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
					<Controller
						control={control}
						name={name}
						render={({ field: { onChange, onBlur, value } }) => (
							<IntlCurrencyInput
								{...props}
								// @ts-ignore
								id={id ?? name}
								currency="BRL"
								config={{
									locale: 'pt-BR',
									formats: {
										number: {
											BRL: {
												style: 'decimal',
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											},
										},
									},
								}}
								ref={ref}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
								name={name}
								placeholder={placeholder}
								autoComplete="on"
								className={cn([
									// Basic layout
									'relative block w-full appearance-none rounded-md px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
									// Typography
									'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white',
									// Border
									'border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20',
									// Background color
									'bg-transparent dark:bg-white/5',
									// Hide default focus styles
									'focus:outline-none',
									// Invalid state
									'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500',
									// Disabled state
									'data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]',
									// System icons
									'dark:[color-scheme:dark]',
								])}
							/>
						)}
					/>
				</span>

				{error && (
					<div className="pt-1 flex items-center gap-x-1.5 text-red-500">
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
InputCurrency.displayName = 'InputCurrency'
