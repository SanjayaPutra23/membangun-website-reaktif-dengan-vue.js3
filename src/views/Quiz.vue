<script setup>
import Question from '@/components/Question.vue';
import QuestionHeader from '@/components/QuestionHeader.vue';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
const questionStatus = ref(
	`${currentQuestionIndex.value + 1}/${quiz.questions.length}`
);

watch(
	() => currentQuestionIndex.value,
	() => {
		questionStatus.value = `${currentQuestionIndex.value + 1}/${
			quiz.questions.length
		}`;
	}
);

watch(currentQuestionIndex, () => {
	questionStatus.value = `${currentQuestionIndex.value + 1}/${
		quiz.questions.length
	}`;
});
</script>
<template>
	<QuestionHeader :questionStatus="questionStatus" />
	<Question :question="quiz.questions[currentQuestionIndex]" />
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
</template>

<style scoped></style>
