import { defineStore } from "pinia";
import { ref } from "vue";

export const useCardStore = defineStore("cardStore", () => {
  const movies = ref([]);

  const getMovies = () => movies.value;

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://mashroom-movies-api.netlify.app/api/movies"
      );
      const data = await response.json();
      movies.value = data.value;
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };
  return {  movies, fetchMovies, getMovies };
});
