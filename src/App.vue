<template>
  <TheHeader class="mb-4" />
  <main class="flex justify-center p-4">
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';

import TheHeader from '@/components/TheHeader.vue';
</script>

<style>

</style>
