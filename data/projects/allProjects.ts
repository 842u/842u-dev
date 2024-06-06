import { Project } from '@/types';

import { bazuDev } from './842u-dev/842u-dev';
import { dockerRpi } from './docker-rpi/docker-rpi';
import { murawskaStudio } from './murawska-studio/murawska-studio';

export const allProjects: Project[] = [dockerRpi, bazuDev, murawskaStudio];
