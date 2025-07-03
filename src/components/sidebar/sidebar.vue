<script setup>
import FooterSidebar from "@/components/sidebar/footer-sidebar.vue"
import {
	House,
	User,
	FileText,
	Settings,
	Bell,
	LineChart,
} from "lucide-vue-next"
</script>

<template>
	<aside
		class="w-76 bg-white border-r border-neutral-200 p-4 flex flex-col h-screen"
	>
		<div class="mb-8 p-4">
			<h1 class="text-2xl font-bold text-emerald-700 flex items-center gap-3">
				<span class="bg-emerald-600 p-2 rounded-lg text-white">
					<LineChart class="h-6 w-6" />
				</span>

				<span class="text-lg font-bold leading-5">Central de Aprovações</span>
			</h1>
		</div>

		<nav class="flex-1">
			<ul class="space-y-2">
				<li>
					<a
						href="#"
						class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-50 text-neutral-700 hover:text-emerald-700 transition-colors group"
					>
						<House
							class="h-5 w-5 text-neutral-500 group-hover:text-emerald-600"
						/>
						<span class="font-medium">Home</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-50 text-neutral-700 hover:text-emerald-700 transition-colors group"
					>
						<User
							class="h-5 w-5 text-neutral-500 group-hover:text-emerald-600"
						/>
						<span class="font-medium">Perfil</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-50 text-neutral-700 hover:text-emerald-700 transition-colors group"
					>
						<FileText
							class="h-5 w-5 text-neutral-500 group-hover:text-emerald-600"
						/>
						<span class="font-medium">Documentos</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-50 text-neutral-700 hover:text-emerald-700 transition-colors group"
					>
						<Settings
							class="h-5 w-5 text-neutral-500 group-hover:text-emerald-600"
						/>
						<span class="font-medium">Configurações</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-50 text-neutral-700 hover:text-emerald-700 transition-colors group"
					>
						<Bell
							class="h-5 w-5 text-neutral-500 group-hover:text-emerald-600"
						/>
						<span class="font-medium">Notificações</span>
						<span
							class="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full"
							>3</span
						>
					</a>
				</li>
			</ul>
		</nav>

		<FooterSidebar />
	</aside>
</template>
