<template>
  <Sorting
    v-if="responseData"
    :movie="responseData"
    @send-sort-by="sentedEmit"
  />
  <div>
    <PreloadAn v-if="loading" />
  </div>
  <div if="!loading" class="content-box">
    <FilmCard
      v-for="(movie, index) in responseData?.data"
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

async function fetchMovies() {
  try {
    const data = await fetch(
      "https://mashroom-movies-api.netlify.app/api/movies"
    );
    responseData.value = await data.json();
    filmStore.setMovies(responseData.value);
    // console.log(responseData.value);
  } catch (error) {
    console.error("Error fetching:", error);
  } finally {
    loading.value = false;
  }
}

onMounted(fetchMovies);

function sentedEmit(a) {
  responseData.value = a;
  console.log(responseData);
}
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
