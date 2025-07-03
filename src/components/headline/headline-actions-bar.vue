<script setup>
import { CheckCircle } from "lucide-vue-next"

const { selectedItems } = storeToRefs(useCheckedItemsStore())
const { approveSelectedsItems } = useItemsStore()
</script>

<template>
	<div class="flex justify-start gap-4 mb-4">
		<UButton
			v-if="selectedItems.length > 0"
			class="bg-emerald-600 transition-all duration-200 text-sm hover:bg-emerald-900 ::disabled:opacity-20 cursor-pointer text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
			@click="() => approveSelectedsItems(selectedItems)"
		>
			<CheckCircle class="inline-block w-4 h-4 mr-1" font-weight="bold" />
			Aprovar ({{ selectedItems.length }}) selecionados
		</UButton>
	</div>
</template>
