import { ContactForm } from '@/components/ui/ContactForm/ContactForm';
import { SectionParagraph } from '@/components/ui/SectionParagraph';

import { Section } from '../Section';

export function ContactSection() {
  return (
    <Section ariaLabel="contact options" title="Contact">
      <SectionParagraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
        excepturi.
      </SectionParagraph>
      <ContactForm className="lg:w-1/2" />
    </Section>
  );
}
