import type { TalentMeta } from '@/types/TalentMeta';
import { TalentType } from '@/types/TalentType';

enum RowClasses {
  First = 'col-start-1 col-end-1',
  Second = 'col-start-2 col-end-2',
  Third = 'col-start-3 col-end-3',
  Fourth = 'col-start-4 col-end-4',
  Fifth = 'col-start-5 col-end-5',
  Sixth = 'col-start-6 col-end-6',
  Seventh = 'col-start-7 col-end-7',
  Eighth = 'col-start-8 col-end-8',
  Ninth = 'col-start-9 col-end-9',
  Tenth = 'col-start-10 col-end-10',
  Eleventh = 'col-start-11 col-end-11',
}

export const talents: TalentMeta[][] = [
  [
    {
      id: 1,
      type: TalentType.Ability,
      classes: RowClasses.Second,
      name: 'Chains of Ice',
      description: 'Shackles the target with frozen chains, reducing movement speed by 70% for 8 seconds.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_chainsofice.jpg',
      pointsMax: 1,
    },
    {
      id: 2,
      type: TalentType.Ability,
      classes: RowClasses.Sixth,
      name: 'Death Strike',
      description: `Focuses dark power into a strike that deals Physical 
                          damage and heals you for a percentage of all damage taken in the last 5 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_butcher2.jpg',
      pointsMax: 1,
    },
    {
      id: 3,
      type: TalentType.Ability,
      classes: RowClasses.Tenth,
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
      classes: RowClasses.Second,
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
      classes: RowClasses.Sixth,
      name: 'Anti-Magic Shell',
      description: `Surrounds you in an Anti-Magic Shell for 5 sec, absorbing a large amount of magic damage and 
                          preventing application of harmful magical effects. Damage absorbed generates Runic Power.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_antimagicshell.jpg',
      pointsMax: 1,
    },
    {
      id: 6,
      type: TalentType.Improvement,
      classes: RowClasses.Tenth,
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
      classes: RowClasses.Second,
      name: 'Icebound Fortitude',
      description: `Your blood freezes, granting immunity to Stun effects and 
                          reducing all damage you take by 30% for 8 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_iceboundfortitude.jpg',
      pointsMax: 1,
    },
    {
      id: 8,
      type: TalentType.Improvement,
      classes: RowClasses.Fourth,
      name: 'Blood Scent',
      description: 'Increases Leech by 3%.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargepositive.jpg',
      pointsMax: 1,
    },
    {
      id: 9,
      type: TalentType.Improvement,
      classes: RowClasses.Sixth,
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
      classes: RowClasses.Eighth,
      name: 'Suppression',
      description: 'Increases Avoidance by 3%.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargepositive.jpg',
      pointsMax: 1,
    },
    {
      id: 11,
      type: TalentType.Improvement,
      classes: RowClasses.Tenth,
      name: 'Brittle',
      description: `Your diseases have a chance to weaken your enemy causing your 
                          attacks against them to deal 6% increased damage for 5 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_explode_ghoul.jpg',
      pointsMax: 1,
    },
  ],
  [
    {
      id: 12,
      type: TalentType.Ability,
      classes: RowClasses.First,
      name: 'Blinding Sleet',
      description: `Targets in a cone in front of you are blinded, causing them to wander disoriented for 5 seconds. 
                      Damage may cancel the effect. When Blinding Sleet ends, enemies are slowed by 50% for 6 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_chillingblast.jpg',
      pointsMax: 1,
    },
    {
      id: 13,
      type: TalentType.Ability,
      classes: RowClasses.Third,
      name: 'Permafrost',
      description: 'Your auto attack damage grants you an absorb shield equal to 40% of the damage dealt.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/achievement_zone_frostfire.jpg',
      pointsMax: 1,
    },
    {
      id: 14,
      type: TalentType.Ability,
      classes: RowClasses.Fifth,
      name: 'Death Pact',
      description: `Create a death pact that heals you for 50% of your maximum health,
                      but absorbs incoming healing equal to 30% of your max health for 15 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathpact.jpg',
      pointsMax: 1,
    },
    {
      id: 15,
      type: TalentType.Ability,
      classes: RowClasses.Seventh,
      name: 'Wraith Walk',
      description: `Embrace the power of the Shadowlands, 
                      removing all root effects and increasing your movement speed by 70% for 4 seconds. 
                      Taking any action cancels the effect. While active, 
                      your movement speed cannot be reduced below 70%.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_helm_plate_raiddeathknight_p_01.jpg',
      pointsMax: 1,
    },
    {
      id: 16,
      type: TalentType.Ability,
      classes: RowClasses.Ninth,
      name: 'Sacrificial Pact',
      description: `Sacrifice your ghoul to deal Shadow damage to 
                      all nearby enemies and heal for 25% of your maximum health. 
                      Deals reduced damage beyond 8 targets.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_corpseexplode.jpg',
      pointsMax: 1,
    },
    {
      id: 17,
      type: TalentType.Ability,
      classes: RowClasses.Eleventh,
      name: 'Unholy Ground',
      description: 'Gain 5% Haste while you remain within your Death and Decay.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargenegative.jpg',
      pointsMax: 1,
    },
  ],
  [
    {
      id: 18,
      type: TalentType.Improvement,
      classes: RowClasses.Second,
      name: 'Merciless Strikes',
      description: ['Increases Critical Strike chance by 2%.', 'Increases Critical Strike chance by 4%.'],
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargepositive.jpg',
      pointsMax: 2,
    },
    {
      id: 19,
      type: TalentType.Ability,
      classes: RowClasses.Sixth,
      name: 'Anti-Magic Zone',
      description: `Places an Anti-Magic Zone that reduces spell damage taken by party or raid members by 20%. 
                      The Anti-Magic Zone lasts for 8 sec or until it absorbs a large amount of damage.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_antimagiczone.jpg',
      pointsMax: 1,
    },
    {
      id: 20,
      type: TalentType.Improvement,
      classes: RowClasses.Tenth,
      name: 'Might of Thassarian',
      description: ['Increases Strength chance by 2%.', 'Increases Strength chance by 4%.'],
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargepositive.jpg',
      pointsMax: 2,
    },
  ],
  [
    {
      id: 21,
      type: TalentType.Improvement,
      classes: RowClasses.First,
      name: 'Proliferating Chill',
      description: 'Chains of Ice affects 1 additional nearby enemy.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_chainsofice.jpg',
      pointsMax: 1,
    },
    {
      id: 22,
      type: TalentType.Ability,
      classes: RowClasses.Second,
      name: 'WIP',
      description: `Runic Empowerment: Each Runic Power you spend has a 2.0% chance to instantly grant you a Rune.
                    Runic Corruption: Each Runic Power you spend has a 1.6% chance to increase 
                    your Rune regeneration rate by 100% for 3 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargenegative.jpg',
      pointsMax: 1,
    },
    {
      id: 23,
      type: TalentType.Improvement,
      classes: RowClasses.Third,
      name: 'Anticipation',
      description: `Successfully interrupting an enemy with Mind Freeze 
                    grants 10 Runic Power and reduces its cooldown by 3 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_mindfreeze.jpg',
      pointsMax: 1,
    },
    {
      id: 24,
      type: TalentType.Ability,
      classes: RowClasses.Fifth,
      name: 'Asphyxiate',
      description: `Lifts the enemy target off the ground, crushing their 
                    throat with dark energy and stunning them for 5 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/ability_deathknight_asphixiate.jpg',
      pointsMax: 1,
    },
    {
      id: 25,
      type: TalentType.Ability,
      classes: RowClasses.Sixth,
      name: 'Death\'s Advance',
      description: `For 8 sec, your movement speed is increased by 30%, you cannot be slowed below 100% of 
                    normal speed, and you are immune to forced movement effects and knockbacks. 
                    Passive: You cannot be slowed below 70% of normal speed.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_demonicempathy.jpg',
      pointsMax: 1,
    },
    {
      id: 26,
      type: TalentType.Improvement,
      classes: RowClasses.Seventh,
      name: 'Anti-Magic Barrier',
      description: `Reduces the cooldown of Anti-Magic Shell by 20 sec and increases its 
                    duration and amount absorbed by 40%.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_antimagicshell.jpg',
      pointsMax: 1,
    },
    {
      id: 27,
      type: TalentType.Ability,
      classes: RowClasses.Ninth,
      name: 'Control Undead',
      description: 'Dominates the target undead creature up to level 61, forcing it to do your bidding for 5 minutes.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_bone_skull_01.jpg',
      pointsMax: 1,
    },
    {
      id: 28,
      type: TalentType.Ability,
      classes: RowClasses.Tenth,
      name: 'WIP',
      description: `Death's Reach: Increases the range of Death Grip by 10 yds. Killing an enemy that yields 
                    experience or honor resets the cooldown of Death Grip.
                    Grip of the Dead: Death and Decay reduces the movement speed of enemies within its area 
                    by 90%, decaying by 10% every seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargenegative.jpg',
      pointsMax: 1,
    },
    {
      id: 29,
      type: TalentType.Improvement,
      classes: RowClasses.Eleventh,
      name: 'Enfeeble',
      description: `Your ghoul’s attacks have a chance to apply Enfeeble, reducing the 
                    target’s movement speed by 30% and the damage they deal to you by 15% for 6 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargenegative.jpg',
      pointsMax: 1,
    },
  ],
  [
    {
      id: 30,
      type: TalentType.Improvement,
      classes: RowClasses.Second,
      name: 'Acclimation',
      description: 'Icebound Fortitude\'s cooldown is reduced by 60 seconds.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_iceboundfortitude.jpg',
      pointsMax: 1,
    },
    {
      id: 31,
      type: TalentType.Improvement,
      classes: RowClasses.Sixth,
      name: 'Assimilation',
      description: `The amount absorbed by Anti-Magic Zone is increased by 10% and 
                    grants up to 100 Runic Power based on the amount absorbed.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_antimagiczone.jpg',
      pointsMax: 1,
    },
    {
      id: 32,
      type: TalentType.Ability,
      classes: RowClasses.Tenth,
      name: 'Lichborne',
      description: `Draw upon unholy energy to become Undead for 10 sec, increasing Leech by 10%, 
                    and making you immune to Charm, Fear, and Sleep.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_raisedead.jpg',
      pointsMax: 1,
    },
  ],
  [
    {
      id: 33,
      type: TalentType.Improvement,
      classes: RowClasses.Second,
      name: 'Icy Talons',
      description: [
        'Your Runic Power spending abilities increase your melee attack speed by 2% for 6 sec, stacking up to 3 times.',
        'Your Runic Power spending abilities increase your melee attack speed by 4% for 6 sec, stacking up to 3 times.',
        'Your Runic Power spending abilities increase your melee attack speed by 6% for 6 sec, stacking up to 3 times.',
      ],
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_icytalons.jpg',
      pointsMax: 3,
    },
    {
      id: 34,
      type: TalentType.Ability,
      classes: RowClasses.Fourth,
      name: 'Horn of Winter',
      description: 'Blow the Horn of Winter, gaining 2 Runes and generating 25 Runic Power.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_horn_02.jpg',
      pointsMax: 1,
    },
    {
      id: 35,
      type: TalentType.Improvement,
      classes: RowClasses.Sixth,
      name: 'Improved Death Strike [NNF]',
      description: [
        `Death Strike's cost is reduced by 10, and its healing is increased by 3% for Blood specialization 
         and 20% for Frost and Unholy specialization.`,
        `Death Strike's cost is reduced by 10, and its healing is increased by 6% for Blood specialization 
         and 40% for Frost and Unholy specialization.`,
        `Death Strike's cost is reduced by 10, and its healing is increased by 10% for Blood specialization 
         and 60% for Frost and Unholy specialization.`,
      ],
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_butcher2.jpg',
      pointsMax: 3,
    },
    {
      id: 36,
      type: TalentType.Improvement,
      classes: RowClasses.Eighth,
      name: 'Will of the Necropolis',
      description: 'Damage taken below 30% Health is reduced by 30%.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/achievement_boss_kelthuzad_01.jpg',
      pointsMax: 1,
    },
    {
      id: 37,
      type: TalentType.Improvement,
      classes: RowClasses.Tenth,
      name: 'Unholy Bond',
      description: [
        'Increases the effectiveness of your Runeforge effects by 10%.',
        'Increases the effectiveness of your Runeforge effects by 20%.',
        'Increases the effectiveness of your Runeforge effects by 30%.',
      ],
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargenegative.jpg',
      pointsMax: 3,
    },
  ],
  [
    {
      id: 38,
      type: TalentType.Improvement,
      classes: RowClasses.First,
      name: 'Runic Attenuation',
      description: 'Auto attacks have a chance to generate 5 Runic Power.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/boss_odunrunes_blue.jpg',
      pointsMax: 1,
    },
    {
      id: 39,
      type: TalentType.Improvement,
      classes: RowClasses.Fourth,
      name: 'Rune Mastery',
      description: 'Consuming a Rune has a chance to increase your Strength by 6% for 6 seconds.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/ability_deathknight_hungeringruneblade.jpg',
      pointsMax: 1,
    },
    {
      id: 40,
      type: TalentType.Improvement,
      classes: RowClasses.Eighth,
      name: 'Blood Draw',
      description: `When you fall below 30% health you drain health from nearby enemies. 
                    Can only occur every 3 minutes.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_chargenegative.jpg',
      pointsMax: 1,
    },
    {
      id: 41,
      type: TalentType.Improvement,
      classes: RowClasses.Eleventh,
      name: 'Death\'s Echo',
      description: ' Death\'s Advance, Death and Decay, and Death Grip have 1 additional charge.',
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_fabric_ebonweave.jpg',
      pointsMax: 1,
    },
  ],
  [
    {
      id: 42,
      type: TalentType.Ability,
      classes: RowClasses.Second,
      name: 'Empower Rune Weapon',
      description: `Empower your rune weapon, gaining 15% Haste and generating 1 Rune and 5 Runic 
                    Power instantly and every 5 sec for 20 seconds. If Empower Rune Weapon is not talented 
                    elsewhere on the tree, this grants 1 charge of Empower Rune Weapon.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_62.jpg',
      pointsMax: 1,
    },
    {
      id: 43,
      type: TalentType.Ability,
      classes: RowClasses.Sixth,
      name: 'Abomination Limb',
      description: `Sprout an additional limb, dealing Shadow damage over 12 sec to all nearby enemies. 
                    Deals reduced damage beyond 5 targets. Every 1 sec, an enemy is pulled to your location 
                    if they are further than 8 yds from you. 
                    The same enemy can only be pulled once every 4 seconds. 
                    Gain Runic Corruption instantly, and again every 6 seconds.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/ability_maldraxxus_deathknight.jpg',
      pointsMax: 1,
    },
    {
      id: 44,
      type: TalentType.Ability,
      classes: RowClasses.Tenth,
      name: 'Soul Reaper',
      description: `Strike an enemy for Shadowfrost damage and afflict the enemy with Soul Reaper. 
                    After 5 sec, if the target is below 35% health this effect will explode dealing 
                    additional Shadowfrost damage to the target. 
                    If the enemy that yields experience or honor dies while afflicted 
                    by Soul Reaper, gain Runic Corruption.`,
      imageUrl: 'https://wow.zamimg.com/images/wow/icons/large/ability_deathknight_soulreaper.jpg',
      pointsMax: 1,
    },
  ],
];
