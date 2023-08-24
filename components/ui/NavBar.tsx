import Link from 'next/link';

function NavBarItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li className="relative text-6xl before:my-2 before:block before:h-0.5 before:w-full before:bg-text after:absolute after:my-2 after:block after:h-0.5 after:w-full after:bg-text">
      <Link href={href}>{children}</Link>
    </li>
  );
}

export function NavBar() {
  return (
    <header>
      <nav className="fixed z-50 flex h-screen w-screen flex-col justify-center border-2 bg-background">
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
