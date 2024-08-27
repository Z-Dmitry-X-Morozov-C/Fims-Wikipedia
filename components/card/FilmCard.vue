<!-- сделать карточку для фильмов -->
<template>
  <div class="conteiner-card">
    <div class="conteiner-card__img">
      <img class="img" alt="poster" src="/assets/img/DQXQqTfX4AEHXGo 1.png" />
    </div>
    <div class="conteiner-card-text">
      <div class="conteiner-card-text__info">
        <h1>{{ movie.title }}</h1>
        <p class="conteiner-card-text__info_year-genres">
          {{ movie.year }} {{ movie.genres }}
        </p>
        <p class="conteiner-card-text__info_director">
          РЕЖИССЕР:{{ movie.directors }}
        </p>
        <p class="conteiner-card-text__info_actors">
          АКТЕРЫ:
          <span>
            {{ movie.actors }}
          </span>
        </p>
      </div>
      <div class="conteiner-card-text__desc">
        <p>{{ movie.description }}</p>
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

const actors = computed(() => movie.actors);
</script>

<style scoped>
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
  margin-top: 12px;
}

.conteiner-card-text__info_director {
  margin-top: 8px;
}

.conteiner-card-text__info_actors {
  margin-top: 10px;
}
</style>
