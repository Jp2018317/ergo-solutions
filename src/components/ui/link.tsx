 
import { default as LinkNext, type LinkProps } from 'next/link';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@components/button';

export interface LinkYubiProps
  extends LinkProps, VariantProps<typeof buttonVariants> {
  className?: string
  children: React.ReactNode,
  color?: string
}

const Link = React.forwardRef<HTMLAnchorElement, LinkYubiProps>(({
  variant = 'subtleLink', size = 'link', className, ...props
}, ref) => (
    <LinkNext
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  ));

Link.displayName = 'Link';

export { Link };
