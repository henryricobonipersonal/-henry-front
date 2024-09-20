import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import {
	Link as RouterLink,
	type LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { DataInteractive } from '@headlessui/react'

interface Props extends RouterLinkProps, ComponentPropsWithoutRef<'a'> {}

export const Link = forwardRef<HTMLAnchorElement, Props>(
	function Link(props, ref) {
		return (
			<DataInteractive>
				<RouterLink {...props} ref={ref} />
			</DataInteractive>
		)
	},
)
