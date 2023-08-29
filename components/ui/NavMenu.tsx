import { NavItem, NavMenuItem } from './NavMenuItem';

type NavMenuProps = {
  items: NavItem[];
  isActive?: boolean;
};

export function NavMenu({ items, isActive = false }: NavMenuProps) {
  return (
    <ul
      className={`${
        isActive ? 'left-0' : 'translate-x-full'
      } absolute top-0 flex h-screen w-screen flex-col justify-center bg-light px-6 text-6xl transition-transform md:static md:h-3/4 md:translate-x-0 md:flex-row md:divide-x-2 md:px-0 md:text-5xl xl:w-auto`}
    >
      {items.map((item) => (
        <NavMenuItem key={item.name} className="md:px-5" href={item.href}>
          {item.name}
        </NavMenuItem>
      ))}
    </ul>
  );
}