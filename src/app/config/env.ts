import { z } from 'zod'

import { strMsg } from '@app/utils/zod-custom-error'

const envSchema = z.object({
	VITE_API_URL: z
		.string(strMsg('URL da API'))
		.url({ message: 'O campo URL da API é obrigatório.' }),
})

const _env = envSchema.safeParse(import.meta.env)

if (_env.success === false) {
	console.error('❌ Invalid environment variables', _env.error.flatten())

	throw new Error('❌ Invalid environment variables.')
}

export const env = _env.data
