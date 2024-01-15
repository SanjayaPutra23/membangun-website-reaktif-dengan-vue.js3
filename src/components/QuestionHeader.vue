<script setup>
import { defineProps } from 'vue';

const { questionStatus } = defineProps(['questionStatus']);
</script>

<template>
	<header>
		<h4>Questions {{ questionStatus }}</h4>
		<div class="bar">
			<div class="completion"></div>
		</div>
	</header>
</template>

<style scoped>
header {
	margin-top: 20px;
}
header h4 {
	font-size: 30px;
}
.bar {
	width: 100%;
	height: 50px;
	border: 3px solid #adf7b6;
}

.completion {
	height: 100%;
	width: 30%;
	background-color: #adf7b6;
}
</style>
