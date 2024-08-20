import { BubbleMenu, type Editor } from '@tiptap/react'
import {
	LinkSimple,
	ListBullets,
	ListNumbers,
	TextB,
	TextItalic,
	TextUnderline,
} from '@phosphor-icons/react/dist/ssr'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

interface Props {
	toggleBold: () => void
	toggleItalic: () => void
	toggleUnderline: () => void
	toggleBulletList: () => void
	toggleOrderedList: () => void
	toggleLink: () => void
	editor: Editor
}

export function ToggleGroupBubble({
	toggleBold,
	toggleItalic,
	toggleUnderline,
	toggleBulletList,
	toggleOrderedList,
	toggleLink,
	editor,
}: Props) {
	return (
		<BubbleMenu
			pluginKey="bubbleMenuText"
			tippyOptions={{ duration: 150 }}
			editor={editor}
			shouldShow={({ from, to }) => {
				return from !== to
			}}
		>
			<ToggleGroup
				type="single"
				className="bg-white border rounded-md shadow py-2 px-4 flex gap-1"
			>
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
		</BubbleMenu>
	)
}
