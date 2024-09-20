import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	ArrowRightStartOnRectangleIcon,
	UserCircleIcon,
} from '@heroicons/react/16/solid'

import {
	DropdownDivider,
	DropdownItem,
	DropdownLabel,
	DropdownMenu,
} from '@views/components/tw/dropdown'

interface Props {
	anchor: 'top start' | 'bottom end'
}

export function AccountDropdownMenu({ anchor }: Props) {
	const parentRef = useRef<HTMLDivElement | null>(null)
	const [parentWidth, setParentWidth] = useState<number>(0)

	useEffect(() => {
		if (parentRef.current) {
			setParentWidth(parentRef.current.offsetWidth)
		}
	}, [])

	return (
		<div ref={parentRef}>
			<DropdownMenu
				style={{ width: `${parentWidth}px` }}
				anchor={anchor}
			>
				<DropdownItem>
					<UserCircleIcon />
					<Link to="/profile">
						<DropdownLabel>Minha conta</DropdownLabel>
					</Link>
				</DropdownItem>
				<DropdownDivider />
				<DropdownItem href="#">
					<ArrowRightStartOnRectangleIcon />
					<DropdownLabel>Sair</DropdownLabel>
				</DropdownItem>
			</DropdownMenu>
		</div>
	)
}
