import { ContactForm } from '@/components/ui/ContactForm/ContactForm';

import { Section } from '../Section';

export function ContactSection() {
  return (
    <Section ariaLabel="contact options" title="contact">
      <p className="md:text-2xl lg:max-w-[50vw]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
        excepturi.
      </p>
      <ContactForm className="lg:w-1/2" />
    </Section>
  );
}
