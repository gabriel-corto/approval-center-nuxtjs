<script setup lang="ts">
const { totalProcess } = defineProps<{ totalProcess: number }>()
</script>

<template>
	<div class="mt-4 text-gray-600">
		<p>
			Total de <strong> {{ totalProcess }}</strong> processos
		</p>
	</div>
</template>
