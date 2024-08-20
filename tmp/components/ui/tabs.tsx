'use client'

import {
	Content as RdxContent,
	List as RdxList,
	Root as RdxRoot,
	Trigger as RdxTrigger,
} from '@radix-ui/react-tabs'

import { cn } from '@/utils/cn'
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	forwardRef,
} from 'react'

const Tabs = RdxRoot

const TabsList = forwardRef<
	ElementRef<typeof RdxList>,
	ComponentPropsWithoutRef<typeof RdxList>
>(({ className, ...props }, ref) => (
	<RdxList
		ref={ref}
		className={cn(
			'inline-flex h-10 items-center justify-center rounded-md bg-muted text-muted-foreground ',
			className,
		)}
		{...props}
	/>
))
TabsList.displayName = RdxList.displayName

const TabsTrigger = forwardRef<
	ElementRef<typeof RdxTrigger>,
	ComponentPropsWithoutRef<typeof RdxTrigger>
>(({ className, ...props }, ref) => (
	<RdxTrigger
		ref={ref}
		className={cn(
			'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-gray500 data-[state=active]:bg-background data-[state=active]:text-orange500 border data-[state=active]:border-orange500 data-[state=inactive]:border-none rounded-md',
			className,
		)}
		{...props}
	/>
))
TabsTrigger.displayName = RdxTrigger.displayName

const TabsContent = forwardRef<
	ElementRef<typeof RdxContent>,
	ComponentPropsWithoutRef<typeof RdxContent>
>(({ className, ...props }, ref) => (
	<RdxContent
		ref={ref}
		className={cn(
			'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange500 focus-visible:ring-offset-2',
			className,
		)}
		{...props}
	/>
))
TabsContent.displayName = RdxContent.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
