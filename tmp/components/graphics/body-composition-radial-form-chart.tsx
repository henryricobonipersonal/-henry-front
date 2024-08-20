import ApexChart from 'react-apexcharts'

export function BodyCompositionRadialFormChart() {
	const options = {
		labels: ['Massa Magra', 'Massa Gorda'],
		colors: ['#A028FF', '#F7A200'],
		dataLabels: {
			enabled: true,
		},
	}

	const series = [8, 10]

	return (
		<ApexChart
			options={options}
			series={series}
			type="pie"
			height={400}
			width={400}
		/>
	)
}
