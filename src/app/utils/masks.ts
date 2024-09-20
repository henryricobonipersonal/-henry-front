const CPF = (value: string) => {
	return value
		.replace(/\D/g, '')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

const CNPJ = (value: string) => {
	return value
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1/$2')
		.replace(/(\d{4})(\d{1,2})$/, '$1-$2')
}

const RG = (value: string) => {
	return value
		.replace(/[^a-zA-Z0-9]/g, '')
		.replace(/^([a-zA-Z]{2})(\d)/, '$1-$2')
		.replace(/(\d{2})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d{1,2})$/, '$1.$2')
}

const birthDate = (value: string) => {
	return value
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '$1/$2')
		.replace(/(\d{2})(\d)/, '$1/$2')
}

const phone = (value: string) => {
	return value
		.replace(/\D/g, '')
		.replace(/^(\d{2})(\d)/g, '($1) $2')
		.replace(/(\d{5})(\d{4})$/, '$1-$2')
}

const zipCode = (value: string) => {
	return value
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d{3})$/, '$1-$2')
}

function currency(value: string) {
	let v = value.replace(/\D/g, '')
	v = `${(Number(v) / 100).toFixed(2)}`
	v = v.replace('.', ',')
	return v.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}


export const Mask = {
	document,
	CPF,
	CNPJ,
	RG,
	birthDate,
	phone,
	zipCode,
	currency,
}
