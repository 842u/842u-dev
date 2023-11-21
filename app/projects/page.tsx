'use client';

import { CMR2SVG } from '@/components/decorative/CMR2SVG';
import { Section } from '@/components/sections/Section';
import { bazuDevSVGPath } from '@/data/svgPaths';

function AllProjectsSection() {
  return (
    <Section ariaLabel="all projects" title="Projects">
      <CMR2SVG
        animationDuration={30}
        characterRotation="0"
        characterSpacing={0.08}
        className="fill-light-darker text-[3px] dark:text-dark-lighter md:block"
        pathShape={bazuDevSVGPath}
        text="842u.dev "
        textRepetition={42}
        viewBox="0 0 292 57"
      />
    </Section>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <AllProjectsSection />
    </main>
  );
}
