import { GitHubIcon } from '@/components/decorative/icons/GitHubIcon';
import { LinkedinIcon } from '@/components/decorative/icons/LinkedinIcon';
import { MailIcon } from '@/components/decorative/icons/MailIcon';

export function Footer() {
  return (
    <footer>
      <address className="flex flex-col items-center gap-10 p-5 not-italic lg:flex-row lg:justify-between lg:px-10">
        <div className="flex h-10 w-full justify-evenly md:w-1/2 lg:h-7 lg:w-1/6 lg:justify-between">
          <GitHubIcon
            className="h-full hover:animate-blink"
            href="https://github.com/842u"
          />
          <div aria-hidden className="h-full w-0.5 bg-dark dark:bg-light" />
          <LinkedinIcon
            className="h-full hover:animate-blink"
            href="https://www.linkedin.com/in/kamil-ba%C5%BCanow-025837234"
          />
          <div aria-hidden className="h-full w-0.5 bg-dark dark:bg-light" />
          <MailIcon
            className="h-full hover:animate-blink"
            href="mailto:contact@842u.dev"
          />
        </div>
        <p className="divide-x-2 text-xl lg:m-0 lg:text-base">
          <span className="pr-2">kamil</span>
          <span className="pl-2">bażanow</span>
        </p>
      </address>
    </footer>
  );
}
