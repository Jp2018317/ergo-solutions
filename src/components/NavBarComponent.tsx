import {Navbar, NavbarContent, NavbarIcon, NavbarNavigation,} from '@components/navbar';
import {Route} from '@/config';
import * as React from 'react';
import SearchBar from "@/components/SearchBar";


export default async function NavBarComponent() {
  const secondaryRoutes = [
    {
      label: 'Inicio',
      key: 'inicio',
      routeName: '/',
    },
    {
      label: 'Productos',
      key: 'productos',
      routeName: '/productos',
    },
  ] satisfies Route[];

  return (
    <>
        <Navbar>
          <NavbarContent className="px-3 gap-6">
            <NavbarIcon />
            <SearchBar />
          </NavbarContent>
        </Navbar>

        <Navbar variant="secondary">
          <NavbarContent variant="secondary">
            <NavbarNavigation variant="secondary" routes={secondaryRoutes} />
          </NavbarContent>
        </Navbar>
    </>
  );
}
