<script setup>
import Question from '@/components/Question.vue';
import QuestionHeader from '@/components/QuestionHeader.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
</script>
<template>
	<QuestionHeader />
	<Question :question="quiz.questions[currentQuestionIndex]" />
</template>

<style scoped></style>
