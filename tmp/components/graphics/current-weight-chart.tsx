import ApexChart from 'react-apexcharts'

export function CurrentWeightChart() {
	const options = {
		title: {
			text: 'Evolução (Peso Atual)',
		},
		xaxis: {
			categories: ['Avaliação 1', 'Avaliação 2', 'Avaliação 3'],
		},
		yaxis: {
			title: {
				text: 'Peso atual (Kg)',
			},
			min: 0,
			max: 100,
		},
		colors: ['#28A5FF'],
		dataLabels: {
			enabled: true,
		},
	}

	const series = [
		{
			name: 'Esquerda',
			data: [
				{
					x: ['Avaliação 1'],
					y: [60],
				},
				{
					x: ['Avaliação 2'],
					y: [85],
				},
				{
					x: ['Avaliação 3'],
					y: [100],
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
