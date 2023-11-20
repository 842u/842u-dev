import courseCertificateImage from '@/public/courses/udemy-nextjs.jpg';
import { Course } from '@/types';

export const udemyNextJS: Course = {
  name: 'NextJS',
  image: courseCertificateImage,
  url: 'https://www.udemy.com/certificate/UC-c31c1276-376b-488a-a8dc-71daaf3f6dab/',
  date: new Date('March 31, 2023'),
  hoursLength: 25,
};
