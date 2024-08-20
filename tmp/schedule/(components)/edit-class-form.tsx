'use client'

import { Button } from '@/components/ui/button'

import { Select } from '@/components/select'
import { Calendar } from '@/components/ui/calendar'
import { SelectItem } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/utils/cn'
import {
	CalendarDots,
	CheckCircle,
	Plus,
	User,
	UserCircle,
	X,
} from '@phosphor-icons/react/dist/ssr'
import { SaveAll } from 'lucide-react'
import { useState } from 'react'

const item = [
	{
		id: 1,
		item: 'Professor 1',
		price: 80,
	},
	{
		id: 2,
		item: 'Professor 2',
		price: 120,
	},
	{
		id: 3,
		item: 'Professor 3',
		price: 120,
	},
	{
		id: 4,
		item: 'Professor 4',
		price: 120,
	},
	{
		id: 5,
		item: 'Professor 5',
		price: 120,
	},
]

const item2 = [
	{
		id: 1,
		hours: '08:00 - 09:00',
	},
	{
		id: 2,
		hours: '09:00 - 10:00',
	},
	{
		id: 3,
		hours: '10:00 - 11:00',
	},
	{
		id: 4,
		hours: '11:00 - 12:00',
	},
	{
		id: 5,
		hours: '12:00 - 13:00',
	},
]

export function EditClassForm() {
	const [isSelected, setIsSelected] = useState(false)
	const [itemSeleted, setItemSeleted] = useState<any>('')

	const [isSelectedDate, setIsSelectedDate] = useState(false)
	const [itemSeletedDate, setItemSeletedDate] = useState<any>('')

	const [date, setDate] = useState<Date | undefined>(new Date())

	function handleSelect(i: string) {
		setIsSelected(false)

		if (itemSeleted === i) {
			setItemSeleted(null)
		} else {
			setItemSeleted(i)
		}
	}

	function handleSelectDate(i: string) {
		setIsSelected(false)

		if (itemSeleted === i) {
			setItemSeleted(null)
		} else {
			setItemSeleted(i)
		}
	}

	return (
		<form className="relative bg-red-20 w-full">
			<Button
				type="submit"
				className="absolute top-[-120px] right-0 max-w-[168px]"
			>
				<span>
					<SaveAll className="size-5 text-white z-50 mr-1.5" strokeWidth={2} />
				</span>
				Salvar
			</Button>
			<div className="flex gap-14 border-b-[1px] pb-8">
				<div className="flex items-center space-x-2">
					<Switch id="replace-class" />
					<label htmlFor="replace-class" className="text-sm">
						Aula de reposição
					</label>
				</div>
				<div className="w-1/4">
					<Select placeholder="Tipo de treino" label="Treinos">
						<SelectItem value="posterior">Posterior</SelectItem>
						<SelectItem value="superior">Superior</SelectItem>
						<SelectItem value="pernas">Pernas</SelectItem>
					</Select>
				</div>
			</div>
			<div className="my-10">
				<div className="flex gap-3 items-center mb-6">
					<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
						<UserCircle />
					</div>
					<p className="text-gray900 font-semibold">Selecionar Professor</p>
				</div>
				<div className="shadow p-5 rounded-sm">
					<div className="w-[100%] grid grid-cols-4 gap-4">
						{item.map((i) => {
							return (
								<div
									key={i.id}
									className={cn(
										'relative w-full flex border-[2px] hover:border-orange500/70 transition-all rounded-md p-5',
										itemSeleted === i.item
											? 'border-orange500'
											: 'border-gray200',
									)}
								>
									<input
										type="radio"
										name="item"
										id="radio-select"
										value={i.item}
										onChange={(e) => setItemSeleted(e.target.value)}
										onClick={() => handleSelect(i.item)}
									/>

									<div className="flex flex-col gap-2">
										<p className="text-gray900 text-base font-semibold">
											{i.item}
										</p>
										<p className="bg-orange500 p-2 rounded-sm text-white font-semibold text-sm">
											R$ {i.price},00 /hora aula
										</p>
									</div>

									<div className="absolute top-[-8px] right-[-8px] text-primary text-orange500">
										{itemSeleted === i.item && (
											<CheckCircle size={26} weight="fill" />
										)}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<div className="my-10">
				<div className="flex gap-3 items-center mb-6">
					<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
						<CalendarDots />
					</div>
					<p className="text-gray900 font-semibold">Data e Hora</p>
				</div>
				<div className="p-5 flex gap-5 sm:flex-col md:flex-col">
					<div className="shadow w-1/4 sm:w-full md:w-full p-5 rounded-sm">
						<Calendar
							mode="single"
							selected={date}
							onSelect={setDate}
							className="rounded-md border self-center"
						/>
					</div>
					<div className="shadow w-3/4 sm:w-full md:w-full p-5 rounded-sm">
						<p className="text-gray900 font-semibold text-sm mb-4">
							Horários Disponíveis
						</p>
						<div className="flex gap-5">
							{item2.map((i) => {
								return (
									<div
										key={i.id}
										className={cn(
											'relative w-full flex flex-row items-center justify-center border-[2px] hover:border-orange500/70 transition-all',
											itemSeletedDate === i.hours
												? 'border-orange500'
												: 'border-gray200 rounded-md p-3',
										)}
									>
										<input
											type="radio"
											name="item"
											id="radio-select"
											value={i.hours}
											onChange={(e) => setItemSeletedDate(e.target.value)}
											onClick={() => handleSelectDate(i.hours)}
										/>
										<div className="flex gap-2">
											<p className="text-gray900 text-sm font-medium">
												{i.hours}
											</p>
										</div>

										<div className="absolute top-[-8px] right-[-8px] text-primary text-orange500">
											{itemSeletedDate === i.hours && (
												<CheckCircle size={26} weight="fill" />
											)}
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="my-10 ">
				<div className="flex gap-3 items-center mb-6">
					<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
						<User />
					</div>
					<p className="text-gray900 font-semibold">Alunos</p>
				</div>
				<div className="flex flex-col gap-5 shadow p-5 rounded-sm">
					<div className="flex gap-5">
						<div className="w-1/4">
							<Select placeholder="Selecionar Aluno(s)" label="Alunos">
								<SelectItem value="Aluno 1">Aluno 1</SelectItem>
								<SelectItem value="Aluno 2">Aluno 2</SelectItem>
								<SelectItem value="Aluno 3">Aluno 3</SelectItem>
							</Select>
						</div>
						<button
							type="button"
							className="text-orange500 hover:text-orange500/70 hover:bg-gray200 bg-gray100 p-2 rounded-full"
						>
							<Plus size={28} />
						</button>
					</div>
					<div className="w-full min-h-10 border-[1px] rounded-sm shadow border-gray200 p-5">
						<button
							type="button"
							className="text-gray500 w-fit flex gap-3 items-center bg-gray200 p-2 rounded-md"
						>
							Aluno 1
							<X />
						</button>
					</div>
				</div>
			</div>
		</form>
	)
}
