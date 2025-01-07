'use client';

import {cn} from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Detecom from '@public/logo/detecom.svg';
import Link from 'next/link';
import {Route} from '@/config';
import {cva, VariantProps} from 'class-variance-authority';
import {usePathname} from 'next/navigation';

const navbarVariants = cva('grid place-items-center', {
  variants: {
    variant: {
      primary: 'bg-white dark:bg-black w-full h-20',
      secondary: 'bg-primary-300 bg-gradient-to-r from-primary-300 to-primary-200 w-full h-10',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface NavbarProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, VariantProps<typeof navbarVariants> {
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(({
  className, children, variant, ...props
}, ref) => (
  <nav
    className={cn(navbarVariants({ variant, className }))}
    ref={ref}
    {...props}
  >
    {children}
  </nav>
));
Navbar.displayName = 'Navbar';

export interface NavbarSearchProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    VariantProps<typeof navbarContentVariants> {
      placeholder?: string;
      icon?: React.ReactNode;
      timeout?: number;
}

const navbarContentVariants = cva('w-full h-full max-w-[1200px] flex items-center', {
  variants: {
    variant: {
      primary: 'justify-between gap-2',
      secondary: 'justify-center',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface NavbarContentProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        VariantProps<typeof navbarContentVariants> {
}

const NavbarContent = React.forwardRef<HTMLDivElement, NavbarContentProps>(({
  variant,
  className,
  children,
  ...props
}, ref) => (
  <div
    className={cn(navbarContentVariants({ variant, className }))}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));

NavbarContent.displayName = 'NavbarContent';

function NavbarIcon() {
  return (
    <div className="relative min-w-40 h-full">
      <Link
        href="/"
      >
        <Image
          alt="logo"
          className="w-full max-w-40 h-full object-contain block dark:hidden"
          src={Detecom}
          fill
        />
      </Link>
    </div>
  );
}

const navbarNavigationVariants = cva('flex items-center justify-center gap-[24px]', {
  variants: {
    variant: {
      primary: 'text-gray-500 dark:text-gray-200',
      secondary: 'text-white uppercase',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface NavbarNavigationProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
  VariantProps<typeof navbarNavigationVariants> {
  routes: Route[];
}

function NavbarNavigation({ routes, className, variant }: NavbarNavigationProps) {
  const pathname = usePathname();
  const pathnameSections = pathname.split('/');

  function getLinkClassNames(isActive: boolean) {
    const base = variant === 'primary' ? 'text-subtitle1' : 'text-subtitle2 relative';
    const active = `after:absolute after:bg-white after:-bottom-[80%] after:left-0 after:w-full
                       after:h-[3px] after:rounded-full after:transition-all after:duration-300 after:ease-in-out`;
    const hover = `hover:after:absolute hover:after:bg-white hover:after:-bottom-[80%] hover:after:left-0 hover:after:w-full
                      hover:after:h-[3px] hover:rounded-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out`;
    return cn(base, isActive ? active : hover);
  }

  return (
    <ul className={cn(navbarNavigationVariants({ variant, className }))}>
      {routes.map((route) => (
        <li key={route.key}>
          <Link
            href={route.routeName}
          >
            <span className={getLinkClassNames(pathnameSections.includes(route.key))}>
              {route.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export {
  Navbar, NavbarIcon, NavbarNavigation, NavbarContent,
};
