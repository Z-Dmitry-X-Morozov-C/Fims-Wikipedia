<template>
  <div class="content-box">
    <FilmCard
      v-for="(movie, index) in moviesArr?.data"
      :key="index"
      :movie="movie"
    />
  </div>
</template>

<script setup>
import FilmCard from "./card/FilmCard.vue";
import { useFilmStore } from "../../store/FilmStore";
import { onMounted } from "vue";

const moviesArr = computed(() => filmStore.movies);
const responseData = ref();
const filmStore = useFilmStore();

async function fetchMovies() {
  try {
    const data = await fetch("http://localhost:9000/api/movies/");
    responseData.value = await data.json();
    filmStore.setMovies(responseData.value);
  } catch (error) {
    console.error("Error fetching:", error);
  }
  return;
}

onMounted(fetchMovies);
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
