<script setup>
import Question from '@/components/Question.vue';
import QuestionHeader from '@/components/QuestionHeader.vue';
import Result from '@/components/Result.vue';

import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

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

	if (currentQuestionIndex.value === quiz.questions.length - 1) {
		showResults.value = true;
		return;
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
		v-if="!showResults"
		:question="quiz.questions[currentQuestionIndex]"
		@selectOption="onOptionSelected"
	/>
	<Result
		v-else
		:numberOfCorrectAnswers="numberOfCorrectAnswers"
		:quizQuestionsLength="quiz.questions.length"
	/>
</template>

<style scoped></style>
