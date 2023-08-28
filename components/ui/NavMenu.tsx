import { NavItem, NavMenuItem } from './NavMenuItem';

type NavMenuProps = {
  items: NavItem[];
  isActive?: boolean;
};

export function NavMenu({ items, isActive = false }: NavMenuProps) {
  return (
    <ul
      className={`${
        isActive ? 'left-0' : 'left-full'
      } absolute top-0 flex h-screen w-screen flex-col justify-center px-6 text-6xl md:static md:left-0 md:h-3/4 md:flex-row md:divide-x-2 md:px-0 md:text-5xl`}
    >
      {items.map((item) => (
        <NavMenuItem key={item.name} className="md:px-5" href={item.href}>
          {item.name}
        </NavMenuItem>
      ))}
    </ul>
  );
}
