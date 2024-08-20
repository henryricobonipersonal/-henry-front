import ApexChart from 'react-apexcharts'

export function BodyCompositionColumnFormChart() {
	const options = {
		xaxis: {
			categories: ['Tríceps', 'Abdome', 'Coxa', 'Suprailíaca', 'Subescapular'],
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
					x: ['Tríceps'],
					y: [41],
				},
				{
					x: ['Abdome'],
					y: [40],
				},
				{
					x: ['Coxa'],
					y: [20],
				},
				{
					x: ['Suprailíaca'],
					y: [20],
				},
				{
					x: ['Subescapular'],
					y: [20],
				},
			],
		},
		{
			name: 'Atual',
			data: [
				{
					x: ['Tríceps'],
					y: [50],
				},
				{
					x: ['Abdome'],
					y: [45],
				},
				{
					x: ['Coxa'],
					y: [28],
				},
				{
					x: ['Suprailíaca'],
					y: [25],
				},
				{
					x: ['Subescapular'],
					y: [40],
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
