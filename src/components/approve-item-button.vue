<script setup lang="ts">
import { CheckCircle } from "lucide-vue-next"
import type { ApproveItemButtonProps } from "@/types/items"

const { handleApprove, item } = defineProps<ApproveItemButtonProps>()

const isItemApproved = ref(() => {
	return item.status === "APPROVED"
})
</script>

<template>
	<td class="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
		<UButton
			@click="() => handleApprove(item.id)"
			:disabled="isItemApproved()"
			class="bg-emerald-600 transition-all duration-200 text-sm hover:bg-emerald-900 disabled:opacity-40 cursor-pointer text-white font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
		>
			<CheckCircle class="inline-block w-4 h-4 mr-1" font-weight="bold" />
			Aprovar
		</UButton>
	</td>
</template>
