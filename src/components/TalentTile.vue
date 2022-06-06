<template>
  <Tooltip
    class="w-20 select-none"
    @click="$emit('click', talent.id)"
    @contextmenu.prevent="$emit('rightclick', talent.id)"
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
      class="flex relative border-yellow-500 justify-start border-2 cursor-pointer w-12"
      :class="talentStyle"
    >
      <img
        class="flex"
        :class="[{'grayscale': !selected}, talentStyle]"
        :src="talent.imageUrl"
      >
      <span class="absolute right-0.5 text-black bottom-0">{{ pointDisplay }}</span>
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
}

const props = withDefaults(defineProps<Props>(), {
  pointsAllocated: 0,
});

const emit = defineEmits(['click', 'rightclick']);

const talentStyle = computed(() => {
  if (props.talent.type === TalentType.Improvement) {
    return 'rounded-full';
  }

  return 'rounded-sm';
});

const selected = computed(() => props.pointsAllocated > 0 || props.talent.pointsMax === props.pointsAllocated);
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
