<template>
  <Tooltip
    class="w-16"
  >
    <button class="flex relative rounded-sm border-yellow-500 justify-start border-2 cursor-pointer w-12">
      <img
        class="flex"
        :src="imageUrl"
      >
      <span class="absolute right-0.5 text-black bottom-0">1</span>
    </button>
    <template #popper>
      <p class="font-bold mb-1">
        {{ name }}
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

<script>

import {
  Tooltip,
} from 'floating-vue'
import { computed } from 'vue';


export default {
  components: {
      Tooltip
  },
  
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
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
  setup(props) {
    return {
      formattedDescription: computed(() => props.description.split(".").filter(desc => desc.length > 0))
    };
  },
}

</script>