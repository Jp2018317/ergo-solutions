import {Navbar, NavbarContent, NavbarIcon, NavbarNavigation,} from '@components/navbar';
import {Route} from '@/config';
import * as React from 'react';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@components/sheet"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


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
          <NavbarContent className="px-3">
            <NavbarIcon />
            <Sheet>
              <SheetTrigger>
                <FontAwesomeIcon className='pr-2' icon={faBars} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

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
