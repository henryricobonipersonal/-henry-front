interface Props {
	text: string
}

export function AuthDivider({ text }: Props) {
	// select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white
	return (
		<div className="relative" tabIndex={-1}>
			<div className="absolute inset-0 flex items-center" tabIndex={-1}>
				<span className="w-full border-t" />
			</div>
			<div
				className="relative flex justify-center text-xs uppercase"
				tabIndex={-1}
			>
				<span className="bg-white dark:bg-zinc-900 text-zinc-950 px-2 dark:text-muted-foreground">
					{text}
				</span>
			</div>
		</div>
	)
}
