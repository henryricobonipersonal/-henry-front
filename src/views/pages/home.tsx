import { EnrollmentHome } from '@views/components/home/enrollments-home'
import { RevenueHome } from '@views/components/home/revenue-home'
import { Button } from '@views/components/tw/button'
import { Divider } from '@views/components/tw/divider'
import { Field, Fieldset, Legend } from '@views/components/tw/fieldset'
import { Text } from '@views/components/tw/text'

export function HomePage() {
	return (
		<div>
			<Field>
				<Fieldset className="mb-7">
					<Legend className="!text-2xl">Bem-vindo ao painel de controle!</Legend>
					<Text className="!mb-6">
						Monitore seu faturamento, alunos, professores e métricas de desempenho de forma rápida e
						eficiente.
					</Text>
					<Divider />
				</Fieldset>

				<Fieldset className="!w-full !flex !justify-around !px-8 !gap-x-4 !py-4">
					<Button
						outline
						className="!w-full !flex-col !py-4 !pointer-events-none !bg-zinc-100 dark:!bg-zinc-600"
					>
						<span className="text-xl">Total de alunos</span>
						<span className="text-purple-400 dark:text-purple-500 text-2xl">120</span>
					</Button>

					<Button
						outline
						className="!w-full !flex-col !py-4 !pointer-events-none !bg-zinc-100 dark:!bg-zinc-600"
					>
						<span className="text-xl">Total de professores</span>
						<span className="text-blue-400 dark:text-purpbluele-500 text-2xl">120</span>
					</Button>

					<Button
						outline
						className="!w-full !flex-col !py-4 !pointer-events-none !bg-zinc-100 dark:!bg-zinc-600"
					>
						<span className="text-xl">Média da aula/h</span>
						<span className="text-green-400 dark:text-green-500 text-2xl">120</span>
					</Button>
				</Fieldset>

				<Fieldset className="mb-8 mt-4">
					<Legend className="!text-2xl !mx-auto !text-center">Dados do semestre atual</Legend>
				</Fieldset>

				<Fieldset className="!flex !mt-7 !gap-x-8 !w-full">
					<RevenueHome />
					<EnrollmentHome />
				</Fieldset>
			</Field>
		</div>
	)
}
