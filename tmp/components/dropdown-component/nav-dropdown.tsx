import { CalendarDots, RocketLaunch } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

import { ActiveLinkMenu } from '@/components/dropdown-component/active-link-menu'
import { ItemAccordion } from '@/components/dropdown-component/item-accordion'
import { Accordion } from '@/components/ui/accordion'
import { useAuth } from '@/contexts/use-auth'
import { cn } from '@/utils/cn'

interface Props {
	expanded: boolean
}

export function NavDropdown({ expanded }: Props) {
	const { userType } = useAuth()

	return (
		<aside
			className={cn(
				'overflow-hidden transition-all shadow z-10',
				expanded ? 'w-[280px] sm:w-full' : 'w-[0px]',
			)}
		>
			<nav
				className={cn(
					'h-full shadow-slate-300 border-r-[1px] border-gray200',
					expanded ? 'px-5' : 'px-0',
				)}
			>
				<div className="h-full pt-4 flex flex-col">
					{expanded && (
						<>
							<Link href="/home" className="w-full flex justify-center">
								<Image
									src="/logo.png"
									height={144}
									width={144}
									alt="Logo"
									className={cn('w-36', !expanded && 'hidden')}
								/>
							</Link>
							<h3 className="text-zinc-400 font-semibold text-xs mb-4">MENU</h3>
							{userType === 'admin' ? (
								<>
									<Link
										href="/schedule"
										className="hover:bg-gray100 px-1 rounded-md transition-colors text-sm py-4 text-gray600 font-medium flex gap-3 items-center"
									>
										<CalendarDots size={24} />
										Agenda
									</Link>
									<Accordion type="single" collapsible>
										<ItemAccordion
											title="Alunos"
											icon="Users"
											content={
												<>
													<ActiveLinkMenu
														href="/students"
														title="Lista de Alunos"
													/>
													<ActiveLinkMenu
														href="/newStudent"
														title="Novo Aluno"
													/>
													<ActiveLinkMenu
														href="/frequencyControl"
														title="Controle de Frequência"
													/>
												</>
											}
										/>
										<ItemAccordion
											title="Professores"
											icon="UserCircle"
											content={
												<>
													<ActiveLinkMenu
														href="/teachers"
														title="Lista de Professores"
													/>
													<ActiveLinkMenu
														href="/newTeacher"
														title="Novo Professor"
													/>
												</>
											}
										/>
										<ItemAccordion
											title="Financeiro"
											icon="CurrencyDollar"
											content={
												<>
													<ActiveLinkMenu
														href="/cashFlow"
														title="Fluxo de Caixa"
													/>
												</>
											}
										/>
										<ItemAccordion
											title="Relatórios"
											icon="ChartLine"
											content={
												<>
													<ActiveLinkMenu
														href="/reportByMonth"
														title="Relatórios do Mês"
													/>
													<ActiveLinkMenu
														href="/studentReport"
														title="Relatórios do Aluno"
													/>
													<ActiveLinkMenu
														href="/teacherReport"
														title="Relatórios do Professor"
													/>
												</>
											}
										/>
									</Accordion>
								</>
							) : userType === 'teacher' ? (
								<>
									<Link
										href="/schedule"
										className="hover:bg-gray100 px-1 rounded-md transition-colors text-sm py-4 text-gray600 font-medium flex gap-3 items-center"
									>
										<CalendarDots size={24} />
										Minha Agenda
									</Link>
									<Accordion type="single" collapsible>
										<ItemAccordion
											title="Alunos"
											icon="Users"
											content={
												<>
													<ActiveLinkMenu
														href="/students"
														title="Lista de Alunos"
													/>
													<ActiveLinkMenu
														href="/frequencyControl"
														title="Controle de Frequência"
													/>
												</>
											}
										/>
									</Accordion>
								</>
							) : (
								<>
									<Link
										href="/schedule"
										className="hover:bg-gray100 px-1 rounded-md transition-colors text-sm py-4 text-gray600 font-medium flex gap-3 items-center"
									>
										<CalendarDots size={24} />
										Minha Agenda
									</Link>
									<Link
										href="/student-goals"
										className="hover:bg-gray100 px-1 rounded-md transition-colors text-sm py-4 text-gray600 font-medium flex gap-3 items-center"
									>
										<RocketLaunch size={24} />
										Minhas Metas
									</Link>
								</>
							)}
						</>
					)}
					<span
						className={cn(
							'overflow-hidden duration-1000',
							expanded ? 'w-[0px]' : 'w-0',
						)}
					/>
				</div>
			</nav>
		</aside>
	)
}
