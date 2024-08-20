import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

export function CooperMenTable() {
	return (
		<Table>
			<TableCaption>Classificação do VO2 máx, sexo masculino</TableCaption>
			<TableHeader>
				<TableRow className=" bg-blue500 text-white">
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
					<TableCell>{'≥48,2'}</TableCell>
					<TableCell>{'≥47,0'}</TableCell>
					<TableCell>{'≥45,3'}</TableCell>
					<TableCell>{'≥41,0'}</TableCell>
					<TableCell>{'≥37,3'}</TableCell>
					<TableCell>{'≥35,2'}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Bom</TableCell>
					<TableCell>{'<48,2 - 44,1'}</TableCell>
					<TableCell>{'<47,5 - 42,4'}</TableCell>
					<TableCell>{'<45,3 - 41,0'}</TableCell>
					<TableCell>{'<41,0 - 36,7'}</TableCell>
					<TableCell>{'<37,3 - 33,0'}</TableCell>
					<TableCell>{'<35,2 - 29,4'}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Regular</TableCell>
					<TableCell>{'<44,1 - 41,0'}</TableCell>
					<TableCell>{'<42,4 - 38,5'}</TableCell>
					<TableCell>{'<41,0 - 36,7'}</TableCell>
					<TableCell>{'<36,4 - 33,0'}</TableCell>
					<TableCell>{'<33,0 - 29,4'}</TableCell>
					<TableCell>{'<29,4 - 26,5'}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Fraco</TableCell>
					<TableCell>{'<41,0 - 36,7'}</TableCell>
					<TableCell>{'<38,5 - 35,2'}</TableCell>
					<TableCell>{'<36,7 - 33,0'}</TableCell>
					<TableCell>{'<33,0 - 29,4'}</TableCell>
					<TableCell>{'<29,4 - 25,1'}</TableCell>
					<TableCell>{'<26,4 - 21,1'}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Muito fraco</TableCell>
					<TableCell>{'<36,7'}</TableCell>
					<TableCell>{'<35,2'}</TableCell>
					<TableCell>{'<33,0'}</TableCell>
					<TableCell>{'<29,4'}</TableCell>
					<TableCell>{'<25,1'}</TableCell>
					<TableCell>{'<21,1'}</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
