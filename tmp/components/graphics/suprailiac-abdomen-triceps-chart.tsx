import ApexChart from 'react-apexcharts'

export function SuprailiacAbdomenTricepsChart() {
	const options = {
		title: {
			text: 'Evolução (Suprailíaco, Abdome, Tríceps)',
		},
		xaxis: {
			categories: ['Avaliação 1', 'Avaliação 2', 'Avaliação 3'],
		},
		yaxis: {
			title: {
				text: 'Suprailíaco, Abdome, Tríceps (mm)',
			},
			min: 0,
			max: 100,
		},
		colors: ['#28A5FF', '#00ED89', '#F7A200'],
		dataLabels: {
			enabled: true,
		},
	}

	const series = [
		{
			name: 'Abdome',
			data: [
				{
					x: ['Avaliação 1'],
					y: [28],
				},
				{
					x: ['Avaliação 2'],
					y: [29],
				},
				{
					x: ['Avaliação 3'],
					y: [33],
				},
			],
		},
		{
			name: 'Suprailíaco',
			data: [
				{
					x: ['Avaliação 1'],
					y: [40],
				},
				{
					x: ['Avaliação 2'],
					y: [33],
				},
				{
					x: ['Avaliação 3'],
					y: [52],
				},
			],
		},
		{
			name: 'Tríceps',
			data: [
				{
					x: ['Avaliação 1'],
					y: [35],
				},
				{
					x: ['Avaliação 2'],
					y: [54],
				},
				{
					x: ['Avaliação 3'],
					y: [22],
				},
			],
		},
	]

	return (
		<ApexChart
			options={options}
			series={series}
			type="line"
			height={400}
			width={400}
		/>
	)
}
