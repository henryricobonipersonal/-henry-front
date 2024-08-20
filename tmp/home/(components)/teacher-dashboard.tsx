import { NewStudentsChart } from '@/components/graphics/new-students-chart'

export function TeacherDashboard() {
	return (
		<div className="mt-6">
			<div className="flex sm:flex-col gap-8">
				<div className="grid grid-cols-1 gap-6 mb-8 w-[40%] sm:w-full">
					<div className="border rounded-md shadow p-8">
						<p className="text-sm font-medium text-gray600 mb-4">
							Total de aulas agendadas para hoje (19/06)
						</p>
						<p className="text-green-500 font-semibold text-5xl">4</p>
					</div>
					<div className="border rounded-md shadow p-8">
						<p className="text-sm font-medium text-gray600 mb-4">
							Total de alunos
						</p>
						<p className="text-purple500 font-semibold text-5xl">20</p>
					</div>
					<div className="border rounded-md shadow p-8">
						<p className="text-sm font-medium text-gray600 mb-4">
							Média de aula/h por mês
						</p>
						<p className="text-blue500 font-semibold text-5xl">120</p>
					</div>
				</div>
				<div className="flex flex-col gap-6 w-[60%] sm:w-full">
					<h2 className="font-semibold mb-1 text-lg">Matrículas</h2>
					<NewStudentsChart hide={true} />
				</div>
			</div>
		</div>
	)
}
