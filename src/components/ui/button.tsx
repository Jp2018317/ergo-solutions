import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const buttonVariants = cva(
    `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm
  font-medium transition-colors focus-visible:outline-none focus-visible:ring-2
  focus-visible:ring-action-light-green focus-visible:ring-offset-0 disabled:text-gray-300
  disabled:pointer-events-none text-action`,
    {
        variants: {
            variant: {
                primary:
                    `bg-primary-300 transition-all bg-[position:_0%_0%] hover:bg-[position:_100%_100%] bg-[size:_200%] 
                     bg-gradient-to-r from-primary-300 to-primary-200  text-white py-[14px] px-[24px] hover:bg-gradient-to-r 
                     hover:from-primary-300 hover:to-primary-200 active:bg-gradient-to-r active:from-primary-200 active:to-primary-100
                     disabled:bg-none disabled:text-gray-400 disabled:bg-gray-100`,
                destructive:
                    `bg-auxiliary-brick text-white hover:bg-auxiliary-brick/90 disabled:text-gray-400
                     disabled:bg-gray-100`,
                outline:
                    `border border-black bg-background hover:bg-gray-100 disabled:bg-gray-100
                     disabled:text-gray-400 disabled:bg-gray-500/40`,
                secondary:
                    `transition-all bg-secondary-500 text-white hover:bg-secondary-400
                     active:bg-action-400/80 text-black disabled:text-gray-400 text-white`,
                ghost:
                    `shadow-none hover:bg-gray-100 hover:text-accent-foreground 
                    disabled:text-gray-300 disabled:bg-black`,
                subtleLink:
                    'focus-visible:ring-black shadow-none text-black underline-offset-4 hover:underline',
                underlineLink:
                    'focus-visible:ring-black shadow-none text-black underline-offset-4 underline',
                legalLink:
                    'focus-visible:ring-black shadow-none text-primary-dark-500 focus-visible:ring-black',
                iconLink:
                    'focus-visible:ring-black shadow-none focus-visible:ring-0 hover:cursor-pointer',
            },
            size: {
                default: 'h-[42px] rounded-lg px-[18px] py-3',
                sm: 'h-[34px] rounded-md px-[12px] py-[18px]',
                md: 'h-[48px] rounded-md px-[18px] py-[16px]',
                lg: 'h-14 rounded-lg px-[24px] py-[14px]',
                icon: 'h-10 w-10',
                link: 'h-fit w-fit px-1 py-[1px]',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
