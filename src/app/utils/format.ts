/**
 * Formata um número de documento (CPF ou CNPJ) para uma string legível.
 * @param document Número do documento como string.
 * @returns Documento formatado ou 'Invalid document' se o número for inválido.
 */
function document(document = ''): string {
	if (document.length === 11) {
		const p1 = document.slice(0, 3)
		const p2 = document.slice(3, 6)
		const p3 = document.slice(6, 9)
		const checkDigits = document.slice(9)
		return `${p1}.${p2}.${p3}-${checkDigits}`
	}
	if (document.length === 14) {
		const p1 = document.slice(0, 2)
		const p2 = document.slice(2, 5)
		const p3 = document.slice(5, 8)
		const p4 = document.slice(8, 12)
		const checkDigits = document.slice(12)
		return `${p1}.${p2}.${p3}/${p4}-${checkDigits}`
	}
	return 'Invalid document'
}

/**
 * Formata um valor numérico ou string para moeda brasileira (BRL).
 * @param value Valor a ser formatado.
 * @returns String formatada como moeda (R$).
 */
function currency(value: string | number) {
	if (!value) return 'R$ 0,00'

	return Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	}).format(+value)
}

/**
 * Formata um número de telefone para uma string legível.
 * @param number Número de telefone como string.
 * @returns Número de telefone formatado.
 */
function phone(number = ''): string {
	const cleanNumber = number.replace(/[^\d+]/g, '')

	if (cleanNumber.length === 10) {
		return cleanNumber.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
	}
	if (cleanNumber.length === 13) {
		return cleanNumber.replace(
			/(\+\d{2})(\d{2})(\d{4})(\d{4})/,
			'$1 ($2) $3-$4',
		)
	}
	return cleanNumber.replace(/(\+\d{2})(\d{2})(\d{5})(\d{4})/, '$1 ($2) $3-$4')
}

/**
 * Converte uma string ISO 8601 para uma data no formato 'DD/MM/YYYY'.
 * @param isoString Data no formato ISO 8601.
 * @returns Data no formato 'DD/MM/YYYY'.
 */
function parseIso(isoString: string): string {
	const dateObj = new Date(isoString)
	const day = dateObj.getUTCDate().toString().padStart(2, '0')
	const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0')
	const year = dateObj.getUTCFullYear().toString()

	return `${day}/${month}/${year}`
}

/**
 * Converte uma string ISO 8601 para uma data no formato 'YYYY-DD-MM'.
 * @param isoString Data no formato ISO 8601.
 * @returns Data no formato 'YYYY-DD-MM'.
 */
function stringfyIso(isoString: string): string {
	const dateObj = new Date(isoString)
	const day = dateObj.getUTCDate().toString().padStart(2, '0')
	const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0')
	const year = dateObj.getUTCFullYear().toString()

	return `${year}-${day}-${month}`
}

/**
 * Converte uma data no formato 'DD/MM/YYYY' para o formato ISO 8601.
 * @param dateString Data no formato 'DD/MM/YYYY'.
 * @returns Data no formato ISO 8601.
 */
function formatIso(dateString: string): string {
	const [day, month, year] = dateString.split('/')
	const date = new Date(`${year}-${month}-${day}T00:00:00Z`)

	return date.toISOString()
}

/**
 * Coloca a primeira letrar de uma string maiúscula.
 * @param str String a ser capitalizada.
 * @returns String com a primeira letra maiúscula.
 */
function capitalizeFirstLetter(str: string): string {
	if (!str) return str

	return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Converte uma data para o formato 'DD/MM/YYYY'.
 * @param date Data a ser convertida.
 * @returns Data no formato 'DD/MM/YYYY'.
 */
function formatDateToDDMMYYYY(date: Date): string {
	const day = String(date.getUTCDate()).padStart(2, '0')
	const month = String(date.getUTCMonth() + 1).padStart(2, '0') // getUTCMonth() retorna 0 para janeiro
	const year = date.getUTCFullYear()

	return `${day}/${month}/${year}`
}

export const Format = {
	document,
	currency,
	phone,
	parseIso,
	stringfyIso,
	formatIso,
	capitalizeFirstLetter,
	formatDateToDDMMYYYY,
}
