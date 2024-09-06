<template>
  <main>
    <BackBtn />
    <FilmDetails 
    :movie="movie.data"
    />
  </main>
</template>

<script setup>
import { useRoute } from "#app";
import FilmDetails from "~/components/card/FilmDetails.vue";

const { id } = useRoute().params;
const uri = "https://mashroom-movies-api.netlify.app/api/movie/" + id

const {data: movie} = await useFetch(uri, {key: id})
console.log(movie);
</script>

<style scoped></style>