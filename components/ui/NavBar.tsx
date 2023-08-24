import Link from 'next/link';

function SelectionIndicator() {
  return (
    <div
      aria-hidden
      className="pointer-events-none relative mr-4 inline-block h-10 w-10 overflow-hidden border-2 before:absolute before:right-2/4 before:h-full before:w-full before:rotate-45 before:border-r-4 before:border-t-4 after:absolute after:box-border after:h-full after:w-full after:border-8 after:border-background"
    />
  );
}

function NavBarItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li className="relative text-6xl before:my-2 before:block before:h-0.5 before:w-full before:bg-text after:absolute after:my-2 after:block after:h-0.5 after:w-full after:bg-text">
      <Link className="block h-full w-full" href={href}>
        <SelectionIndicator />
        {children}
      </Link>
    </li>
  );
}

export function NavBar() {
  return (
    <header>
      <nav className="fixed z-50 flex h-screen w-screen flex-col justify-center bg-background">
        <ul className="p-4">
          <NavBarItem href="/">home</NavBarItem>
          <NavBarItem href="/about">about</NavBarItem>
          <NavBarItem href="/projects">projects</NavBarItem>
          <NavBarItem href="#contact">contact</NavBarItem>
        </ul>
      </nav>
    </header>
  );
}
