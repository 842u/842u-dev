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
        I&apos;d love to hear from you! Have a questions or want to chat?
        <br />
        <br />
        Fill out the form below to get in touch.
      </SectionParagraph>
      <ContactForm className="lg:w-1/2" />
    </Section>
  );
}
