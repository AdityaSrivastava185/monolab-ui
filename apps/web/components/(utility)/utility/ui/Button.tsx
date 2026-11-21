import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    disabled?: boolean
    loading?: boolean
    icon?: React.ReactNode
    variant?: "primary" | "secondary"
    outerBorder?: boolean
}

const Button = ({
    children,
    className,
    onClick,
    disabled,
    loading = false,
    icon,
    variant = "primary",
    outerBorder = true
}: ButtonProps) => {
    const baseStyles =
        "w-full px-5 py-3 cursor-pointer flex items-center justify-between gap-2 transition-all duration-300";

    const variants = {
        primary: "bg-foreground text-background rounded-md md:rounded-xl hover:bg-foreground/90",
        secondary: "rounded-full border border-foreground/10 bg-foreground/5 text-foreground backdrop-blur-2xl hover:bg-foreground/10",
    };

    return (
        <div className={`w-full md:w-fit p-4 md:p-0 ${outerBorder ? "border transition-all duration-300 border-transparent rounded-xl hover:border hover:border-dashed hover:border-foreground" : ""} -mt-5 md:mt-0`}>
            <button
                disabled={disabled}
                onClick={onClick}
                className={cn(
                    baseStyles,
                    variants[variant],
                    disabled && "opacity-50 cursor-not-allowed",
                    className
                )}
            >
                {loading && <span className="text-lg"><Loader2 className="w-4 h-4 animate-spin" /></span>}
                {children}
                {icon && <span className="text-lg">{icon}</span>}
            </button>
        </div>
    );
};

export default Button;