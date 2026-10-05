import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconRightHover?: React.ReactNode;
  animateIcon?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      iconLeft,
      iconRight,
      iconRightHover,
      animateIcon = false,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm",
      secondary: "bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500 shadow-sm",
      outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
      ghost: "text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
      destructive: "bg-error-500 text-white hover:bg-error-600 focus:ring-error-500 shadow-sm",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5",
      md: "px-6 py-3 text-base gap-2",
      lg: "px-8 py-4 text-lg gap-2.5",
      xl: "px-10 py-5 text-xl gap-3",
    };

    const animateStyles = animateIcon
      ? "group relative overflow-hidden"
      : "";

    const iconLeftStyles = animateIcon && iconLeft
      ? "transition-transform duration-200 group-hover:-translate-x-2 group-hover:opacity-0"
      : "";

    const iconRightStyles = animateIcon && (iconRight || iconRightHover)
      ? "transition-transform duration-200"
      : "";

    const iconRightHoverStyles = animateIcon && iconRightHover
      ? "absolute right-[1rem] top-1/2 -translate-y-1/2 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
      : "absolute right-[1rem] top-1/2 -translate-y-1/2 opacity-0 pointer-events-none";

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], fullWidth && "w-full", animateStyles, className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {iconLeft && (
              <span className={cn("flex-shrink-0", iconLeftStyles)} aria-hidden="true">
                {iconLeft}
              </span>
            )}
            {children}
            {animateIcon && (iconRight || iconRightHover) && (
              <span className="relative flex-shrink-0" aria-hidden="true">
                {iconRight && (
                  <span className={cn("transition-transform duration-200", iconRightStyles)}>
                    {iconRight}
                  </span>
                )}
                {iconRightHover && (
                  <span className={iconRightHoverStyles}>
                    {iconRightHover}
                  </span>
                )}
              </span>
            )}
            {!animateIcon && !loading && iconRight && (
              <span className="flex-shrink-0" aria-hidden="true">
                {iconRight}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";