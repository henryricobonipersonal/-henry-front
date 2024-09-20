import { useState } from 'react'

import { CalendarDaysIcon } from '@/assets/icons/calendar-days'
import { PresentationChartLineIcon } from '@/assets/icons/presentation-chart-line'

import { useAuth } from '@app/hooks/use-auth'

import {
	SidebarBody,
	SidebarItem,
	SidebarLabel,
	SidebarSection,
	SidebarSpacer,
} from '@views/components/tw/sidebar'
import { SidebarHeader } from '@views/components/tw/sidebar-header'
import { RocketIcon } from '@/assets/icons/rocket'
import { cn } from '@app/utils/cn'
import { UsersIcon } from '@/assets/icons/users'
import { FireIcon } from '@/assets/icons/fire'
import { AcademicCapIcon } from '@/assets/icons/academic-cap'
import { BankNotesIcon } from '@/assets/icons/bank-notes'
import { ClipboardIcon } from '@/assets/icons/clipboard'
import { OpenBookIcon } from '@/assets/icons/open-book'
import { ChartBarIcon } from '@/assets/icons/chart-bar'

interface Props {
	pathname: string
}

export function SiderbarBodyOptions({ pathname }: Props) {
	const { role } = useAuth()
	const [isOverviewOpen, setIsOverviewOpen] = useState(true)

	const currentInitialPage = pathname === '/'
	const activedInitialPage = currentInitialPage && '!text-orange-primary'

	const currentSchedule = pathname.startsWith('/schedule')
	const activedSchedule = currentSchedule && '!text-orange-primary'

	const currentStudentGoals = pathname.startsWith('/student-goals')
	const activedStudentGoals = currentStudentGoals && '!text-orange-primary'

	const currentStudents = pathname.startsWith('/students') || pathname.startsWith('/create-student')
	const activedStudents = currentStudents && '!text-orange-primary'

	const currentFrequencyControl = pathname.startsWith('/frequency-control')
	const activedFrequencyControl = currentFrequencyControl && '!text-orange-primary'

	const currentTeachers = pathname.startsWith('/teachers') || pathname.startsWith('/create-teacher')
	const activedTeachers = currentTeachers && '!text-orange-primary'

	const currentCashFlow = pathname.startsWith('/cash-flow')
	const activedCashFlow = currentCashFlow && '!text-orange-primary'

	const currentAnnualReport = pathname.startsWith('/annual-report')
	const activedAnnualReport = currentAnnualReport && '!text-orange-primary'

	const currentStudentReport = pathname.startsWith('/student-report')
	const activedStudentReport = currentStudentReport && '!text-orange-primary'

	const currentTeacherReport = pathname.startsWith('/teacher-report')
	const activedTeacherReport = currentTeacherReport && '!text-orange-primary'

	return (
		<SidebarBody className="scrollbar-transparent overflow-y-scroll">
			<SidebarHeader title="Visão geral" isOpen={isOverviewOpen} setIsOpen={setIsOverviewOpen} />
			{isOverviewOpen && (
				<SidebarSection>
					<SidebarItem to="/" current={currentInitialPage}>
						<PresentationChartLineIcon className={cn('size-5', activedInitialPage)} />
						<SidebarLabel className={cn(activedInitialPage)}>Página inicial</SidebarLabel>
					</SidebarItem>

					<SidebarItem to="/schedule" current={currentSchedule}>
						<CalendarDaysIcon className={cn('size-5', activedSchedule)} />
						<SidebarLabel className={cn(activedSchedule)}>Agenda</SidebarLabel>
					</SidebarItem>

					{role === 'student' && (
						<SidebarItem to="/student-goals" current={currentStudentGoals}>
							<RocketIcon className={cn('size-5', activedStudentGoals)} />
							<SidebarLabel className={cn(activedStudentGoals)}>Minhas metas</SidebarLabel>
						</SidebarItem>
					)}

					{(role === 'admin' || role === 'teacher') && (
						<SidebarItem to="/students" current={currentStudents}>
							<UsersIcon className={cn('size-5', activedStudents)} />
							<SidebarLabel className={cn(activedStudents)}>Alunos</SidebarLabel>
						</SidebarItem>
					)}

					{(role === 'admin' || role === 'teacher') && (
						<SidebarItem to="/frequency-control" current={currentFrequencyControl}>
							<FireIcon className={cn('size-5', activedFrequencyControl)} />
							<SidebarLabel className={cn(activedFrequencyControl)}>
								Controle de frequência
							</SidebarLabel>
						</SidebarItem>
					)}

					{role === 'admin' && (
						<SidebarItem to="/teachers" current={currentTeachers}>
							<AcademicCapIcon className={cn('size-5', activedTeachers)} />
							<SidebarLabel className={cn(activedTeachers)}>Professores</SidebarLabel>
						</SidebarItem>
					)}

					{role === 'admin' && (
						<SidebarItem to="/cash-flow" current={currentCashFlow}>
							<BankNotesIcon className={cn('size-5', activedCashFlow)} />
							<SidebarLabel className={cn(activedCashFlow)}>Fluxo de caixa</SidebarLabel>
						</SidebarItem>
					)}

					{role === 'admin' && (
						<SidebarItem to="/annual-report" current={currentAnnualReport}>
							<ChartBarIcon className={cn('size-5', activedAnnualReport)} />
							<SidebarLabel className={cn(activedAnnualReport)}>Relatório anual</SidebarLabel>
						</SidebarItem>
					)}

					{role === 'admin' && (
						<SidebarItem to="/student-report" current={currentStudentReport}>
							<OpenBookIcon className={cn('size-5', activedStudentReport)} />
							<SidebarLabel className={cn(activedStudentReport)}>Relatório dos alunos</SidebarLabel>
						</SidebarItem>
					)}

					{role === 'admin' && (
						<SidebarItem to="/teacher-report" current={currentTeacherReport}>
							<ClipboardIcon className={cn('size-5', activedTeacherReport)} />
							<SidebarLabel className={cn(activedTeacherReport)}>
								Relatório dos professores
							</SidebarLabel>
						</SidebarItem>
					)}
				</SidebarSection>
			)}

			<SidebarSpacer />
		</SidebarBody>
	)
}
