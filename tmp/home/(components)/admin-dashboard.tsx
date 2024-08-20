import { AnnualBillingChart } from '@/components/graphics/annual-billing-chart'
import { NewStudentsChart } from '@/components/graphics/new-students-chart'

export function AdminDashboard() {
	return (
		<div className="mt-6">
			<div className="grid grid-cols-3 sm:grid-cols-1 gap-6 mb-8">
				<div className="border rounded-md shadow p-8">
					<p className="text-sm font-medium text-gray600 mb-4">
						Total de alunos
					</p>
					<p className="text-purple500 font-semibold text-5xl">120</p>
				</div>
				<div className="border rounded-md shadow p-8">
					<p className="text-sm font-medium text-gray600 mb-4">
						Total de professores
					</p>
					<p className="text-blue500 font-semibold text-5xl">30</p>
				</div>
				<div className="border rounded-md shadow p-8">
					<p className="text-sm font-medium text-gray600 mb-4">
						Média da aula/h
					</p>
					<p className="text-green-500 font-semibold text-5xl">R$ 70,00</p>
				</div>
			</div>
			<div className="flex gap-6 sm:flex-col">
				<div className="w-1/2 sm:w-full">
					<h2 className="font-semibold mb-1 text-lg">Faturamento</h2>
					<AnnualBillingChart hide={true} />
				</div>
				<div className="w-1/2 sm:w-full">
					<h2 className="font-semibold mb-1 text-lg">Matrículas</h2>
					<NewStudentsChart hide={true} />
				</div>
			</div>
		</div>
	)
}
