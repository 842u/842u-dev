'use client';

import { useRef, useState } from 'react';

import { CourseCard } from '@/components/ui/CourseCard/CourseCard';
import { HorizontalMenu } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { SectionParagraph } from '@/components/ui/SectionParagraph';
import { Course } from '@/types';

import { Section } from '../Section';

type CoursesSectionProps = {
  courses: Course[];
};

export function CoursesSection({ courses }: CoursesSectionProps) {
  const coursesRef = useRef(courses);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const menuItemClickHandler = (event: React.MouseEvent) => {
    const clickedItem = coursesRef.current.find(
      (course) =>
        course.name.toLowerCase() ===
        (event.target as HTMLButtonElement).innerText,
    );

    setCurrentCourseIndex(coursesRef.current.indexOf(clickedItem!));
  };

  return (
    <Section ariaLabel="finished courses" title="Courses">
      <SectionParagraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        culpa et, cupiditate incidunt, dolorum ex tempora assumenda saepe, autem
        a eaque eius voluptatum dicta distinctio laboriosam necessitatibus iure!
        Culpa, molestias.
      </SectionParagraph>
      <HorizontalMenu className="my-10" onClick={menuItemClickHandler}>
        {coursesRef.current.map((course) => course.name.toLowerCase())}
      </HorizontalMenu>
      <CourseCard course={coursesRef.current[currentCourseIndex]} />
    </Section>
  );
}
