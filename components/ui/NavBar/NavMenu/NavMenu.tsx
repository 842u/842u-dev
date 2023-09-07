import { NavItem, NavMenuItem } from './NavMenuItem/NavMenuItem';

type NavMenuProps = {
  items?: NavItem[];
  isActive?: boolean;
};

export function NavMenu({ items, isActive = false }: NavMenuProps) {
  return (
    <ul
      className={`${
        isActive ? 'operational' : ''
      } absolute left-full top-0 flex h-screen w-screen flex-col justify-center px-6 text-6xl transition-all operational:left-0 operational:bg-light operational:dark:bg-dark md:static md:h-3/4 md:w-auto md:translate-x-0 md:flex-row md:divide-x-2 md:px-0 md:text-5xl`}
    >
      {items?.map((item) => (
        <NavMenuItem key={item.name} className="md:px-5" href={item.href}>
          {item.name}
        </NavMenuItem>
      ))}
    </ul>
  );
}
