import * as React from 'react';
import {ReactNode} from 'react';

import {cn} from '@/lib/utils';
import outfit from '@/app/fonts';
import {cva, type VariantProps} from 'class-variance-authority';

const inputVariants = cva(
  `${outfit.className} peer transition-all h-[60px] p-[17px] w-full rounded-lg flex justify-center items-center outline-none
  ring-offset-0 ring-1 focus-visible:ring-2 disabled:opacity-60 focus-visible:placeholder-gray-300`,
  {
    variants: {
      variant: {
        default: `ring-gray-300 focus-visible:ring-black bg-white dark:ring-gray-500
                  dark:focus-visible:ring-gray-400 dark:bg-black placeholder:text-gray-300`,
        error: `ring-auxiliary-brick bg-white dark:bg-black focus-visible:bg-white dark:focus-visible:bg-black
                placeholder-shown:bg-auxiliary-brick/[.07] dark:placeholder-shown:bg-auxiliary-brick/[.07]
                focus-visible:placeholder:text-gray-300 placeholder:text-gray-400`,
        finder: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const helperVariants = {
  iconVariants: {
    base: 'transition-all absolute right-[17px] top-1/2 -translate-y-1/2 px-1 text-subtitle1 rounded-lg',
    default: 'peer-focus:text-black dark:peer-focus:text-gray-400 text-gray-300 dark:text-gray-500',
    error: `peer-focus:text-auxiliary-brick text-gray-300 peer-focus:text-auxiliary-brick dark:peer-focus:text-auxiliary-brick
            dark:text-auxiliary-brick text-gray-300 dark:text-gray-500`,
  },
  labelVariants: {
    base: `absolute bg-white dark:bg-black left-[14px] top-0 -translate-y-1/2 px-1 text-caption pointer-events-none rounded-lg
           transition-all peer-placeholder-shown:text-subtitle1 peer-placeholder-shown:left-[17px] peer-placeholder-shown:top-[30px]
           peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:p-0 peer-placeholder-shown:bg-white/0
           dark:peer-placeholder-shown:bg-black/0 peer-focus:text-caption peer-focus:left-[14px] peer-focus:top-0
           peer-focus:px-1 peer-focus:bg-white dark:peer-focus:bg-black`,
    default: 'peer-focus-visible:text-black dark:peer-focus-visible:text-white',
    finder: 'text-black',
    error: 'peer-focus-visible:text-auxiliary-brick dark:peer-focus-visible:text-auxiliary-brick',
  },
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  helperText?: string,
  icon?: ReactNode,
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className, helperText, icon, label, variant, type, ...props
  }, ref) => {
    if (variant === 'finder') {
      return (
        <label htmlFor="category" className="text-black dark:text-white pl-[10px] relative flex flex-col gap-0 w-full">
          <span data-type="input-label" className="text-body2">{label}</span>
          <input
            id={props.id}
            ref={ref}
            placeholder={props.placeholder}
            type="text"
            className={cn('w-full h-full bg-black/0 focus-visible:outline-none text-body1', className)}
            {...props}
          />
        </label>
      );
    }

    return (
      <>
        <div className={`${helperText && variant !== 'error' && 'mb-[10px]'} w-full ${outfit.className} relative z-0`}>
          <input
            id="input"
            type={type}
            ref={ref}
            {...props}
            placeholder={props.placeholder || ' '}
            className={`${cn(inputVariants(
              {
                variant,
                className,
              },
            ))}
          ${type === 'search' && `flex placeholder:text-gray-300 ring-2 focus-visible:ring-2 search-cancel:appearance-none
                                  search-cancel:bg-xmark-light dark:search-cancel:bg-xmark-dark
                                  search-cancel:h-5 search-cancel:w-3.5 search-cancel:ml-2 ${icon && ' pl-[44px]'}`}
          ${label && 'placeholder:text-opacity-0'} ${icon && type !== 'search' && 'pr-[44px]'}`}
          />

          {icon && (
            <div
              className={cn(
                helperVariants.iconVariants.base,
                variant === 'error'
                  ? helperVariants.iconVariants.error : helperVariants.iconVariants.default,
                type === 'search' && `pointer-events-none text-subtitle1 left-4 text-gray-200 dark:text-gray-400 w-6 h-6 peer-focus:text-gray-200
              dark:peer-focus:text-gray-200 peer-placeholder-shown:text-gray-200 dark:peer-placeholder-shown:text-gray-400`,
              )}
            >
              {icon}
            </div>
          )}

          {label && (
            <label
              htmlFor="input"
              className={cn(
                helperVariants.labelVariants.base,
                variant === 'error' ? helperVariants.labelVariants.error : helperVariants.labelVariants.default,
                type === 'search' && icon && 'peer-placeholder-shown:left-[44px]',
              )}
            >
              {label}
            </label>
          )}

        </div>

        {helperText && variant !== 'error' && (
          <span
            className={`pl-1 text-gray-400 dark:text-gray-300 w-full text-subtitle1 ${outfit.className}`}
          >
            {helperText}
          </span>
        )}
      </>
    );
  },
);
Input.displayName = 'Input';

export { Input };
