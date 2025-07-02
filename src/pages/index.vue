<script setup>
definePageMeta({
	layout: "dashboard",
})

const process = [
	{ id: 1, name: "Empresa A", type: "Startup", status: "PENDING" },
	{ id: 2, name: "Empresa B", type: "ONG", status: "PENDING" },
	{ id: 3, name: "Empresa C", type: "Privada", status: "APPROVED" },
]

const getStatusColor = (status) => {
	switch (status) {
		case "PENDING":
			return { text: "Pendente", color: "bg-yellow-100 text-yellow-800" }
		case "APPROVED":
			return { text: "Aprovado", color: "bg-green-100 text-green-800" }
		case "REJECTED":
			return { text: "Rejeitado", color: "bg-red-100 text-red-800" }
		default:
			return { text: status, color: "bg-gray-100 text-gray-800" }
	}
}
</script>

<template>
	<div class="p-6">
		<div class="flex justify-between items-center mb-6">
			<h1 class="text-2xl font-bold text-gray-800">Meus process</h1>
			<button
				class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
			>
				+ Novo Processo
			</button>
		</div>

		<div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							ID
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Nome da Empresa
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Tipo
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Status
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Ações
						</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr
						v-for="processo in process"
						:key="processo.id"
						class="hover:bg-gray-50"
					>
						<td
							class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
						>
							{{ processo.id }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
							{{ processo.name }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
							{{ processo.type }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<span
								:class="[
									'px-2 py-1 text-xs font-semibold rounded-full',
									getStatusColor(processo.status).color,
								]"
							>
								{{ getStatusColor(processo.status).text }}
							</span>
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
							<button class="text-emerald-600 hover:text-emerald-900 mr-3">
								Editar
							</button>
							<button class="text-red-600 hover:text-red-900">Excluir</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
