<template>
  <div class="preloader">
    <div>
      <div class="preload__red"></div>
      <div class="preload__black"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>

.preloader {
  display: flex;
  justify-content: center;
  margin-top: 218px;  
}

.preload__black {
  position: absolute;
  border: 3px solid transparent;
  border-radius: 50% 50%;
  border-right: 3px solid rgb(0, 0, 0);
  border-bottom: 3px solid black;
  width: 98px;
  height: 98px;
  animation: rotate-black 1s linear infinite;
}

.preload__red {
  position: absolute;
  height: 78px;
  width: 78px;
  border: 3px solid transparent;
  border-radius: 50% 50%;
  border-right: 3px solid red;
  border-bottom: 3px solid red;
  animation: rotate-red 1s linear infinite;

}

@keyframes rotate-black {
  form {
    transform: rotate(0);
  }

  to {
    transform: rotate(-360deg);
  }
}

@keyframes rotate-red {
  form {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
