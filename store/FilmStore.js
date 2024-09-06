import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilmStore = defineStore("filmStore", () => {
  const movies = ref();
  
  function setMovies(value) {
    movies.value = value;
  }

  function getMovies() {
    computed(() => movies.value)
  }

  return { movies, setMovies, getMovies };
});
