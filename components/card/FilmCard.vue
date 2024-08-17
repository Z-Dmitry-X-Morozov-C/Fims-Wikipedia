<!-- сделать карточку для фильмов -->
<template>
  <div class="conteiner-card">
    <div class="conteiner-card__img">
      <img class="img" alt="poster" src="/assets/img/DQXQqTfX4AEHXGo 1.png" />
    </div>
    <div class="conteiner-card-text">
      <div class="conteiner-card-text__info">
        <h1>Гамильтон</h1>
        <p :style="{ marginTop: `12px` }">2015, мюзикл</p>
        <p :style="{ marginTop: `8px` }">РЕЖИССЕР: ТОМАС КАИЛ</p>
        <p :style="{ marginTop: `10px` }">
          АКТЕРЫ:
          <span>
            Лин-Мануэль Миранда, Лесли Одом мл., Давид Диггс, Филлипа Су, Рене
            Голдсберри, Окьерете Онаодован, Энтони Рамос, Джонатан Грофф,
            Кристофер Нил Джексон, Жасмин Сепас Джонс
          </span>
        </p>
      </div>
      <div class="conteiner-card-text__desc">
        <p :style="{ marginTop: `16px` }">
          Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её
          любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается
          с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый,
          кто попадает в эти стены, становится их рабом до конца жизни. Но Энди,
          обладающий живым умом и доброй душой, находит подход как к
          заключённым, так и к охранникам, добиваясь их особого к себе
          расположения.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
  font-size: 16px5;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>
