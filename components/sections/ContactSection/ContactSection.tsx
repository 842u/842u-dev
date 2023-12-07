import { SectionParagraph } from '@/components/sections/SectionParagraph';
import { ContactForm } from '@/components/ui/ContactForm/ContactForm';

import { Section } from '../Section';

export function ContactSection() {
  return (
    <Section
      ariaLabel="contact options"
      className="scroll-mt-20 md:scroll-mt-10"
      id="contact"
      title="Contact"
    >
      <SectionParagraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
        excepturi.
      </SectionParagraph>
      <ContactForm className="lg:w-1/2" />
    </Section>
  );
}
