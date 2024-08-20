import { List, X } from '@phosphor-icons/react/dist/ssr'
import type { Dispatch, SetStateAction } from 'react'

import { AvatarPopover } from '@/components/dropdown-component/avatar-popover'
import { NotificationPopover } from '@/components/dropdown-component/notification-popover'

interface Props {
	expanded: boolean
	setExpanded: Dispatch<SetStateAction<boolean>>
}

export function HeaderDropdown({ expanded, setExpanded }: Props) {
	return (
		<header className="h-[9vh] w-full px-5 bg-orange500 flex items-center justify-between">
			<button
				type="button"
				onClick={() => setExpanded(!expanded)}
				className="w-10 h-10 transition-all flex items-center justify-center bg-gray100 hover:bg-gray200 text-orange500 shadow rounded-full text-2xl p-2"
			>
				{expanded ? <X size={24} /> : <List size={24} />}
			</button>

			<div className="flex gap-10 items-center">
				<NotificationPopover />
				<AvatarPopover />
			</div>
		</header>
	)
}
