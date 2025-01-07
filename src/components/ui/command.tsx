'use client';

import * as React from 'react';
import {Command as CommandPrimitive} from 'cmdk';

import {cn} from '@/lib/utils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

const Command = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
    <CommandPrimitive
        ref={ref}
        className={cn('peer relative flex flex-col w-full items-center gap-y-2', className)}
        {...props}
    />
));
Command.displayName = CommandPrimitive.displayName;

export interface CommandListProps
    extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> {
    loading: boolean | undefined;
}

const CommandList = React.forwardRef<React.ElementRef<typeof CommandPrimitive.List>,
    CommandListProps>(({
                           className, loading = false, children, ...props
                       }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={cn(
            `w-full absolute z-0 top-[120%] overflow-y-auto overflow-x-hidden py-[5px] min-h-[54px] max-h-[186px] bg-white
      dark:bg-black outline-none ring-1 rounded-lg ring-gray-300 dark:ring-gray-500 ring-offset-0`,
            loading && 'max-h-[54px] overflow-y-hidden',
            className,
        )}
        {...props}
    >
        {loading && (
            <div className="w-full flex justify-center items-center h-10">
                <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
            </div>
        )}
        {children}
    </CommandPrimitive.List>
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandItem = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        className={cn(
            `relative min-h-[44px] z-10 w-full flex select-none items-center outline-none cursor-default px-[30px] py-2.5 text-body1
        dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-500/50 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-500/50
        data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
            className,
        )}
        {...props}
    />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandEmpty = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Empty>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
    <CommandPrimitive.Empty
        ref={ref}
        className="flex h-[44px] w-full justify-center items-center dark:text-gray-100"
        {...props}
    />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

export {
    Command,
    CommandList,
    CommandItem,
    CommandEmpty,
};
