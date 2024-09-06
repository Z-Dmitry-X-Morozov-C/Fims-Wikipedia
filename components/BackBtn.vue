<template>
  <div>
    <NuxtLink to="/">
      <button class="btn">
        <img src="/assets/img/arrow_back_ios-24px.svg" alt="arrow" />
        <span>Назад к списку</span>
      </button>
    </NuxtLink>
    <hr />
  </div>
</template>

<script setup></script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.btn {
  display: flex;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

span {
  text-decoration: none;
  color: #ff5252c7;
  font-size: 20px;
}
</style>
