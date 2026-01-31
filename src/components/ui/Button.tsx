import { cn } from "@/lib/utils";
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-sans transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    {
                        // Variants
                        "bg-im8-red text-white hover:bg-im8-red/90": variant === "primary",
                        "bg-im8-cream text-im8-red hover:bg-im8-cream/80": variant === "secondary",
                        "border border-im8-red text-im8-red hover:bg-im8-red/5": variant === "outline",
                        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",

                        // Sizes
                        "h-8 px-3 text-xs": size === "sm",
                        "h-10 px-6 py-2 text-sm font-semibold": size === "md",
                        "h-12 px-8 text-base font-semibold": size === "lg",
                        "h-14 px-10 text-lg font-bold": size === "xl",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
