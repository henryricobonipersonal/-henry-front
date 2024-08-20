import { type FormEvent, useCallback, useState } from 'react'
import Bold from '@tiptap/extension-bold'
import BulletList from '@tiptap/extension-bullet-list'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { AddLinkDialog } from '@/components/rich-text/add-link-dialog'
import { ToggleGroupArea } from '@/components/rich-text/toggle-group-area'
import { ToggleGroupBubble } from '@/components/rich-text/toggle-group-bubble'
import { ToggleGroupBubbleEditLink } from '@/components/rich-text/toggle-group-bubble-edit-link'

export interface Props {
	description: string
	onChange: (value: string) => void
}

export function RichText({ description, onChange }: Props) {
	const [url, setUrl] = useState('')
	const [showLinkDialog, setShowLinkDialog] = useState(false)
	const [activeBubbleLink, setActiveBubbleLink] = useState(false)

	const editor = useEditor({
		extensions: [
			StarterKit,
			Italic,
			Bold,
			Underline,
			ListItem,
			BulletList,
			OrderedList,
			Link.configure({
				HTMLAttributes: {
					class:
						'text-orange500 cursor-pointer underline font-medium hover:text-orange500/80 transition-all',
				},
				validate: (href) => /^https?:\/\//.test(href),
			}),
		],
		editorProps: {
			attributes: {
				class:
					'shadow min-h-[300px] sm:min-h-[180px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-none disabled:cursor-not-allowed disabled:opacity-50',
			},
		},
		content: description,
		onUpdate({ editor }) {
			onChange(editor.getHTML())
		},
	})

	const toggleItalic = useCallback(() => {
		if (editor) {
			editor.chain().focus().toggleItalic().run()
		}
	}, [editor])

	const toggleBold = useCallback(() => {
		if (editor) {
			editor.chain().focus().toggleBold().run()
		}
	}, [editor])

	const toggleUnderline = useCallback(() => {
		if (editor) {
			editor.chain().focus().toggleUnderline().run()
		}
	}, [editor])

	const toggleOrderedList = useCallback(() => {
		if (editor) {
			editor.chain().focus().toggleOrderedList().run()
		}
	}, [editor])

	const toggleBulletList = useCallback(() => {
		if (editor) {
			editor.chain().focus().toggleBulletList().run()
		}
	}, [editor])

	const closeBubbleLink = useCallback(() => {
		setActiveBubbleLink(false)
		setUrl('')
	}, [])

	const removeLink = useCallback(() => {
		editor?.chain().focus().extendMarkRange('link').unsetLink().run()
		closeBubbleLink()
	}, [editor, closeBubbleLink])

	function handleLink(data: FormEvent) {
		if (!editor) return

		if (url === '') {
			editor.chain().focus().extendMarkRange('link').unsetLink().run()
			return
		}

		editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()

		setShowLinkDialog(false)
	}

	function toggleLink() {
		setShowLinkDialog(true)
	}

	function showDialog() {
		setShowLinkDialog(true)
	}

	return (
		<div>
			{editor && (
				<ToggleGroupBubbleEditLink
					editor={editor}
					removeLink={removeLink}
					showDialog={showDialog}
				/>
			)}
			<AddLinkDialog
				handleLink={handleLink}
				showLinkDialog={showLinkDialog}
				setShowLinkDialog={setShowLinkDialog}
				url={url}
				setUrl={setUrl}
			/>
			{editor && (
				<ToggleGroupBubble
					toggleBold={toggleBold}
					toggleItalic={toggleItalic}
					toggleUnderline={toggleUnderline}
					toggleBulletList={toggleBulletList}
					toggleOrderedList={toggleOrderedList}
					toggleLink={toggleLink}
					editor={editor}
				/>
			)}
			<ToggleGroupArea
				toggleBold={toggleBold}
				toggleItalic={toggleItalic}
				toggleUnderline={toggleUnderline}
				toggleBulletList={toggleBulletList}
				toggleOrderedList={toggleOrderedList}
				toggleLink={toggleLink}
			/>
			{editor && <EditorContent editor={editor} />}
		</div>
	)
}
