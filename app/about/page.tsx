import { AboutMeSection } from '@/components/sections/AboutMeSection/AboutMeSection';
import { CoursesSection } from '@/components/sections/CoursesSection/CoursesSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection/ExperienceSection';
import { Section } from '@/components/sections/Section';
import { SectionParagraph } from '@/components/sections/SectionParagraph';
import { LinkButton } from '@/components/ui/LinkButton';
import { allCourses } from '@/data/courses/allCourses';
import { mySkills } from '@/data/skills';

export default function AboutPage() {
  return (
    <main>
      <AboutMeSection />
      <ExperienceSection skills={mySkills} />
      <Section ariaLabel="projects introduction" title="Projects">
        <SectionParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          qui atque, nobis ullam deleniti eveniet numquam labore, eos quam
          repudiandae dolores. Eaque id consequatur repellat?
        </SectionParagraph>
        <LinkButton href="/projects">Explore more projects&nbsp;</LinkButton>
      </Section>
      <CoursesSection courses={allCourses} />
    </main>
  );
}
