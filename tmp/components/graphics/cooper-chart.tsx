import ApexChart from 'react-apexcharts'

export function CooperChart() {
	const options = {
		xaxis: {
			categories: [
				'0 min.',
				'2 min.',
				'4 min.',
				'6 min.',
				'8 min.',
				'10 min.',
				'12 min.',
			],
			labels: {
				style: {
					colors: [
						'#28A5FF',
						'#00ED89',
						'#A028FF',
						'#F7A200',
						'#E90000',
						'#E6B5A5',
						'#4E45DC',
					],
					fontSize: '12px',
				},
			},
		},
		yaxis: {
			min: 0,
			max: 100,
		},
		dataLabels: {
			enabled: true,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				distributed: true,
			},
		},
		colors: [
			'#28A5FF',
			'#00ED89',
			'#A028FF',
			'#F7A200',
			'#E90000',
			'#E6B5A5',
			'#4E45DC',
		],
	}

	const series = [
		{
			name: 'Tempo',
			data: [
				{
					x: ['0 min.'],
					y: [41],
				},
				{
					x: ['2 min.'],
					y: [40],
				},
				{
					x: ['4 min.'],
					y: [20],
				},
				{
					x: ['6 min.'],
					y: [20],
				},
				{
					x: ['8 min.'],
					y: [20],
				},
				{
					x: ['10 min.'],
					y: [20],
				},
				{
					x: ['12 min.'],
					y: [20],
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
