'use client';

import { useRef } from 'react';

import { SectionParagraph } from '@/components/sections/SectionParagraph';
import { CourseCard } from '@/components/ui/CourseCard/CourseCard';
import { HorizontalMenu } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { useInfiniteMenu } from '@/hooks/useInfiniteMenu';
import { Course } from '@/types';
import { defaultMediaBreakpoints } from '@/utils/defaults';

import { Section } from '../Section';

type CoursesSectionProps = {
  courses: Course[];
};

export function CoursesSection({ courses }: CoursesSectionProps) {
  const menuElementRef = useRef<HTMLMenuElement>(null);

  const { activeElementIndex } = useInfiniteMenu(
    menuElementRef,
    defaultMediaBreakpoints,
  );

  return (
    <Section ariaLabel="finished courses" title="Courses">
      <SectionParagraph>
        In addition to my practical experience, I have completed several online
        courses to further enhance my skills and knowledge.
      </SectionParagraph>
      <HorizontalMenu ref={menuElementRef} className="my-10" items={courses} />
      <CourseCard course={courses[activeElementIndex]} />
    </Section>
  );
}
