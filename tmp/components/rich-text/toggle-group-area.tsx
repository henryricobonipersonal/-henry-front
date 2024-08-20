import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

import {
	LinkSimple,
	ListBullets,
	ListNumbers,
	TextB,
	TextItalic,
	TextUnderline,
} from '@phosphor-icons/react/dist/ssr'

interface Props {
	toggleBold: () => void
	toggleItalic: () => void
	toggleUnderline: () => void
	toggleBulletList: () => void
	toggleOrderedList: () => void
	toggleLink: () => void
}

export function ToggleGroupArea({
	toggleBold,
	toggleItalic,
	toggleUnderline,
	toggleBulletList,
	toggleOrderedList,
	toggleLink,
}: Props) {
	return (
		<ToggleGroup type="single">
			<ToggleGroupItem type="button" value="bold" onClick={toggleBold}>
				<TextB weight="bold" size={20} />
			</ToggleGroupItem>
			<ToggleGroupItem type="button" value="italic" onClick={toggleItalic}>
				<TextItalic size={20} />
			</ToggleGroupItem>
			<ToggleGroupItem
				type="button"
				value="underline"
				onClick={toggleUnderline}
			>
				<TextUnderline size={20} />
			</ToggleGroupItem>
			<ToggleGroupItem
				type="button"
				value="list-bullets"
				onClick={toggleBulletList}
			>
				<ListBullets size={20} />
			</ToggleGroupItem>
			<ToggleGroupItem
				type="button"
				value="list-numbers"
				onClick={toggleOrderedList}
			>
				<ListNumbers size={20} />
			</ToggleGroupItem>
			<ToggleGroupItem type="button" value="link" onClick={toggleLink}>
				<LinkSimple size={20} />
			</ToggleGroupItem>
		</ToggleGroup>
	)
}
