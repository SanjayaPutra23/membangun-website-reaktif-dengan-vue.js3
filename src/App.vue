<script setup>
import { ref, watch } from "vue";
import srcQuiz from "./data/quizes.json";

import QuizCard from "./components/QuizCard.vue";

const quizes = ref(srcQuiz);
const search = ref("");

watch(search, () => {
  quizes.value = srcQuiz.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <main class="container">
    <header>
      <h1 id="title">Quizes</h1>
      <input
        v-model.trim="search"
        id="search-input"
        type="text"
        name=""
        placeholder="Search..."
      />
    </header>
    <section id="quiz-container">
      <!-- <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="programming" />
        <div class="card-text">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }} Questions</p>
        </div>
      </div> -->
      <QuizCard v-for="quiz in quizes" :key="quiz.id" />
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  font-weight: bold;
  margin-right: 30px;
}

#search-input {
  border: none;
  background-color: #c9c9c9d8;
  padding: 10px;
  border-radius: 5px;
}

#quiz-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>
