import { AvaliableTools } from '@/types';

export type Skill = {
  name: AvaliableTools;
  progress: number;
};

export const mySkills: Skill[] = [
  {
    name: AvaliableTools.JavaScript,
    progress: 50,
  },
  {
    name: AvaliableTools.TypeScript,
    progress: 25,
  },
  {
    name: AvaliableTools.React,
    progress: 25,
  },
  {
    name: AvaliableTools.NextJS,
    progress: 25,
  },
  {
    name: AvaliableTools.Git,
    progress: 25,
  },
];
