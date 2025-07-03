<script setup>
import { CheckCircle, Circle } from "lucide-vue-next"

const { selectedItems } = storeToRefs(useCheckedItemsStore())
</script>

<template>
	<div class="flex justify-start gap-4 mb-4">
		<!-- <UButton
			class="bg-neutral-200 transition-all duration-200 text-sm hover:bg-neutral-300 cursor-pointer text-neutral-800 font-bold py-2 px-3 rounded-full focus:outline-none focus:shadow-outline mr-2"
		>
			<Circle class="inline-block w-4 h-4 mr-1" font-weight="bold" />
			<span>Selecionar todos</span>
		</UButton> -->

		<UButton
			v-if="selectedItems.length > 0"
			class="bg-emerald-600 transition-all duration-200 text-sm hover:bg-emerald-900 ::disabled:opacity-20 cursor-pointer text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
		>
			<CheckCircle class="inline-block w-4 h-4 mr-1" font-weight="bold" />
			Aprovar ({{ selectedItems.length }}) selecionados
		</UButton>
	</div>
</template>
