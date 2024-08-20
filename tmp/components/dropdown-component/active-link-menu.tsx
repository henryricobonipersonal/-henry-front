import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
	href: string
	title?: string
	icon?: string
}

export function ActiveLinkMenu({ href, title, icon }: Props) {
	const path = usePathname()
	const isActive = path === href

	return (
		<Link href={href}>
			<div
				className={`
        flex items-center hover:underline transition-all
        ${isActive ? 'text-gray600' : 'text-gray500'}
      `}
			>
				{title && <p className={`${isActive && 'font-medium'}`}>{title}</p>}
				{icon && (
					<img
						className={`
              p-2 rounded-full bg-gray-200 hover:bg-gray-100 transition-all
              ${isActive ? 'w-12' : 'w-10'}
            `}
						src={`/${icon}.png`}
						alt={`Ícone de ${title}`}
					/>
				)}
			</div>
		</Link>
	)
}
