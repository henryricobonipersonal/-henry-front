'use client'

import { useState } from 'react'

import ptLocale from '@fullcalendar/core/locales/pt-br'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

import { EditTypeClassModal } from '@/components/edit-type-class-modal'

export function FrequencyControlPage() {
	const [openModalEditClass, setopenModalEditClass] = useState(false)
	const [selectedEvent, setSelectedEvent] = useState(null)

	const predefinedColors = [
		'#00ED89',
		'#FFA620',
		'#28A5FF',
		'#FF8D73',
		'#A028FF',
		'#FF4E28',
	]

	const frequencyControl = [
		{
			id: '1',
			teacherId: 1,
			studentId: [1, 2],
			replaceClass: false,
			typeOfTraining: 'posterior',
			classStatus: 'Presença Confirmada (Aula Normal)',
			title: 'Aluno 1',
			dateSchedule: '2024-04-18',
			start: '2024-04-22T12:01:00',
			end: '2024-04-22T13:05:00',
		},
		{
			id: '2',
			teacherId: 1,
			studentId: [1, 2],
			replaceClass: false,
			typeOfTraining: 'posterior',
			classStatus: 'Aula Cancelada',
			title: 'Aluno 2',
			dateSchedule: '2024-04-18',
			start: '2024-04-22T12:01:00',
			end: '2024-04-22T13:05:00',
		},
		{
			id: '3',
			teacherId: 1,
			studentId: [1, 2],
			replaceClass: false,
			typeOfTraining: 'posterior',
			classStatus: 'Falta (Aula Normal)',
			title: 'Aluno 2',
			dateSchedule: '2024-04-28',
			start: '2024-04-28T12:01:00',
			end: '2024-04-28T13:05:00',
		},
	]

	function getColorForEvent(eventType: string) {
		switch (eventType) {
			case 'Presença Confirmada (Aula Normal)':
				return predefinedColors[0]
			case 'Falta (Aula Normal)':
				return predefinedColors[1]
			case 'Falta do Professor':
				return predefinedColors[2]
			case 'Presença Confirmada (Aula de reposição)':
				return predefinedColors[3]
			case 'Falta (Aula de Reposição)':
				return predefinedColors[4]
			case 'Aula Cancelada':
				return predefinedColors[5]
			default:
				return predefinedColors[0]
		}
	}

	const events = frequencyControl.map((event) => ({
		...event,
		backgroundColor: getColorForEvent(event.classStatus),
	}))

	const handleEventClick = (clickInfo: any) => {
		setopenModalEditClass(true)
		const eventId = clickInfo.event.id
		const eventTitle = clickInfo.event.title
		//@ts-ignore
		setSelectedEvent({ id: eventId, title: eventTitle })
		// alert(selectedEvent)
	}

	return (
		<div className="mt-6">
			<div className="grid grid-cols-3 gap-5 mb-12">
				<div className="flex gap-2 items-center text-sm text-zinc500">
					<div className="bg-[#00ED89] min-w-6 h-6 rounded-md" />
					Presença Confirmada (Aula Normal)
				</div>
				<div className="flex gap-2 items-center text-sm text-zinc500">
					<div className="bg-[#FFA620] min-w-6 h-6 rounded-md" />
					Falta (Aula Normal)
				</div>
				<div className="flex gap-2 items-center text-sm text-zinc500">
					<div className="bg-[#28A5FF] min-w-6 h-6 rounded-md" />
					Falta do Professor
				</div>
				<div className="flex gap-2 items-center text-sm text-zinc500">
					<div className="bg-[#FF8D73] min-w-6 h-6 rounded-md" />
					Presença Confirmada (Aula de reposição)
				</div>
				<div className="flex gap-2 items-center text-sm text-zinc500">
					<div className="bg-[#A028FF] min-w-6 h-6 rounded-md" />
					Falta (Aula de Reposição)
				</div>
				<div className="flex gap-2 items-center text-sm text-zinc500">
					<div className="bg-[#FF4E28] min-w-6 h-6 rounded-md" />
					Aula Cancelada
				</div>
			</div>

			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
				initialView="dayGridMonth"
				weekends={true}
				events={events}
				locale={ptLocale}
				eventClick={handleEventClick}
				eventDisplay="block"
			/>

			<EditTypeClassModal
				open={openModalEditClass}
				setOpen={setopenModalEditClass}
			/>
		</div>
	)
}
