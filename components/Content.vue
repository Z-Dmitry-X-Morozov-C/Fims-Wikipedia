<!-- реализовать карточки с фильмов внутри этого компонента -->
<template>
  <div class="content-box">
    <FilmCard />
    <FilmCard />
  </div>
</template>

<script setup>
import FilmCard from "./card/FilmCard.vue";
</script>

<style scoped>
.content-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 31px;
  gap: 24px;
}
</style>
