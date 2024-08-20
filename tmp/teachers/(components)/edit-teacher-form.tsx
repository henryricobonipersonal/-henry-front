import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'

import { SaveAll } from 'lucide-react'

export function EditTeacherForm() {
	return (
		<form>
			<div className="relative">
				<Button
					type="submit"
					className="absolute bottom-[80px] right-0 max-w-[168px]"
				>
					<span>
						<SaveAll
							className="size-5 text-white z-50 mr-1.5"
							strokeWidth={2}
						/>
					</span>
					Salvar
				</Button>
			</div>
			<div className="flex gap-5">
				<Input placeholder="Nome Completo" />
				<Input placeholder="Valor aula/h" />
			</div>
			<p className="text-gray900 font-semibold mb-2 mt-6">Contato</p>
			<div className="flex gap-5">
				<Input placeholder="Telefone" />
			</div>
			<p className="text-gray900 font-semibold mb-2 mt-6">Dados Pessoais</p>
			<div className="flex gap-5">
				<Input placeholder="CREF" />
				<Input placeholder="CPF" />
				<Input placeholder="RG" />
			</div>
			<p className="text-gray900 font-semibold mb-2 mt-6">Dados para Login</p>
			<Input placeholder="Email" type="email" className="mb-5 w-0.5/6" />
			<div className="flex gap-5">
				<Input placeholder="Senha" />
				<Input placeholder="Confirmar Senha" />
			</div>
			<p className="text-gray900 font-semibold mb-2 mt-6">Permissões</p>
			<div className="flex flex-wrap gap-8">
				<div className="flex items-center space-x-2">
					<Switch id="access-appointment" />
					<label htmlFor="access-appointment" className="text-sm">
						Acesso a agenda
					</label>
				</div>
				<div className="flex items-center space-x-2">
					<Switch id="allow-check-in" />
					<label htmlFor="allow-check-in" className="text-sm">
						Realizar check-in dos alunos
					</label>
				</div>
			</div>
		</form>
	)
}
