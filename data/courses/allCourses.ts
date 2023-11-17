import { Course } from '@/types';

import { udemyJavaScript } from './udemy-javascript';
import { udemyNextJS } from './udemy-nextjs';
import { udemyReact } from './udemy-react';
import { udemyTesting } from './udemy-testing';
import { udemyTypeScript } from './udemy-typescript';

export const allCourses: Course[] = [
  udemyReact,
  udemyJavaScript,
  udemyTypeScript,
  udemyNextJS,
  udemyTesting,
];
