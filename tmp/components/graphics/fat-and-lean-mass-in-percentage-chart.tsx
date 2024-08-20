import ApexChart from 'react-apexcharts'

export function FatAndLeanMassInPercentageChart() {
	const options = {
		title: {
			text: 'Evolução (Gordura e Massa Magra)',
		},
		xaxis: {
			categories: ['Avaliação 1', 'Avaliação 2', 'Avaliação 3'],
		},
		yaxis: {
			title: {
				text: 'Gordura e Massa Magra (%)',
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
			name: 'Gordura',
			data: [
				{
					x: ['Avaliação 1'],
					y: [41],
				},
				{
					x: ['Avaliação 2'],
					y: [56],
				},
				{
					x: ['Avaliação 3'],
					y: [56],
				},
			],
		},
		{
			name: 'Massa Magra',
			data: [
				{
					x: ['Avaliação 1'],
					y: [40],
				},
				{
					x: ['Avaliação 2'],
					y: [55],
				},
				{
					x: ['Avaliação 3'],
					y: [56],
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
