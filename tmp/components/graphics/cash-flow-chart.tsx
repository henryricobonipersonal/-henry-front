'use client'

import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import ApexChart from 'react-apexcharts'

export function CashFlowChart() {
	const options = {
		xaxis: {
			categories: [
				'Recebimentos',
				'Recebimentos (outros)',
				'Pagamentos',
				'Pagamentos (outros)',
				'Saldo',
			],
		},
		colors: ['#00ED89', '#00784674', '#E90000', '#85000070', '#28A5FF'],
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
			name: 'Recebimentos',
			data: [
				{
					x: ['Jan'],
					y: [200],
				},
				{
					x: ['Fev'],
					y: [600],
				},
				{
					x: ['Mar'],
					y: [1200],
				},
				{
					x: ['Abr'],
					y: [600],
				},
				{
					x: ['Maio'],
					y: [3000],
				},
				{
					x: ['Jun'],
					y: [400],
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
		{
			name: 'Recebimentos (outros)',
			data: [
				{
					x: ['Jan'],
					y: [80],
				},
				{
					x: ['Fev'],
					y: [40],
				},
				{
					x: ['Mar'],
					y: [60],
				},
				{
					x: ['Abr'],
					y: [200],
				},
				{
					x: ['Maio'],
					y: [100],
				},
				{
					x: ['Jun'],
					y: [20],
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
		{
			name: 'Pagamentos',
			data: [
				{
					x: ['Jan'],
					y: [400],
				},
				{
					x: ['Fev'],
					y: [400],
				},
				{
					x: ['Mar'],
					y: [1000],
				},
				{
					x: ['Abr'],
					y: [500],
				},
				{
					x: ['Maio'],
					y: [700],
				},
				{
					x: ['Jun'],
					y: [200],
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
		{
			name: 'Pagamentos (outros)',
			data: [
				{
					x: ['Jan'],
					y: [50],
				},
				{
					x: ['Fev'],
					y: [80],
				},
				{
					x: ['Mar'],
					y: [20],
				},
				{
					x: ['Abr'],
					y: [40],
				},
				{
					x: ['Maio'],
					y: [70],
				},
				{
					x: ['Jun'],
					y: [20],
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
		{
			name: 'Saldo',
			data: [
				{
					x: ['Jan'],
					y: [500],
				},
				{
					x: ['Fev'],
					y: [850],
				},
				{
					x: ['Mar'],
					y: [350],
				},
				{
					x: ['Abr'],
					y: [320],
				},
				{
					x: ['Maio'],
					y: [400],
				},
				{
					x: ['Jun'],
					y: [1000],
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
			<div className="flex items-center justify-end gap-4">
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
