<template>
  <main class="container">
    <header>
      <h1 id="title">Quizes</h1>
      <input id="search-input" type="text" name="" placeholder="Search..." />
    </header>
    <section id="quiz-container">
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="programming"
        />
        <div class="card-text">
          <h2>Programming</h2>
          <p>5 questions</p>
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
