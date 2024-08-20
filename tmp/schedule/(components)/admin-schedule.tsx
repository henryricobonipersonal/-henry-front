'use client'

import { useState } from 'react'

import ptLocale from '@fullcalendar/core/locales/pt-br'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

export function AdminSchedule() {
	// Estado para armazenar os dados do evento selecionado
	const [selectedEvent, setSelectedEvent] = useState(null)

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
			title: '(Treino Posterior) Aluno 1; Aluno 2 - Professor 1',
			dateSchedule: '2024-04-18T12:01:00',
			startDate: '2024-04-22T12:01:00',
			endDate: '2024-04-22T13:05:00',
		},
	]

	// Função para lidar com o clique em um evento
	const handleEventClick = (clickInfo: any) => {
		// Abre o modal e armazena os dados do evento selecionado
		// Obtém o ID e o título do evento selecionado
		const eventId = clickInfo.event.id
		const eventTitle = clickInfo.event.titleSchedule
		//@ts-ignore
		setSelectedEvent({ id: eventId, title: eventTitle })
		// Exibe um alerta com o ID e o título do evento selecionado
		// alert(`ID do evento: ${eventId}\nTítulo do evento: ${eventTitle}`);
	}

	return (
		<FullCalendar
			plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
			initialView="listWeek"
			weekends={true}
			events={schelude}
			locale={ptLocale}
			eventClick={handleEventClick}
			eventBackgroundColor={getRandomColor()}
			headerToolbar={{
				right: 'prev,next today',
				center: 'title',
				left: 'dayGridMonth,timeGridWeek,listWeek',
			}}
		/>
	)
}
