import { Project } from '@/types';

import { dockerRpi } from './docker-rpi/docker-rpi';
import { murawskaStudio } from './murawska-studio/murawska-studio';
import { project2 } from './project-2/project-2';

export const allProjects: Project[] = [dockerRpi, murawskaStudio, project2];
