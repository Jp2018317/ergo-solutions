import {default as LinkNext, type LinkProps} from 'next/link';
import {VariantProps} from 'class-variance-authority';
import React from 'react';
import {cn} from '@/lib/utils';
import {buttonVariants} from '@components/button';

export interface LinkCustomProps
    extends LinkProps, VariantProps<typeof buttonVariants> {
  className?: string
  children: React.ReactNode,
}

const Link = React.forwardRef<HTMLAnchorElement, LinkCustomProps>(({
  variant = 'legalLink', size = 'link', className, ...props
}, ref) => {
  return (
      <LinkNext
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
      />
  );
});

Link.displayName = 'Link';

export { Link };
