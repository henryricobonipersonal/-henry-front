import { Divider } from '@views/components/tw/divider'
import { Field, Fieldset, Legend } from '@views/components/tw/fieldset'
import { Text } from '@views/components/tw/text'
import { Link } from 'react-router-dom'

import { Button } from '@views/components/tw/button'
import { DataTableDemo } from './data-table'
// import { UpdateStudentSheet } from '@views/components/students/update-students'
// <UpdateStudentSheet>
// 	<div className="mt-4">
// 		<Button outline className="!-max !bg-orange-primary !text-white">
// 			Editar aluno
// 		</Button>
// 	</div>
// </UpdateStudentSheet>

export function StudentsPage() {
	return (
		<Field>
			<Fieldset className="mb-7">
				<div className="flex justify-between">
					<div>
						<Legend className="!text-2xl">Lista de alunos</Legend>
						<Text className="!mb-6">Visualize e gerencie todos os alunos do sistema.</Text>
					</div>
					<Link to="/create-student">
						<Button outline className="!-max !bg-orange-primary !text-white">
							Cadastrar aluno
						</Button>
					</Link>
				</div>
				<Divider />
			</Fieldset>

			<Fieldset>
				<DataTableDemo />
			</Fieldset>
		</Field>
	)
}
