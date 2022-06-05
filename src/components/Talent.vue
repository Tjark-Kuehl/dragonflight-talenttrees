<template>
  <Tooltip
    class="w-16"
    @click="$emit('click', id)"
    @contextmenu.prevent="$emit('rightclick', id)"
  >
    <button class="flex relative rounded-sm border-yellow-500 justify-start border-2 cursor-pointer w-12">
      <img
        class="flex"
        :class="{'grayscale': !selected}"
        :src="imageUrl"
      >
      <span class="absolute right-0.5 text-black bottom-0">{{ pointDisplay }}</span>
    </button>
    <template #popper>
      <p class="font-bold mb-1">
        {{ name }}
        {{ pointDisplay }}
      </p>
      <p
        v-for="(desc, index) of formattedDescription"
        :key="index"
      >
        {{ desc }}.
      </p>
    </template>
  </Tooltip>
</template>

<script lang="ts">

import {
  Tooltip,
} from 'floating-vue'
import { computed } from 'vue';


export default {
  components: {
      Tooltip
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: [String, Array],
      required: true
    }, 
    imageUrl: {
      type: String,
      required: true
    },
    pointsAllocated: {
      type: Number,
      default: 0
    },
    pointsMax: {
      type: Number,
      required: true
    }
  },

  emits: ['click', 'rightclick'],

  setup(props) {
    return {
      selected: computed(() => props.pointsAllocated > 0 || props.pointsMax === props.pointsAllocated),
      formattedDescription: computed(() => {
        let text: string;

        if(Array.isArray(props.description)) {
          const idx = props.pointsAllocated > 0 ? props.pointsAllocated - 1 : 0;
          text = props.description[idx];
        } else {
          text = props.description;
        }

        return text.split(".").filter(desc => desc.length > 0)
      }),
      pointDisplay: computed(() => props.pointsMax !== 0 ? `${props.pointsAllocated}/${props.pointsMax}` : '')
    };
  },
}

</script>