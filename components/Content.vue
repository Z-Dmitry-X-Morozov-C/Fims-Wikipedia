<template>
  <div>
    <PreloadAn v-if="loading" />
  </div>
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
import PreloadAn from "./PreloadAn.vue";
import { useFilmStore } from "../../store/FilmStore";
import { onMounted, ref } from "vue";

const loading = ref(true);
const responseData = ref();
const filmStore = useFilmStore();
const moviesArr = computed(() => filmStore.movies);

async function fetchMovies() {
  try {
    const data = await fetch(
      "https://mashroom-movies-api.netlify.app/api/movies"
    );
    responseData.value = await data.json();
    filmStore.setMovies(responseData.value);
  } catch (error) {
    console.error("Error fetching:", error);
  } finally {
    loading.value = false;
  }
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
