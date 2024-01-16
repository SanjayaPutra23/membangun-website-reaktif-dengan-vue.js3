<script setup>
import Question from '@/components/Question.vue';
import QuestionHeader from '@/components/QuestionHeader.vue';
import { useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);

// const questionStatus = ref(
// 	`${currentQuestionIndex.value + 1}/${quiz.questions.length}`
// );

// watch(
// 	() => currentQuestionIndex.value,
// 	() => {
// 		questionStatus.value = `${currentQuestionIndex.value + 1}/${
// 			quiz.questions.length
// 		}`;
// 	}
// );

// watch(currentQuestionIndex, () => {
// 	questionStatus.value = `${currentQuestionIndex.value + 1}/${
// 		quiz.questions.length
// 	}`;
// });

const questionStatus = computed(() => {
	return `${currentQuestionIndex.value + 1}/${quiz.questions.length}`;
});
const barPercentage = computed(
	() => `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`
);

const onOptionSelected = (option) => {
	if (option.correct) {
		numberOfCorrectAnswers.value++;
	}
	currentQuestionIndex.value++;
};
</script>
<template>
	<QuestionHeader
		:questionStatus="questionStatus"
		:barPercentage="barPercentage"
	/>
	<Question
		:question="quiz.questions[currentQuestionIndex]"
		@selectOption="onOptionSelected"
	/>
	<button
		@click="currentQuestionIndex--"
		:disabled="currentQuestionIndex === 0"
	>
		Previous
	</button>
	<button
		@click="currentQuestionIndex++"
		:disabled="currentQuestionIndex === quiz.questions.length - 1"
	>
		Next
	</button>
	<p>{{ numberOfCorrectAnswers }} / {{ quiz.questions.length }}</p>
</template>

<style scoped></style>
