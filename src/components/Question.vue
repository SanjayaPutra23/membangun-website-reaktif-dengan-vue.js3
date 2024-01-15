<template>
	<section id="question-container">
		<h1 class="question">What is the chemical symbol for gold?</h1>
	</section>
	<section id="options-container">
		<div class="option">
			<p class="option-label">A.</p>
			<div class="option-value">Au</div>
		</div>
		<div class="option">
			<p class="option-label">B.</p>
			<div class="option-value">Ag</div>
		</div>
		<div class="option">
			<p class="option-label">C.</p>
			<div class="option-value">Al</div>
		</div>
	</section>
</template>

<style scoped>
#quiz-container {
	margin-top: 20px;
}

.question {
	font-size: 40px;
	margin-bottom: 20px;
}

.option {
	display: flex;
	align-items: center;
	cursor: pointer;
	height: 50px;
	margin-bottom: 10px;
}

.option-label {
	font-size: 30px;
	width: 50px;
	height: 50px;
	background-color: #a0ced9;
	display: flex;
	align-items: center;
	justify-content: center;
}

.option-value {
	background-color: #e2e2e2;
	width: 100%;
	font-size: 30px;
	padding: 0 20px;
	height: 50px;
	display: flex;
	align-items: center;
}
</style>
