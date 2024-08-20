import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

export function CooperWomanTable() {
	return (
		<Table>
			<TableCaption>Classificação do VO2 máx, sexo feminino</TableCaption>
			<TableHeader>
				<TableRow className="bg-rose-300 text-white">
					<TableHead className="w-[200px]">Faixa Etária</TableHead>
					<TableHead>20-29</TableHead>
					<TableHead>30-39</TableHead>
					<TableHead>40-49</TableHead>
					<TableHead>50-59</TableHead>
					<TableHead>60-69</TableHead>
					<TableHead>70-79</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">Muito bom</TableCell>
					<TableCell>{'≥41,0'}</TableCell>
					<TableCell>{'≥39,5'}</TableCell>
					<TableCell>{'≥36,7'}</TableCell>
					<TableCell>{'≥32,3'}</TableCell>
					<TableCell>{'≥30,2'}</TableCell>
					<TableCell>{'≥31,0'}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Bom</TableCell>
					<TableCell>{'<41,0 - 36,7'}</TableCell>
					<TableCell>{'<39,5 - 35,2'}</TableCell>
					<TableCell>{'<36,7 - 32,3'}</TableCell>
					<TableCell>{'<32,3 - 29,4'}</TableCell>
					<TableCell>{'<30,2 - 27,3'}</TableCell>
					<TableCell>{'<31,0 - 26,8'}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Regular</TableCell>
					<TableCell>{'<36,7 - 33,8'}</TableCell>
					<TableCell>{'<35,2 - 32,0'}</TableCell>
					<TableCell>{'<32,3 - 29,4'}</TableCell>
					<TableCell>{'<29,4 - 26,5'}</TableCell>
					<TableCell>{'<27,3 - 24,4'}</TableCell>
					<TableCell>{'<26,8 - 23,7'}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Fraco</TableCell>
					<TableCell>{'<33,8 - 29,9'}</TableCell>
					<TableCell>{'<32,0 - 28,7'}</TableCell>
					<TableCell>{'<29,4 - 25,7'}</TableCell>
					<TableCell>{'<26,5 - 23,7'}</TableCell>
					<TableCell>{'<24,4 - 22,2'}</TableCell>
					<TableCell>{'<23,7 - 20,8'}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Muito fraco</TableCell>
					<TableCell>{'<29,9'}</TableCell>
					<TableCell>{'<28,7'}</TableCell>
					<TableCell>{'<25,7'}</TableCell>
					<TableCell>{'<23,7'}</TableCell>
					<TableCell>{'<22,2'}</TableCell>
					<TableCell>{'<10,8'}</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
