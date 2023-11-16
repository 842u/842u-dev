import { LinkButton } from '@/components/ui/LinkButton';
import { SectionParagraph } from '@/components/ui/SectionParagraph';

import { Section } from '../Section';

export function HeroSection() {
  return (
    <Section
      aria-label="person overview"
      className="my-0 flex min-h-screen flex-col justify-center md:my-0 lg:my-0"
    >
      <h1 className="divide-x-2  text-5xl  md:text-7xl lg:text-5xl">
        <span className="pr-2">kamil</span>
        <span className="pl-2">bażanow</span>
      </h1>

      <SectionParagraph data-testid="hero-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ea
        dignissimos, iste quidem ducimus quis facere voluptatibus quasi cum quod
        repudiandae, atque et tenetur id ex tempora nobis pariatur aliquid
        placeat? Ipsa dolore eos assumenda numquam nostrum quibusdam velit alias
        consequatur, quisquam minima dignissimos consequuntur deleniti quo
        itaque fugit quia?
      </SectionParagraph>

      <LinkButton href="/about">About me</LinkButton>
    </Section>
  );
}
