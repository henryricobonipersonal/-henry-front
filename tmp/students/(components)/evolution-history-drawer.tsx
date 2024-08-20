import type { Dispatch, SetStateAction } from 'react'
import {
	ChartLine,
	PersonArmsSpread,
	Ruler,
} from '@phosphor-icons/react/dist/ssr'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { AbdomenWaistHipChart } from '@/components/graphics/abdomen-waist-hip-chart'
import { CalfChart } from '@/components/graphics/calf-chart'
import { ContractedArmChart } from '@/components/graphics/contracted-arm-chart'
import { CurrentWeightChart } from '@/components/graphics/current-weight-chart'
import { FatAndLeanMassInKgChart } from '@/components/graphics/fat-and-lean-mass-in-kg-chart'
import { FatAndLeanMassInPercentageChart } from '@/components/graphics/fat-and-lean-mass-in-percentage-chart'
import { ForearmChart } from '@/components/graphics/forearm-chart'
import { MedialThighChart } from '@/components/graphics/medial-thigh-chart'
import { RelaxedArmChart } from '@/components/graphics/relaxed-arm-chart'
import { ShoulderThoraxChart } from '@/components/graphics/shoulder-thorax-chart'
import { SubscapularisThighChart } from '@/components/graphics/subscapularis-thigh-chart'
import { SuprailiacAbdomenTricepsChart } from '@/components/graphics/suprailiac-abdomen-triceps-chart'
import { UpperThighChart } from '@/components/graphics/upper-thigh-chart'

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export function EvolutionHistoryDrawer({ open, setOpen }: Props) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="ml-2.5 hover:text-gray600 text-sm  text-gray500 flex gap-2 items-center transition-all">
				<ChartLine size={24} weight="light" />
				Histórico de Evoluções
			</DrawerTrigger>
			<DrawerContent className="w-full h-[96vh] right-0">
				<div className="bg-white w-full h-full overflow-auto rounded-md">
					<div className="flex justify-between items-center border-b-[1px] border-gray200 pt-12 pb-8 px-12 sm:px-5">
						<div>
							<h1 className="text-2xl font-medium">Histórico de Evoluções</h1>
							<p className="text-gray500 text-sm mt-4">
								Histórico de Evoluções do aluno: Aluno 1
							</p>
						</div>
					</div>
					<div className="pt-2 pb-12 px-12 sm:px-5">
						<div className="pb-6">
							<div className="flex gap-3 items-center my-8">
								<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
									<Ruler />
								</div>
								<p className="text-gray900 font-semibold">
									Medidas de Perimetria
								</p>
							</div>
							<div className="flex gap-12 flex-wrap items-center justify-center">
								<ShoulderThoraxChart />
								<AbdomenWaistHipChart />
								<UpperThighChart />
								<MedialThighChart />
								<CalfChart />
								<RelaxedArmChart />
								<ContractedArmChart />
								<ForearmChart />
							</div>
							<div className="flex gap-3 items-center my-8">
								<div className="shadow bg-orange500 rounded-sm text-white text-2xl w-8 h-8 flex items-center justify-center">
									<PersonArmsSpread />
								</div>
								<p className="text-gray900 font-semibold">
									Composição Corporal (Guedes)
								</p>
							</div>
							<div className="flex gap-12 flex-wrap items-center justify-center">
								<FatAndLeanMassInKgChart />
								<FatAndLeanMassInPercentageChart />
								<CurrentWeightChart />
								<SuprailiacAbdomenTricepsChart />
								<SubscapularisThighChart />
							</div>
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
