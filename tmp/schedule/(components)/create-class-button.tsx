'use client'

import { Button } from '@/components/ui/button'
import { Fragment, useState } from 'react'

import { Drawer, DrawerContent } from '@/components/ui/drawer'

import { EditClassForm } from '@/app/(dashboard)/schedule/(components)/edit-class-form'

export function CreateClassButton() {
	const [isDrawerOpen, setIsDrawerOpem] = useState(false)

	return (
		<Fragment>
			<Button onClick={() => setIsDrawerOpem(true)}>Nova Aula</Button>

			<Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpem}>
				<DrawerContent className="inset-x-0">
					<div className="bg-white w-full h-full overflow-auto rounded-md">
						<div className="flex justify-between items-center border-b-[1px] border-gray200 pt-12 pb-8 px-12 sm:px-5">
							<div>
								<h1 className="text-2xl font-medium">Editar Aula</h1>
							</div>
						</div>
						<div className="pt-7 pb-12 px-12 sm:px-5">
							<EditClassForm />
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		</Fragment>
	)
}
