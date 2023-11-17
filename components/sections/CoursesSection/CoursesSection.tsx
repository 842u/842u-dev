'use client';

import { useState } from 'react';

import { HorizontalMenu } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { SectionParagraph } from '@/components/ui/SectionParagraph';
import { Course } from '@/types';

import { Section } from '../Section';

type CoursesSectionProps = {
  courses: Course[];
};

export function CoursesSection({ courses }: CoursesSectionProps) {
  // eslint-disable-next-line
  const [currentCourse, setCurrentCourse] = useState(courses[0]);

  const menuItemClickHandler = (event: React.MouseEvent) => {
    const clickedItem = courses.find(
      (course) => course.name === (event.target as HTMLButtonElement).innerText,
    );

    setCurrentCourse(clickedItem || courses[0]);
  };

  return (
    <Section ariaLabel="finished courses" title="Courses">
      <SectionParagraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        culpa et, cupiditate incidunt, dolorum ex tempora assumenda saepe, autem
        a eaque eius voluptatum dicta distinctio laboriosam necessitatibus iure!
        Culpa, molestias.
      </SectionParagraph>
      <HorizontalMenu onClick={menuItemClickHandler}>
        {courses.map((course) => course.name)}
      </HorizontalMenu>
    </Section>
  );
}
