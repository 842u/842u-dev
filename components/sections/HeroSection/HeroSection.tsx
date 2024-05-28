import { BreakLine } from '@/components/decorative/BreakLine';
import { SectionParagraph } from '@/components/sections/SectionParagraph';
import { LinkButton } from '@/components/ui/LinkButton';

import { Section } from '../Section';

export function HeroSection() {
  return (
    <Section
      aria-label="person overview"
      className="my-0 flex min-h-screen flex-col justify-center md:my-0 lg:my-0"
    >
      <h1 className="divide-x-2 text-5xl md:text-7xl lg:text-5xl">
        <span className="pr-2">kamil</span>
        <span className="pl-2">bażanow</span>
      </h1>

      <SectionParagraph dataTestId="hero-description">
        Hello there 🫡. Nice to see you here! My name is Kamil Bażanow, and
        I&apos;m a web developer specializing in frontend technologies. However,
        I&apos;m not limited to the frontend alone and eager to learn new
        technologies and expand my knowledge across different areas of tech.
        <BreakLine />
        I&apos;m currently looking for a job where I can collaborate with a team
        of cool, talented individuals to create awesome things together. If
        you&apos;re seeking a passionate developer to join your team, let&apos;s
        connect!
      </SectionParagraph>

      <LinkButton href="/about">About me</LinkButton>
    </Section>
  );
}
