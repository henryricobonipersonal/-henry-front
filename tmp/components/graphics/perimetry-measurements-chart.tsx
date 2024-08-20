import ApexChart from 'react-apexcharts'

export function PerimetryMeasurementsChart() {
	const options = {
		xaxis: {
			categories: ['Ombro', 'Cintura', 'Quadril', 'Tórax', 'Abdome'],
		},
		yaxis: {
			min: 0,
			max: 100,
		},
		colors: ['#28A5FF', '#00ED89'],
		dataLabels: {
			enabled: true,
		},
		plotOptions: {
			bar: {
				horizontal: true,
			},
		},
	}

	const series = [
		{
			name: 'Anterior',
			data: [
				{
					x: ['Ombro'],
					y: [41],
				},
				{
					x: ['Cintura'],
					y: [40],
				},
				{
					x: ['Quadril'],
					y: [20],
				},
				{
					x: ['Tórax'],
					y: [20],
				},
				{
					x: ['Andome'],
					y: [20],
				},
			],
		},
		{
			name: 'Atual',
			data: [
				{
					x: ['Ombro'],
					y: [81],
				},
				{
					x: ['Cintura'],
					y: [80],
				},
				{
					x: ['Quadril'],
					y: [40],
				},
				{
					x: ['Tórax'],
					y: [40],
				},
				{
					x: ['Andome'],
					y: [31],
				},
			],
		},
	]

	return (
		<ApexChart
			options={options}
			series={series}
			type="bar"
			height={400}
			width={600}
		/>
	)
}
