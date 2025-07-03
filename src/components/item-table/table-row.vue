<script setup lang="ts">
import { useItemsStore } from "@/stores/items"

import type { ItemType } from "@/types/items"
import ApproveItemButton from "@/components/approve-item-button.vue"

const { item } = defineProps<{ item: ItemType }>()
const { getStatusColor } = useStatusColor()

const { approveItem } = useItemsStore()

function handleApprove(itemId: number) {
	approveItem(itemId)
}
</script>

<template>
	<tr class="hover:bg-gray-50">
		<td class="px-4 py-4 whitespace-nowrap">
			<input
				type="checkbox"
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

		<ApproveItemButton
			:item="item"
			:handleApprove="() => handleApprove(item.id)"
		/>
	</tr>
</template>
