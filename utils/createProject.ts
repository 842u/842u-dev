import { Project, ProjectSettings } from '@/types';

import { createSlug } from './createSlug';

export function createProject(projectSettings: ProjectSettings): Project {
  const { name, description, image, tools } = projectSettings;

  const slug = createSlug(name);

  return { name, description, image, slug, tools };
}
