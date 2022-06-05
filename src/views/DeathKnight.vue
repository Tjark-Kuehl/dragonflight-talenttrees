<template>
  <div class="flex flex-col">
    <div
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      class="flex mb-4"
    >
      <template
        v-for="talent in row"
        :key="talent.id"
      >
        <TalentTile
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

import TalentTile from '@/components/TalentTile.vue';
import type { Talent } from '@/types/Talent';
import { TalentType } from '@/types/TalentType';

const rows: Talent[][] = [
  [
    {
      id: 1,
      type: TalentType.Ability,
      name: 'Chains of Ice',
      description: 'Shackles the target with frozen chains, reducing movement speed by 70% for 8 seconds.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_chainsofice.jpg',
      pointsMax: 1,
    },
    {
      id: 2,
      type: TalentType.Ability,
      name: 'Death Strike',
      description: `Focuses dark power into a strike that deals Physical 
                        damage and heals you for a percentage of all damage taken in the last 5 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_butcher2.jpg',
      pointsMax: 1,
    },
    {
      id: 3,
      type: TalentType.Ability,
      name: 'Raise Dead',
      description: `Raises a ghoul to fight by your side. 
                        You can have a maximum of one ghoul at a time. Lasts 1 minute.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_pet_ghoul.jpg',
      pointsMax: 1,
    },
  ],
  [
    {
      id: 4,
      type: TalentType.Ability,
      name: 'Mind Freeze',
      description: `Smash the target's mind with cold, interrupting spellcasting and 
                        preventing any spell in that school from being cast for 3 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_mindfreeze.jpg',
      pointsMax: 1,
      // requiresOr: [1],
    },
    {
      id: 5,
      type: TalentType.Ability,
      name: 'Anti-Magic Shell',
      description: `Surrounds you in an Anti-Magic Shell for 5 sec, absorbing a large amount of magic damage and 
                        preventing application of harmful magical effects. Damage absorbed generates Runic Power.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_antimagicshell.jpg',
      pointsMax: 1,
    },
    {
      id: 6,
      type: TalentType.Improvement,
      name: 'Improved Death and Decay [NNF]',
      description: `Blood: Heart Strike hits 3 additional enemies while you remain in Death and Decay. 
                        Frost: Obliterate hits 1 additional enemy while you remain in Death and Decay. 
                        Unholy: Scourge Strike hits 5 additional enemies while you remain in Death and Decay.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathanddecay.jpg',
      pointsMax: 1,
    },
  ],
  [
    {
      id: 7,
      type: TalentType.Ability,
      name: 'Icebound Fortitude',
      description: `Your blood freezes, granting immunity to Stun effects and 
                        reducing all damage you take by 30% for 8 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_mindfreeze.jpg',
      pointsMax: 1,
    },
    {
      id: 8,
      type: TalentType.Improvement,
      name: 'Blood Scent',
      description: 'Increases Leech by 3%.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargepositive.jpg',
      pointsMax: 1,
    },
    {
      id: 9,
      type: TalentType.Improvement,
      name: 'Veteran of the Third War',
      description: [
        'Blood: Stamina increased by 10%. Frost & Unholy: Stamina increased by 5%.',
        'Blood: Stamina increased by 20%. Frost & Unholy: Stamina increased by 10%.',
      ],
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_misc_warsongfocus.jpg',
      pointsMax: 2,
    },
    {
      id: 10,
      type: TalentType.Improvement,
      name: 'Suppression',
      description: 'Increases Avoidance by 3%.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargepositive.jpg',
      pointsMax: 1,
    },
    {
      id: 11,
      type: TalentType.Improvement,
      name: 'Brittle',
      description: `Your diseases have a chance to weaken your enemy causing your 
                        attacks against them to deal 6% increased damage for 5 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_explode_ghoul.jpg',
      pointsMax: 1,
    },
  ],
];

const allocatedPoints = reactive<Record<number, number>>({});

const allocatePoint = (id: number) => {
  if (typeof allocatedPoints[id] === 'undefined') {
    allocatedPoints[id] = 0;
  }

  const calculatedValue = allocatedPoints[id] + 1;
  const selectedTalent = flatten(rows).filter((talent) => talent.id === id).pop();

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
