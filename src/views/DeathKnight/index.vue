<template>
  <div class="relative flex flex-col">
    <GridBackground class="absolute left-0 right-0 top-0 bottom-0 pb-10 pl-10 pr-14" />
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
          :points-allocated="typeof allocatedPoints[talent.id] === 'undefined' ? 0 : allocatedPoints[talent.id]"
          @click="allocatePoint"
          @rightclick="unallocatePoint"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { flatten } from 'lodash-es';
import { reactive } from 'vue';

import GridBackground from '@/components/GridBackground.vue';
import TalentTile from '@/components/TalentTile.vue';

import { talents } from './talents';

const allocatedPoints = reactive<Record<number, number>>({});

const allocatePoint = (id: number) => {
  if (typeof allocatedPoints[id] === 'undefined') {
    allocatedPoints[id] = 0;
  }

  const calculatedValue = allocatedPoints[id] + 1;
  const selectedTalent = flatten(talents).filter((talent) => talent.id === id).pop();

  if (typeof selectedTalent === 'undefined' || selectedTalent.pointsMax < calculatedValue) {
    return;
  }

  allocatedPoints[id] = calculatedValue;
};

const unallocatePoint = (id: number) => {
  if (typeof allocatedPoints[id] === 'undefined') {
    allocatedPoints[id] = 0;
  }

  const calculatedValue = allocatedPoints[id] - 1;
  if (calculatedValue < 0) {
    return;
  }

  allocatedPoints[id] = calculatedValue;
};
</script>
