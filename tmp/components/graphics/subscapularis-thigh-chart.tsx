import ApexChart from 'react-apexcharts'

export function SubscapularisThighChart() {
	const options = {
		title: {
			text: 'Evolução (Subescapular e Coxa)',
		},
		xaxis: {
			categories: ['Avaliação 1', 'Avaliação 2', 'Avaliação 3'],
		},
		yaxis: {
			title: {
				text: 'Subescapular e Coxa (mm)',
			},
			min: 0,
			max: 100,
		},
		colors: ['#28A5FF', '#00ED89'],
		dataLabels: {
			enabled: true,
		},
	}

	const series = [
		{
			name: 'Subescapular',
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
			name: 'Coxa',
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
