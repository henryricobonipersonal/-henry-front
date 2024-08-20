import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

export function FlexibilityMenTable() {
	return (
		<Table>
			<TableCaption>
				Classificação do teste de flexibilidade masculino (cm)
			</TableCaption>
			<TableHeader>
				<TableRow className=" bg-blue500 text-white">
					<TableHead className="w-[200px]">Faixa Etária</TableHead>
					<TableHead>15-19</TableHead>
					<TableHead>20-29</TableHead>
					<TableHead>30-39</TableHead>
					<TableHead>40-49</TableHead>
					<TableHead>50-59</TableHead>
					<TableHead>{'≥60'}</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">Excelente</TableCell>
					<TableCell>{'>39'}</TableCell>
					<TableCell>{'>40'}</TableCell>
					<TableCell>{'>38'}</TableCell>
					<TableCell>{'>35'}</TableCell>
					<TableCell>{'>35'}</TableCell>
					<TableCell>{'>33'}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Acima da média</TableCell>
					<TableCell>34 a 38</TableCell>
					<TableCell>34 a 39</TableCell>
					<TableCell>33 a 37</TableCell>
					<TableCell>29 a 34</TableCell>
					<TableCell>28 a 34</TableCell>
					<TableCell>25 a 32</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Média</TableCell>
					<TableCell>29 a 33</TableCell>
					<TableCell>30 a 33</TableCell>
					<TableCell>28 a 32</TableCell>
					<TableCell>24 a 28</TableCell>
					<TableCell>24 a 27</TableCell>
					<TableCell>20 a 24</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Abaixo da média</TableCell>
					<TableCell>24 a 28</TableCell>
					<TableCell>25 a 29</TableCell>
					<TableCell>23 a 27</TableCell>
					<TableCell>18 a 23</TableCell>
					<TableCell>16 a 23</TableCell>
					<TableCell>15 a 19</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Ruim</TableCell>
					<TableCell>{'<23'}</TableCell>
					<TableCell>{'<24'}</TableCell>
					<TableCell>{'<22'}</TableCell>
					<TableCell>{'<17'}</TableCell>
					<TableCell>{'<15'}</TableCell>
					<TableCell>{'<14'}</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
