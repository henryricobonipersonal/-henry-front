import { forwardRef } from 'react'
import ReactInputMask from 'react-input-mask'
import { Field, Label } from '@views/components/tw/fieldset'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { cn } from '@app/utils/cn'

export interface InputMaskComponentProps
		extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
		label?: string
		error?: string
		mask: string
		className?: string
		name: string
	}

export const InputMask = forwardRef<HTMLInputElement, InputMaskComponentProps>(
	function InputMaskComponent({ label, error, mask, className, name, ...props }, ref) {
		return (
			<Field className="!space-y-0">
				{label && (
					<Label htmlFor={props.id ?? name} className="cursor-pointer">
						{label}
					</Label>
				)}

				<span
					data-slot="control"
					className={cn([
						className,
						'relative block w-full',
						'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow',
						'dark:before:hidden',
						'after:pointer-events-none after:absolute after:inset-0 after:rounded-md after:ring-inset after:ring-transparent sm:after:focus-within:ring-1 sm:after:focus-within:ring-orange-primary',
						'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none',
						'before:has-[[data-invalid]]:shadow-red-500/10',
					])}
				>
					<ReactInputMask
						mask={mask}
						maskChar={'_'}
						{...props}
						name={name}
						value={props.value} // Assegure-se de que o valor vem do react-hook-form
						onChange={props.onChange} // Assegure-se de que o onChange está vindo do register
						// @ts-ignore
						ref={ref}
						className={cn([
							'relative block w-full appearance-none rounded-md px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
							'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white',
							'border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20',
							'bg-transparent dark:bg-white/5',
							'focus:outline-none',
							'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500',
							'data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]',
							'dark:[color-scheme:dark]',
						])}
					/>
				</span>

				{error && (
					<div className="mb-2 mt-2 flex items-center gap-1.5 text-red-600">
						<XCircleIcon className="h-5" />
						<span className="text-xs">{error}</span>
					</div>
				)}
			</Field>
		)
	},
)

InputMask.displayName = 'InputMask'
