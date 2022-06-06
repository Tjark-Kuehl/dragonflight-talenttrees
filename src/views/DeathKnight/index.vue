<template>
  <div class="relative flex flex-col">
    <GridBackground class="absolute left-0 right-0 top-0 bottom-0 pb-10 pl-10 pr-16" />
    <div
      v-for="(row, rowIndex) in talents"
      :key="rowIndex"
      class="grid grid-cols-11 mb-8"
    >
      <template
        v-for="talent in row"
        :key="talent.id"
      >
        <TalentTile
          :class="talent.classes"
          :talent="talent"
          :points-allocated="
            typeof store.allocatedPoints[talent.id] === 'undefined'
              ? 0
              : store.allocatedPoints[talent.id]"
          :selectable="
            typeof talent.requiredPoints === 'undefined'
              ? true
              : store.allocatedPointsCount >= talent.requiredPoints"
          @click="store.allocatePoint"
          @rightclick="store.unallocatePoint"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GridBackground from '@/components/GridBackground.vue';
import TalentTile from '@/components/TalentTile.vue';
import { usePointsStore } from '@/stores/points';

import { talents } from './talents';

const store = usePointsStore();
</script>
