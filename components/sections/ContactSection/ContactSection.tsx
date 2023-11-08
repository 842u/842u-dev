import { Section } from '../Section';

export function ContactSection() {
  return (
    <Section title="contact">
      <form className="flex flex-col gap-6">
        <input
          className="border-b-2 border-dark bg-light text-3xl placeholder:text-3xl placeholder:text-dark-lighter"
          id="name"
          name="name"
          placeholder="Enter your name ..."
          type="text"
        />
        <input
          className="border-b-2 border-dark bg-light text-3xl placeholder:text-3xl placeholder:text-dark-lighter"
          id="email"
          name="email"
          placeholder="Enter your e-mail ..."
          type="text"
        />
        <button type="submit">Send</button>
      </form>
    </Section>
  );
}
