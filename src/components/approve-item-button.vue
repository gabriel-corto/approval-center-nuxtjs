<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next"
import type { ApproveItemButtonProps } from "@/types/items"

const { handleApprove, itemId } = defineProps<ApproveItemButtonProps>()
</script>

<template>
	<td class="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
		<UButton
			@click="() => handleApprove(itemId)"
			class="bg-emerald-600 text-sm hover:bg-emerald-900 cursor-pointer text-white font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
		>
			<ArrowRight class="inline-block w-4 h-4 mr-1" font-weight="bold" />
			Aprovar
		</UButton>
	</td>
</template>
