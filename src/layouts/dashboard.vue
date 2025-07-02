<script setup lang="ts">
import Sidebar from "@/components/sidebar/sidebar.vue"
</script>

<template>
	<div class="min-h-screen flex flex-col">
		<div class="flex flex-1">
			<Sidebar />

			<main class="flex-1 p-6 bg-neutral-100">
				<slot />
			</main>
		</div>
	</div>
</template>
