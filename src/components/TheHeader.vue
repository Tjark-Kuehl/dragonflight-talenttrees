<template>
  <header class="flex items-center p-2 w-full h-10 text-white bg-gray-600">
    <span>
      Allocated Points:
      {{ store.allocatedPointsCount }}
      /
      {{ store.maxPointsCount }}
    </span>
  </header>
</template>

<script lang="ts" setup>
import { usePointsStore } from '@/stores/points';

const store = usePointsStore();
</script>
