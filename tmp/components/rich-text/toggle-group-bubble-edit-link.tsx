import { BubbleMenu, type Editor } from '@tiptap/react'
import { PencilSimpleLine, Trash } from '@phosphor-icons/react/dist/ssr'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

interface Props {
	showDialog: () => void
	removeLink: () => void
	editor: Editor
}

export function ToggleGroupBubbleEditLink({
	showDialog,
	editor,
	removeLink,
}: Props) {
	return (
		<BubbleMenu
			pluginKey="bubbleMenuLink"
			tippyOptions={{ duration: 150 }}
			editor={editor}
			shouldShow={({ editor, from, to }) => {
				return from === to && editor.isActive('link')
			}}
		>
			<ToggleGroup
				type="single"
				className="bg-white border rounded-md shadow py-2 px-4 flex gap-2"
			>
				<ToggleGroupItem type="button" value="edit" onClick={showDialog}>
					<PencilSimpleLine size={20} />
				</ToggleGroupItem>
				<ToggleGroupItem type="button" value="remove" onClick={removeLink}>
					<Trash size={20} />
				</ToggleGroupItem>
			</ToggleGroup>
		</BubbleMenu>
	)
}
