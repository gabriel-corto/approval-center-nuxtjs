<script setup lang="ts">
import type { ProccessItemType } from "@/types/process"
import { ArrowRight } from "lucide-vue-next"

const { item } = defineProps<{ item: ProccessItemType }>()
const { getStatusColor } = useStatusColor()

const selected = defineModel<boolean>("selected", { default: false })
</script>

<template>
	<tr class="hover:bg-gray-50" :class="{ 'bg-gray-100': selected }">
		<td class="px-4 py-4 whitespace-nowrap">
			<input
				type="checkbox"
				v-model="selected"
				class="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
			/>
		</td>

		<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
			{{ item.id }}
		</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
			{{ item.name }}
		</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
			{{ item.type }}
		</td>
		<td class="px-6 py-4 whitespace-nowrap">
			<UBadge
				class="px-2 py-1 text-sm font-bold rounded-full"
				:class="getStatusColor(item.status).color"
				>{{ getStatusColor(item.status).text }}</UBadge
			>
		</td>
		<td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
			<UButton
				class="bg-emerald-600 text-sm hover:bg-emerald-900 cursor-pointer text-white font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
			>
				<ArrowRight class="inline-block w-4 h-4 mr-1" font-weight="bold" />
				Aprovar
			</UButton>
		</td>
	</tr>
</template>
