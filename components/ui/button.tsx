import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-navy text-white shadow-lg shadow-brand-navy/20 hover:-translate-y-0.5 hover:bg-brand-navy/90 hover:shadow-brand-navy",
        secondary:
          "bg-brand-gold text-brand-charcoal shadow-lg shadow-brand-gold/25 hover:-translate-y-0.5 hover:bg-brand-gold/90 hover:shadow-brand-gold",
        ghost:
          "bg-white/10 text-brand-navy hover:bg-brand-navy/5",
        outline:
          "border-2 border-brand-navy/15 bg-white text-brand-navy hover:border-brand-navy/40 hover:bg-brand-navy/5 hover:-translate-y-0.5",
        burgundy:
          "bg-brand-burgundy text-white shadow-lg shadow-brand-burgundy/20 hover:-translate-y-0.5 hover:bg-brand-burgundy/90",
        emerald:
          "bg-brand-emerald text-white shadow-lg shadow-brand-emerald/20 hover:-translate-y-0.5 hover:bg-brand-emerald/90",
      },
      size: {
        default: "h-12 px-6",
        lg: "h-14 px-8 text-base",
        sm: "h-10 px-4 text-sm",
        xl: "h-16 px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
