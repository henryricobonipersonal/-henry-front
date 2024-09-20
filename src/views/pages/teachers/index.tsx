import { Divider } from '@views/components/tw/divider'
import { Field, Fieldset, Legend } from '@views/components/tw/fieldset'
import { Text } from '@views/components/tw/text'
import { Link } from 'react-router-dom'

import { Button } from '@views/components/tw/button'

export function TeachersPage() {
	return (
		<Field>
			<Fieldset className="mb-7">
				<div className="flex justify-between">
					<div>
						<Legend className="!text-2xl">Lista de professores</Legend>
						<Text className="!mb-6">Visualize e gerencie todos os professores do sistema.</Text>
					</div>
					<Link to="/create-teacher">
						<Button outline className="!-max !bg-orange-primary !text-white">
							Cadastrar professor
						</Button>
					</Link>
				</div>
				<Divider />
			</Fieldset>
			<h1>Students</h1>
		</Field>
	)
}