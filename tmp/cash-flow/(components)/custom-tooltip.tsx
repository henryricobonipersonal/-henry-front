'use client'

export function CustomTooltip({ active, payload, label }: any) {
	if (active && payload && payload.length) {
		return (
			<div
				style={{
					backgroundColor: 'white',
					border: '1px solid #ccc',
					borderRadius: '8px',
					padding: '10px',
				}}
			>
				<p>Data {label}</p>
				<p>
					Saldo:{' '}
					{payload[0].value.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					})}
				</p>
			</div>
		)
	}

	return null
}
