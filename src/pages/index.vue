<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
})

useHead({
	title: "Central de Aprovações | Dashboard",
})

import Headline from "../components/headline/headline.vue"
import TableRow from "../components/item-table/table-row.vue"

import TableHead from "../components/item-table/table-head.vue"
import TableFooter from "../components/item-table/table-footer.vue"

import { useItemsStore } from "@/stores/items/store"

const { items } = useItemsStore()
</script>

<template>
	<div class="p-6">
		<Headline />

		<div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
			<table class="min-w-full divide-y divide-gray-200">
				<TableHead />

				<tbody class="bg-white divide-y divide-gray-200">
					<TableRow v-for="item in items" :key="item.id" :item="item" />
				</tbody>
			</table>
		</div>

		<TableFooter />
	</div>
</template>
