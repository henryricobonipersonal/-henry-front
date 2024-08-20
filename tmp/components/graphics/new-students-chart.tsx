import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import ApexChart from 'react-apexcharts'

interface Props {
	hide?: boolean
}

export function NewStudentsChart({ hide = false }: Props) {
	const options = {
		xaxis: {
			categories: ['Alunos'],
		},
		colors: ['#A028FF'],
		dataLabels: {
			enabled: true,
		},
		grid: {
			borderColor: '#e7e7e7',
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5,
			},
		},
		stroke: {
			curve: 'smooth',
		},
	}

	const series = [
		{
			name: 'Alunos',
			data: [
				{
					x: ['Jan'],
					y: [5],
				},
				{
					x: ['Fev'],
					y: [20],
				},
				{
					x: ['Mar'],
					y: [15],
				},
				{
					x: ['Abr'],
					y: [30],
				},
				{
					x: ['Maio'],
					y: [15],
				},
				{
					x: ['Jun'],
					y: [8],
				},
				{
					x: ['Jul'],
					y: [0],
				},
				{
					x: ['Ago'],
					y: [0],
				},
				{
					x: ['Set'],
					y: [0],
				},
				{
					x: ['Out'],
					y: [0],
				},
				{
					x: ['Nov'],
					y: [0],
				},
				{
					x: ['Dez'],
					y: [0],
				},
			],
		},
	]

	return (
		<div>
			<div
				className={`${hide ? 'hidden' : 'flex'} flex items-center justify-end gap-4`}
			>
				<button
					type="button"
					className="border rounded-md p-2 cursor-pointer hover:opacity-50"
				>
					<CaretLeft size={20} />
				</button>
				<p className="font-medium text-gray900">2024</p>
				<button
					type="button"
					className="border rounded-md p-2 cursor-pointer hover:opacity-50"
				>
					<CaretRight size={20} />
				</button>
			</div>
			<ApexChart options={options} series={series} type="line" height={400} />
		</div>
	)
}
