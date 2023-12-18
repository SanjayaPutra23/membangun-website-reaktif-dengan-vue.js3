<script setup>
import { ref } from "vue";
import srcQuiz from "./data/quizes.json";

const quizes = ref(srcQuiz);
</script>

<template>
  <main class="container">
    <header>
      <h1 id="title">Quizes</h1>
      <input id="search-input" type="text" name="" placeholder="Search..." />
    </header>
    <section id="quiz-container">
      <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="programming" />
        <div class="card-text">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }} Questions</p>
        </div>
      </div>
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

.card {
  width: 270px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px #00000033;
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}
.card .card-text {
  padding: 0 15px;
}

.card .card-text h2 {
  font-weight: bold;
}
</style>
