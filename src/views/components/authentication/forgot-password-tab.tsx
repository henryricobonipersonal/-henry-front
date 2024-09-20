import { AtSymbolIcon, IdentificationIcon } from '@heroicons/react/24/outline'
import { cn } from '@app/utils/cn'

type TabProps = 'document' | 'email'

interface Props {
	currentTab: string
	setCurrentTab: (value: TabProps) => void
	reset: () => void
}

export function ForgotPasswordTab({ currentTab, setCurrentTab, reset }: Props) {
	const tabs = [
		{
			name: 'E-mail',
			icon: AtSymbolIcon,
			tabKey: 'email',
		},
		{
			name: 'CPF',
			icon: IdentificationIcon,
			tabKey: 'document',
		},
	]

	return (
		<div className="mx-auto w-[48%]">
			<nav
				className="-mb-px flex flex-col cursor-pointer group"
				aria-label="Tabs"
			>
				<div className="flex space-x-4 justify-center">
					{tabs.map(({ name, icon: Icon, tabKey }) => (
						<button
							key={tabKey}
							type="button"
							className={cn(
								currentTab === tabKey
									? 'text-orange-primary'
									: 'text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100',
								'inline-flex items-center px-1 pb-4 text-sm font-medium',
							)}
							onClick={() => {
								reset()
								setCurrentTab(tabKey as TabProps)
							}}
							aria-current={currentTab === tabKey ? 'page' : undefined}
						>
							<Icon
								className={cn(
									currentTab === tabKey
										? 'text-orange-primary'
										: 'text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100',
									'-ml-0.5 mr-1.5 h-5 w-5',
								)}
								aria-hidden="true"
							/>
							<span>{name}</span>
						</button>
					))}
				</div>

				{/* Indicator Line */}
				<div className="w-full h-px flex pl-0.5">
					{tabs.map(({ tabKey }) => (
						<div
							key={tabKey}
							className={cn(
								'w-full h-0.5',
								currentTab === tabKey
									? 'bg-orange-primary'
									: 'bg-zinc-300 dark:bg-zinc-400 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100',
							)}
						/>
					))}
				</div>
			</nav>
		</div>
	)
}
