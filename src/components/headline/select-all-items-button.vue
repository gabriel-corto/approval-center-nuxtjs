<script setup>
import { useItemsStore } from "@/stores/items/store"
import { Circle } from "lucide-vue-next"
import { storeToRefs } from "pinia"

const { selectedItems } = storeToRefs(useItemsStore())
const { selectAllItems } = useItemsStore()
</script>

<template>
	<UButton
		v-if="selectedItems.length > 0"
		@click="() => selectAllItems()"
		class="bg-neutral-200 transition-all duration-200 text-sm hover:bg-neutral-300 cursor-pointer text-neutral-800 font-bold py-2 px-3 rounded-full focus:outline-none focus:shadow-outline mr-2"
	>
		<Circle class="inline-block w-4 h-4 mr-1" font-weight="bold" />
		<span>Selecionar todos</span>
	</UButton>
</template>
