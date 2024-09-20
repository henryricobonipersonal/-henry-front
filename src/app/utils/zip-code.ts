import axios from 'axios'

export async function fetchAddressByZipCode(zipCode: string) {
	const formattedZip = zipCode.replace(/\D/g, '')
	const response = await fetch(`https://viacep.com.br/ws/${formattedZip}/json/`)
	if (!response.ok) {
		throw new Error('Erro ao buscar o endereço')
	}
	return await response.json()
}

export async function fetchZipCodeByAddress(city: string, street: string) {
	try {
		const encodedCity = encodeURIComponent(city)
		const encodedStreet = encodeURIComponent(street)

		const response = await axios.get(
			`https://viacep.com.br/ws/${encodedCity}/${encodedStreet}/json/`,
		)
		return response.data
	} catch (error) {
		throw new Error('Erro ao buscar o CEP pelo endereço')
	}
}
