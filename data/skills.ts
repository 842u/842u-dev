import { AvailableTools } from '@/types';

export type Skill = {
  name: AvailableTools;
  progress: number;
};

export const mySkills: Skill[] = [
  {
    name: AvailableTools.JavaScript,
    progress: 50,
  },
  {
    name: AvailableTools.TypeScript,
    progress: 25,
  },
  {
    name: AvailableTools.React,
    progress: 25,
  },
  {
    name: AvailableTools.NextJS,
    progress: 25,
  },
  {
    name: AvailableTools.Git,
    progress: 25,
  },
];
