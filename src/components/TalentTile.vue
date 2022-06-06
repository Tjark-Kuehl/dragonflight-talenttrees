<template>
  <Tooltip
    class="w-20 select-none"
    @click="selectable ? $emit('click', talent) : ''"
    @contextmenu.prevent="selectable ? $emit('rightclick', talent) : ''"
  >
    <template #popper>
      <p class="font-bold -mb-1">
        {{ talent.name }}
      </p>
      <p class="mb-1">
        Rank: {{ pointDisplay }}
      </p>
      <p
        v-for="(desc, index) of formattedDescription"
        :key="index"
        class="text-yellow-500"
      >
        {{ desc }}.
      </p>
    </template>
    <button
      class="flex relative justify-start border-2 cursor-pointer w-12"
      :class="[tileStyle, tileTypeStyle]"
    >
      <img
        class="flex"
        :class="tileTypeStyle"
        :src="talent.imageUrl"
      >
      <span class="absolute right-0.5 text-white bottom-0">{{ pointDisplay }}</span>
    </button>
  </Tooltip>
</template>

<script lang="ts" setup>
import {
  Tooltip,
} from 'floating-vue';
import { computed } from 'vue';

import type { Talent } from '@/types/Talent';
import { TalentType } from '@/types/TalentType';

interface Props {
  talent: Talent,
  pointsAllocated: number,
  selectable: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  pointsAllocated: 0,
});

const emit = defineEmits(['click', 'rightclick']);

const tileStyle = computed(() => {
  if (!props.selectable) {
    return 'border-gray-500 grayscale';
  }

  if (props.talent.pointsMax === props.pointsAllocated) {
    return 'border-yellow-500';
  }

  return 'border-green-500';
});

const tileTypeStyle = computed(() => {
  if (props.talent.type === TalentType.Improvement) {
    return 'rounded-full';
  }

  return 'rounded-sm';
});

const formattedDescription = computed(() => {
  let text: string;

  if (Array.isArray(props.talent.description)) {
    const index = props.pointsAllocated > 0 ? props.pointsAllocated - 1 : 0;
    text = props.talent.description[index];
  } else {
    text = props.talent.description;
  }

  return text.split('.').filter((desc) => desc.length > 0);
});

const pointDisplay = computed(() => (
  props.talent.pointsMax !== 0
    ? `${props.pointsAllocated}/${props.talent.pointsMax}`
    : ''
));
</script>
