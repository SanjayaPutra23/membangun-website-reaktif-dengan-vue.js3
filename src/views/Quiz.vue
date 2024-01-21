<script setup>
import QuizHeader from '@/components/QuizHeader.vue';
import QuizContent from '@/components/QuizContent.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import quizes from '../data/quizes.json';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);

const numberOfCorrectAnswer = ref(0);
const currentQuestionIndex = ref(0);
const questionPage = computed(() => {
	return `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`;
});
const barPercentage = computed(() => {
	return `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`;
});

function onSelectOption(option) {
	if (option.correct) {
		numberOfCorrectAnswer.value++;
	}
	currentQuestionIndex.value++;
}
</script>

<template>
	<QuizHeader :questionPage="questionPage" :barPercentage="barPercentage" />
	<QuizContent
		:question="quiz.questions[currentQuestionIndex]"
		@selectOption="onSelectOption"
	/>
	<button
		@click="currentQuestionIndex++"
		:disabled="currentQuestionIndex === quiz.questions.length - 1"
	>
		Next
	</button>
</template>

<style scoped></style>
