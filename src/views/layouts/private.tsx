import { useLocation, Outlet } from 'react-router-dom'
import { ChevronUpIcon } from '@heroicons/react/16/solid'

import logoDark from '@/assets/images/logo.png'

import { Avatar } from '@views/components/tw/avatar'
import { Dropdown, DropdownButton } from '@views/components/tw/dropdown'
import {
	Navbar,
	NavbarItem,
	NavbarSection,
	NavbarSpacer,
} from '@views/components/tw/navbar'
import {
	Sidebar,
	SidebarFooter,
	SidebarHeader,
	SidebarItem,
} from '@views/components/tw/sidebar'
import { SidebarLayout } from '@views/components/tw/sidebar-layout'
import { SiderbarBodyOptions } from '@views/components/tw/sidebar-body-options'
import { AccountDropdownMenu } from '@views/components/tw/account-dropdown-menu'
import { ThemeToggle } from '@views/components/theme-toggle'

export function PrivateLayout() {
	const location = useLocation()

	return (
		<html
			lang="pt-BR"
			className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
		>
			<head>
				<link rel="preconnect" href="https://rsms.me/" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</head>
			<body>
				<SidebarLayout
					navbar={
						<Navbar>
							<NavbarSpacer />
							<NavbarSection>
								<Dropdown>
									<DropdownButton as={NavbarItem}>
										<Avatar src="/users/lucas-profile.png" square />
									</DropdownButton>
									<AccountDropdownMenu anchor="bottom end" />
								</Dropdown>
							</NavbarSection>
						</Navbar>
					}
					sidebar={
						<Sidebar className=''>
							<SidebarHeader className="!flex !flex-row items-center gap-2 py-2">
								<ThemeToggle />
							</SidebarHeader>

							<SiderbarBodyOptions pathname={location.pathname} />

							<SidebarFooter className="max-lg:hidden">
								<Dropdown>
									<DropdownButton as={SidebarItem}>
										<span className="flex min-w-0 items-center gap-3">
											<Avatar
												src={logoDark}
												className="size-10"
												square
												alt="Logo dark meu contrato online"
											/>
											<span className="min-w-0">
												<span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
													Sistema Henry Ricoboni
												</span>
												<span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
													henryricoboni@gmail.com
												</span>
											</span>
											<ChevronUpIcon className="size-6" />
										</span>
									</DropdownButton>
									<AccountDropdownMenu anchor="top start" />
								</Dropdown>
							</SidebarFooter>
						</Sidebar>
					}
				>
					<Outlet />
				</SidebarLayout>
			</body>
		</html>
	)
}
