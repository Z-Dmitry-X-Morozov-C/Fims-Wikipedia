<!-- реализовать карточки с фильмов внутри этого компонента -->
<template>
  <div class="content-box">
    <FilmCard  v-for="movie in movies" :key="movie.id" :movie="movie"/>
  </div>
</template>

<script setup>
import FilmCard from "./card/FilmCard.vue";
import { useFilmStore } from "../../store/FilmStore";
import axios from "axios";
import { onMounted } from "vue";

const movieStore = useFilmStore();

const movies = computed(() => movieStore.movies);

const fetchMovies = async () => {
  try {
    const response = await axios.get(
      "https://mashroom-movies-api.netlify.app/api/movies"
    );
    movieStore.setMovies(response.data);
    console.log("succ fetch");
  } catch (error) {
    console.error("Error fetching:", error);
  }
};

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
