import { Outlet } from 'react-router-dom'

export function AuthenticationLayout() {
	return (
		<div className="min-h-screen">
			<div className="container relative min-h-screen flex-col dark:bg-zinc-900 items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				<div className="relative hidden h-full flex-col p-10 dark:bg-muted text-white dark:border-r lg:flex">
					<img
						src="/hero-01.jpg"
						alt="Cover"
						className="absolute inset-0 z-0 w-full h-full object-cover"
					/>
				</div>
				<Outlet />
			</div>
		</div>
	)
}
