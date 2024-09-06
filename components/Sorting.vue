<!-- Двусторонее привязывание (viewModel) -->
<template>
  <form class="sorting-wrapper">
    <h1>Фильмы</h1>
    <div class="sorting-wrapper__checkboxes">
      <label class="text-form">
        <input
          type="radio"
          id="sortByName"
          class="real-checkbox"
          name="drone"
        />
        <span class="custom-checkbox"></span>
        Отсортировать по названию
      </label>
      <label class="text-form">
        <input
          type="radio"
          id="sortByYear"
          class="real-checkbox"
          name="drone"
        />
        <span class="custom-checkbox"></span>
        Отсортировать по году
      </label>
    </div>
    <hr />
  </form>
</template>

<script setup></script>

<style scoped>
h1 {
  font-weight: normal;
}

.sorting-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.text-form {
  color: #c4c4c4;
  font-size: 18px;
  cursor: pointer;
}

.sorting-wrapper__checkboxes {
  display: flex;
  gap: 32px;
}

.real-checkbox {
  position: absolute;
  width: 0;
  height: 0;
  z-index: 0;
}

.custom-checkbox {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: sub;
  border: 1px solid #c4c4c4;
  transition: border 0.2s ease;
}

.custom-checkbox::before {
  content: "";
  display: inline-block;
  width: 21px;
  height: 21px;
  background-image: url(../assets/img/Path.svg);
  background-size: contain;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 0.2s ease-in-out;
  background-repeat: no-repeat;
}

.real-checkbox:checked + .custom-checkbox::before {
  border-color: transparent;
  transform: translate(-50%, -50%) scale(1);
  background-color: #ff5252da;
  border: 1px solid #ff0000;
}
</style>
