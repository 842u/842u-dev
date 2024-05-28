import { Metadata } from 'next';

import { AboutMeSection } from '@/components/sections/AboutMeSection/AboutMeSection';
import { CoursesSection } from '@/components/sections/CoursesSection/CoursesSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection/ExperienceSection';
import { Section } from '@/components/sections/Section';
import { SectionParagraph } from '@/components/sections/SectionParagraph';
import { LinkButton } from '@/components/ui/LinkButton';
import { allCourses } from '@/data/courses/allCourses';
import { mySkills } from '@/data/skills';

export const metadata: Metadata = {
  title: '842u | Kamil Bażanow',
  description: '',
};

export default function AboutPage() {
  return (
    <main>
      <AboutMeSection />
      <ExperienceSection skills={mySkills} />
      <Section ariaLabel="projects introduction" title="Projects">
        <SectionParagraph>
          In my projects, I always try to explore new technologies while also
          strengthening my existing skills. Each project is an opportunity for
          me to learn something new and challenge myself.
          <br />
          <br />
          It makes me proud to deliver high-quality work and gives me
          satisfaction from seeing my projects come to life.
        </SectionParagraph>
        <LinkButton href="/projects">Explore my projects&nbsp;</LinkButton>
      </Section>
      <CoursesSection courses={allCourses} />
    </main>
  );
}
