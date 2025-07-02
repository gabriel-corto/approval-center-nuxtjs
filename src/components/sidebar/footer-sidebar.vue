<script setup>
import { HelpCircle, LogOut } from "lucide-vue-next"
</script>

<template>
	<div class="mt-auto pt-4 border-t border-neutral-100">
		<ul class="space-y-2">
			<li>
				<a
					href="#"
					class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-50 text-neutral-700 hover:text-emerald-700 transition-colors group"
				>
					<HelpCircle
						class="h-5 w-5 text-neutral-500 group-hover:text-emerald-600"
					/>
					<span class="font-medium">Ajuda</span>
				</a>
			</li>
			<li>
				<a
					href="#"
					class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-50 text-neutral-700 hover:text-emerald-700 transition-colors group"
				>
					<LogOut
						class="h-5 w-5 text-neutral-500 group-hover:text-emerald-600"
					/>
					<span class="font-medium">Sair</span>
				</a>
			</li>
		</ul>
	</div>
</template>
