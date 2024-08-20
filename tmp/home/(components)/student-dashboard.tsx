export function StudentDashboard() {
	return (
		<div className="mt-6">
			<div className="grid grid-cols-3 sm:grid-cols-1 gap-6 mb-8 ">
				<div className="border rounded-md shadow p-8">
					<p className="text-sm font-medium text-gray600 mb-4">
						Total de Metas
					</p>
					<p className="text-blue500 font-semibold text-5xl">2</p>
				</div>
				<div className="border rounded-md shadow p-8">
					<p className="text-sm font-medium text-gray600 mb-4">
						Metas Alcançadas
					</p>
					<p className="text-green-500 font-semibold text-5xl">1</p>
				</div>
				<div className="border rounded-md shadow p-8">
					<p className="text-sm font-medium text-gray600 mb-4">
						Metas não Alcançadas
					</p>
					<p className="text-red500 font-semibold text-5xl">1</p>
				</div>
			</div>
		</div>
	)
}
