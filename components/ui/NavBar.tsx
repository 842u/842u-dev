import { HamburgerButton } from './HamburgerButton';
import { LinkButton } from './LinkButton';

export type NavBarLink = {
  name: string;
  href: string;
};

type NavBarProps = {
  links: NavBarLink[];
};

export function NavBar({ links }: NavBarProps) {
  return (
    <header>
      <HamburgerButton className="z-50" />
      <nav className="fixed z-40 flex h-screen w-screen flex-col justify-center bg-light">
        <ul className="p-4">
          {links.map((link) => (
            <li key={link.name}>
              <LinkButton href={link.href}>{link.name}</LinkButton>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
