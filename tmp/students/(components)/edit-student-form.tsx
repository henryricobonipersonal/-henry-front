import { SaveAll } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function EditStudentForm() {
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
			<Input placeholder="Nome Completo" className="mb-5 w-0.5/6" />
			<p className="text-gray900 font-semibold mb-2 mt-6">Contato</p>
			<Input placeholder="Telefone" className="mb-5 w-0.5/6" />
			<p className="text-gray900 font-semibold mb-2 mt-6">Dados Pessoais</p>
			<div className="flex gap-5">
				<Input placeholder="Data de Nascimento" />
				<Input placeholder="CPF" />
				<Input placeholder="RG" />
			</div>
			<p className="text-gray900 font-semibold mb-2 mt-6">Endereço</p>
			<Input placeholder="CEP" className="mb-5 w-0.5/6" />
			<div className="flex gap-5">
				<Input placeholder="Cidade" />
				<Input placeholder="Estado" />
				<Input placeholder="Endereço" />
				<Input placeholder="N.º" />
			</div>
			<p className="text-gray900 font-semibold mb-2 mt-6">Redes Sociais</p>
			<div className="grid grid-cols-4 gap-5">
				<Input placeholder="Instagram" />
				<Input placeholder="Facebook" />
				<Input placeholder="Twitter" />
				<Input placeholder="Outro" />
			</div>
			<p className="text-gray900 font-semibold mb-2 mt-6">Dados para Login</p>
			<Input placeholder="Email" type="email" className="mb-5 w-0.5/6" />
			<div className="flex gap-5">
				<Input placeholder="Senha" />
				<Input placeholder="Confirmar Senha" />
			</div>
		</form>
	)
}
