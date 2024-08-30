<!-- сделать карточку для фильмов -->
<template>
  <div class="conteiner-card">
    <div class="conteiner-card__img">
      <img class="img" alt="poster" :src="poster" />
    </div>
    <div class="conteiner-card-text">
      <div class="conteiner-card-text__info">
        <h1>{{ movie.title }}</h1>
        <div class="conteiner-card-text__info_year-genres">
          <p>
            {{ movie.year + ", " }}
          </p>
          <p>
            {{ movie.genres.join(", ") }}
          </p>
        </div>

        <p></p>
        <p v-if="movie.directors" class="conteiner-card-text__info_director">
          {{ " РЕЖИССЕР: " + movie.directors }}
        </p>
        <p v-else="movie.directors" class="conteiner-card-text__info_director">
          {{ " РЕЖИССЕР: " + "Нет данных" }}
        </p>

        <p class="conteiner-card-text__info_actors">
          АКТЕРЫ:
          <span>
            {{ movie?.actors?.join(", ") }}
          </span>
        </p>
      </div>
      <div class="conteiner-card-text__desc">
        <p v-if="movie.description">{{ movie.description }}</p>
        <p v-else="movie.description">Без описания</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import { defineProps } from "vue";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const posterFetched = props.movie.poster;
const posterURL = "https://kinopoiskapiunofficial.tech/images/posters/kp/";

const posterMatch = posterFetched.match(/\/posters\/(\d+)\.jpg/);
const posterIndex = posterMatch[1];
const poster = posterURL + posterIndex + ".jpg";

</script>

<style scoped>
.img {
  max-width: 112px;
}

.conteiner-card {
  display: flex;
  background-color: #4d4747;
  gap: 24px;
  box-shadow: 0px 5px 14px black;
  transition: 0.1s ease;
}

.conteiner-card:hover {
  transform: translateY(-8px);
}

.conteiner-card__img {
  padding: 17px 28px;
  background: #c4c4c4;
}

.conteiner-card-text {
  margin: 32px 24px 32px 0;
}

.conteiner-card__info > h1 {
  font-size: 36px;
  margin-top: 32px;
}

p {
  color: #988f8f;
  font-size: 12px;
}

.conteiner-card-text__desc > p {
  color: white;
  margin-top: 16px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.conteiner-card-text__info_year-genres {
  display: flex;
  gap: 4px;
  margin-top: 12px;
}

.conteiner-card-text__info_director {
  margin-top: 8px;
}

.conteiner-card-text__info_actors {
  margin-top: 10px;
}
</style>
