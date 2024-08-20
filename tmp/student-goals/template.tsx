'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export default function Template({ children }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeIn', duration: 0.4 }}
		>
			{children}
		</motion.div>
	)
}
