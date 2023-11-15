import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedinIcon } from '@/components/icons/LinkedinIcon';
import { MailIcon } from '@/components/icons/MailIcon';

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10">
      <address className="flex h-10 w-full justify-evenly">
        <GitHubIcon href="https://github.com/842u" />
        <div className="h-full w-0.5 bg-dark dark:bg-light" />
        <LinkedinIcon href="https://www.linkedin.com/in/kamil-ba%C5%BCanow-025837234" />
        <div className="h-full w-0.5 bg-dark dark:bg-light" />
        <MailIcon href="mailto:contact@842u.dev" />
      </address>
      <div className="m-5 divide-x-2 text-xl">
        <span className="pr-2">Kamil</span>
        <span className="pl-2">Bażanow</span>
      </div>
    </footer>
  );
}
