import ApexChart from 'react-apexcharts'

export function PerimetryMeasurementsChart2() {
	const options = {
		xaxis: {
			categories: [
				'Coxa Superior',
				'Coxa Medial',
				'Antebraço',
				'Panturrilha',
				'Braço Relaxado',
				'Braço Contraído',
			],
		},
		yaxis: {
			min: 0,
			max: 100,
		},
		colors: ['#28A5FF', '#00ED89', '#F7A200', '#A028FF'],
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
			name: 'Direta Anterior',
			data: [
				{
					x: ['Coxa Superior'],
					y: [41],
				},
				{
					x: ['Coxa Medial'],
					y: [40],
				},
				{
					x: ['Antebraço'],
					y: [20],
				},
				{
					x: ['Panturrilha'],
					y: [20],
				},
				{
					x: ['Braço Relaxado'],
					y: [20],
				},
				{
					x: ['Braço Contraído'],
					y: [20],
				},
			],
		},
		{
			name: 'Direita Atual',
			data: [
				{
					x: ['Coxa Superior'],
					y: [41],
				},
				{
					x: ['Coxa Medial'],
					y: [40],
				},
				{
					x: ['Antebraço'],
					y: [20],
				},
				{
					x: ['Panturrilha'],
					y: [20],
				},
				{
					x: ['Braço Relaxado'],
					y: [20],
				},
				{
					x: ['Braço Contraído'],
					y: [20],
				},
			],
		},
		{
			name: 'Esquerda Anterior',
			data: [
				{
					x: ['Coxa Superior'],
					y: [41],
				},
				{
					x: ['Coxa Medial'],
					y: [40],
				},
				{
					x: ['Antebraço'],
					y: [20],
				},
				{
					x: ['Panturrilha'],
					y: [20],
				},
				{
					x: ['Braço Relaxado'],
					y: [20],
				},
				{
					x: ['Braço Contraído'],
					y: [20],
				},
			],
		},
		{
			name: 'Esquerda Atual',
			data: [
				{
					x: ['Coxa Superior'],
					y: [41],
				},
				{
					x: ['Coxa Medial'],
					y: [40],
				},
				{
					x: ['Antebraço'],
					y: [20],
				},
				{
					x: ['Panturrilha'],
					y: [20],
				},
				{
					x: ['Braço Relaxado'],
					y: [20],
				},
				{
					x: ['Braço Contraído'],
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
