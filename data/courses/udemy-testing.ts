import courseCertificateImage from '@/public/courses/udemy-testing.jpg';
import { Course } from '@/types';

export const udemyTesting: Course = {
  name: 'Testing',
  image: courseCertificateImage,
  url: 'https://www.udemy.com/certificate/UC-63d37c62-d55c-4467-abfb-6185cb30d2ad/',
  date: new Date('October 25, 2022'),
  hoursLength: 5.5,
};
