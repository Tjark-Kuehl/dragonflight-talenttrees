import type { TalentType } from './TalentType';

export type Talent = {
  id: number,
  type: TalentType,
  name: string,
  description: string | string[],
  imageUrl: string,
  requiredPoints?: number,
  pointsMax: number
};
