import {Navbar, NavbarContent, NavbarIcon, NavbarNavigation,} from '@/components/ui/navbar';
import {Route} from '@/config';
import * as React from 'react';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


export default async function InstancedNav() {
  const secondaryRoutes = [
    {
      label: 'ruta 1',
      key: 'businesses',
      routeName: '/search/businesses',
    },
    {
      label: 'ruta 2',
      key: 'events',
      routeName: '/search/events',
    },
    {
      label: 'ruta 3',
      key: 'offers',
      routeName: '/search/offers',
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
