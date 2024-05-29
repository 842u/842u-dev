import { Metadata } from 'next';

import { BreakLine } from '@/components/decorative/BreakLine';
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
  description: `Hello. My name is Kamil Bażanow. I'm a detail-oriented person with a keen eye for detail. In everything I do, I try to be as accurate, precise and careful as I can, ensuring that every aspect of my work meets the highest standards of accuracy and quality.
  I thrive in dynamic environments where I can continuously innovate, learn and explore new technologies.
  As my little experience showed me, it's hard to build great things alone so I believe in the power of collaboration and feel excited about the opportunity to work with like-minded individuals and organizations to create impactful digital experiences.`,
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
          <BreakLine />
          It makes me proud to deliver high-quality work and gives me
          satisfaction from seeing my projects come to life.
        </SectionParagraph>
        <LinkButton href="/projects">Explore my projects&nbsp;</LinkButton>
      </Section>
      <CoursesSection courses={allCourses} />
    </main>
  );
}
