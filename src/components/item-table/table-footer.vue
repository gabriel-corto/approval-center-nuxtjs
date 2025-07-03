<script setup lang="ts">
import { storeToRefs } from "pinia"
const { totalIItems, totalApprovedItems } = storeToRefs(useItemsStore())
</script>

<template>
	<div class="mt-8 text-gray-600">
		<div class="flex justify-between items-center p-4 bg-white rounded-b-lg">
			<p class="flex items-center gap-2">
				Total de processos

				<strong
					class="bg-neutral-600 text-white w-6 h-6 flex items-center justify-center rounded-full"
				>
					{{ totalIItems }}</strong
				>
			</p>

			<p class="flex items-center gap-2">
				Aprovados

				<strong
					class="bg-emerald-500 text-white w-6 h-6 flex items-center justify-center rounded-full"
				>
					{{ totalApprovedItems }}</strong
				>
			</p>
		</div>
	</div>
</template>
