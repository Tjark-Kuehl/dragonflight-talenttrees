import { defineStore } from 'pinia';
import { reactive } from 'vue';

import type { Talent } from '@/types/Talent';

export const usePointsStore = defineStore({
  id: 'points',
  state: () => ({
    allocatedPoints: reactive<Record<number, number>>({}),
    maxPointsCount: 31,
  }),
  getters: {
    allocatedPointsCount: (state) => Object.values(state.allocatedPoints).reduce((pv, cv) => pv + cv, 0),
  },
  actions: {
    allocatePoint(talent: Talent) {
      if (typeof this.allocatedPoints[talent.id] === 'undefined') {
        this.allocatedPoints[talent.id] = 0;
      }

      const calculatedValue = this.allocatedPoints[talent.id] + 1;

      if (talent.pointsMax < calculatedValue) {
        return;
      }

      this.allocatedPoints[talent.id] = calculatedValue;
    },
    unallocatePoint(talent: Talent) {
      if (typeof this.allocatedPoints[talent.id] === 'undefined') {
        this.allocatedPoints[talent.id] = 0;
      }

      const calculatedValue = this.allocatedPoints[talent.id] - 1;
      if (calculatedValue < 0) {
        return;
      }

      this.allocatedPoints[talent.id] = calculatedValue;
    },
  },
});
