<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
})

useHead({
	title: "Aprovaki | Dashboard",
})

import Headline from "../components/headline.vue"
import TableHead from "../components/item-table/table-head.vue"
import TableRow from "../components/item-table/table-row.vue"
import TableFooter from "../components/item-table/table-footer.vue"

import type { ProcessItem } from "@/types/process.ts"

const process: ProcessItem[] = [
	{ id: 1, name: "Empresa A", type: "Startup", status: "PENDING" },
	{ id: 2, name: "Empresa B", type: "ONG", status: "PENDING" },
	{ id: 3, name: "Empresa C", type: "Privada", status: "APPROVED" },
]
</script>

<template>
	<div class="p-6">
		<Headline />

		<div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
			<table class="min-w-full divide-y divide-gray-200">
				<TableHead />

				<tbody class="bg-white divide-y divide-gray-200">
					<TableRow v-for="item in process" :key="item.id" :item="item" />
				</tbody>
			</table>
		</div>

		<TableFooter :total-process="process.length" />
	</div>
</template>
