import Image from 'next/image';

import { Course } from '@/types';

import { LinkButton } from '../LinkButton';

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="gap-10 lg:flex lg:justify-between">
      <Image
        alt={`${course.name} certificate`}
        className="my-8 aspect-auto brightness-90 grayscale transition-[filter] hover:brightness-100 lg:flex lg:w-1/2"
        src={course.image}
      />

      <div className="my-8 flex flex-col lg:max-w-md lg:flex-grow">
        <h3 className="text-2xl md:text-3xl">{course.name}</h3>
        <div className="my-10">
          <p className="text-xl">
            <span className="font-bold">Date: </span>
            <span>
              {course.date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              })}
            </span>
          </p>
          <p className="text-xl">
            <span className="font-bold">Length: </span>
            <span>{course.hoursLength} Hours</span>
          </p>
        </div>

        <LinkButton className="lg:w-full" href={course.url} target="_blank">
          Verify
        </LinkButton>
      </div>
    </div>
  );
}
