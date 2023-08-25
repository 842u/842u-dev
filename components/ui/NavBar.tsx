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
      <nav className="fixed z-50 flex h-screen w-screen flex-col justify-center bg-background">
        <ul className="p-4">
          {links.map((link) => (
            <li>
              <LinkButton href={link.href}>{link.name}</LinkButton>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
