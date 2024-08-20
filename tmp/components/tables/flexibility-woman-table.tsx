import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

export function FlexibilityWomanTable() {
	return (
		<Table>
			<TableCaption>
				Classificação do teste de flexibilidade feminino (cm)
			</TableCaption>
			<TableHeader>
				<TableRow className=" bg-rose-300 text-white">
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
					<TableCell>{'>43'}</TableCell>
					<TableCell>{'>41'}</TableCell>
					<TableCell>{'>41'}</TableCell>
					<TableCell>{'>38'}</TableCell>
					<TableCell>{'>39'}</TableCell>
					<TableCell>{'>35'}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Acima da média</TableCell>
					<TableCell>38 a 42</TableCell>
					<TableCell>37 a 40</TableCell>
					<TableCell>36 a 40</TableCell>
					<TableCell>34 a 37</TableCell>
					<TableCell>33 a 38</TableCell>
					<TableCell>31 a 34</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Média</TableCell>
					<TableCell>34 a 37</TableCell>
					<TableCell>33 a 36</TableCell>
					<TableCell>32 a 35</TableCell>
					<TableCell>30 a 33</TableCell>
					<TableCell>30 a 32</TableCell>
					<TableCell>27 a 30</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Abaixo da média</TableCell>
					<TableCell>29 a 33</TableCell>
					<TableCell>28 a 32</TableCell>
					<TableCell>27 a 31</TableCell>
					<TableCell>25 a 29</TableCell>
					<TableCell>25 a 29</TableCell>
					<TableCell>23 a 26</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Ruim</TableCell>
					<TableCell>{'<28'}</TableCell>
					<TableCell>{'<27'}</TableCell>
					<TableCell>{'<26'}</TableCell>
					<TableCell>{'<24'}</TableCell>
					<TableCell>{'<24'}</TableCell>
					<TableCell>{'<22'}</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
