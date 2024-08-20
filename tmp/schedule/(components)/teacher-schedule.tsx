'use client'

import ptLocale from '@fullcalendar/core/locales/pt-br'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

export function TeacherSchedule() {
	const predefinedColors = [
		'#7CB8FF',
		'#66F9E7',
		'#8E7CFF',
		'#FF748D',
		'#FFCA40',
		'#6DDF5B',
		'#FF5F5F',
		'#FF9B7C',
		'#F9AC66',
	]

	function getRandomColor() {
		return predefinedColors[Math.floor(Math.random() * predefinedColors.length)]
	}

	const schelude = [
		{
			id: '1',
			teacherId: 1,
			studentId: [1, 2],
			replaceClass: false,
			typeOfTraining: 'posterior',
			title: '(Treino Posterior) Aluno 1; Aluno 2',
			dateSchedule: '2024-04-29T12:01:00',
			start: '2024-05-29T12:01:00',
			end: '2024-05-29T13:05:00',
		},
	]

	return (
		<FullCalendar
			plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
			initialView="listWeek"
			weekends={true}
			events={schelude}
			locale={ptLocale}
			eventBackgroundColor={getRandomColor()}
			headerToolbar={{
				right: 'prev,next today',
				center: 'title',
				left: 'dayGridMonth,timeGridWeek,listWeek',
			}}
		/>
	)
}
