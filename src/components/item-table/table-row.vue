<script setup lang="ts">
import type { ItemType } from "@/types/items"
import { useItemsStore } from "@/stores/items"
import ApproveItemButton from "@/components/approve-item-button.vue"
import { CheckCircle } from "lucide-vue-next"

const { item } = defineProps<{ item: ItemType }>()
const { getStatusColor } = useStatusColor()

const { approveItem, selectItem, selectedItems } = useItemsStore()

function handleApprove(itemId: number) {
	approveItem(itemId)
}

function handleSelectItem(itemId: number) {
	selectItem(itemId)
}
</script>

<template>
	<tr class="hover:bg-gray-50">
		<td class="px-4 py-4 whitespace-nowrap">
			<div
				@click="handleSelectItem(item.id)"
				class="h-5 w-5 cursor-pointer border text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded-full"
			>
				<span
					v-if="item.isSelected"
					class="flex items-center justify-center bg-emerald-600 text-white rounded-full h-full w-full"
				>
					<CheckCircle class="h-5 w-5" />
				</span>
			</div>
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
