<template>
  <Header />
  <main>
    <Sorting />
    <Content />
    <div></div>
  </main>
</template>

<script setup>
import Sorting from "~/components/Sorting.vue";
import Header from "~/components/Header.vue";
import Content from "~/components/Content.vue";

import { useCardStore } from "../store/CardStore.js";

const cardMovie = useCardStore();
</script>

<style scoped></style>
