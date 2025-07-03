<script setup>
import ApproveAllItemsButtons from "@/components/headline/aprove-all-items-buttons.vue"
import SelectAllItemsButton from "@/components/headline/select-all-items-button.vue"
</script>

<template>
	<div class="flex gap-4 mb-4">
		<div class="flex items-center gap-4">
			<SelectAllItemsButton />
			<ApproveAllItemsButtons />
		</div>
	</div>
</template>
