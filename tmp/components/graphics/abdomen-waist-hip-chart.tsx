import ApexChart from 'react-apexcharts'

export function AbdomenWaistHipChart() {
	const options = {
		title: {
			text: 'Evolução (Abdome, Cintura e Tórax)',
		},
		xaxis: {
			categories: ['Avaliação 1', 'Avaliação 2', 'Avaliação 3'],
		},
		yaxis: {
			title: {
				text: 'Abdome, Cintura e Tórax (cm)',
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
			name: 'Cintura',
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
			name: 'Quadril',
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
