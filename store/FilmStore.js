import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilmStore = defineStore("filmStore", () => {
  const movies = ref([]);

  const setMovies = (value) => {
    movies.value = value;
  };


  return { movies, setMovies};
});
