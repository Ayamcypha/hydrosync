import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "error" | "warning" | "outline";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", dot = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-neutral-100 text-neutral-700",
      primary: "bg-primary-100 text-primary-700",
      secondary: "bg-secondary-100 text-secondary-700",
      success: "bg-success-50 text-success-600",
      error: "bg-red-50 text-red-600",
      warning: "bg-yellow-50 text-yellow-600",
      outline: "bg-transparent border border-neutral-300 text-neutral-700",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1.5 text-base",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 font-medium rounded-full",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square";
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, name, size = "md", shape = "circle", ...props }, ref) => {
    const sizes = {
      xs: "w-6 h-6 text-xs",
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-base",
      lg: "w-12 h-12 text-lg",
      xl: "w-16 h-16 text-xl",
    };

    const shapes = {
      circle: "rounded-full",
      square: "rounded-xl",
    };

    const getInitials = (name: string) => {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    };

    const bgColors = [
      "bg-primary-100 text-primary-700",
      "bg-secondary-100 text-secondary-700",
      "bg-green-100 text-green-700",
      "bg-purple-100 text-purple-700",
      "bg-pink-100 text-pink-700",
      "bg-blue-100 text-blue-700",
    ];

    const colorIndex = name ? name.charCodeAt(0) % bgColors.length : 0;

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold overflow-hidden",
          sizes[size],
          shapes[shape],
          className
        )}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt || name || "Avatar"} className="w-full h-full object-cover" />
        ) : name ? (
          <span className={bgColors[colorIndex]}>{getInitials(name)}</span>
        ) : (
          <svg className="w-full h-full text-neutral-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export const AvatarGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { max?: number; size?: AvatarProps["size"] }>(
  ({ className, max = 5, size = "md", children, ...props }, ref) => {
    const kids = Array.isArray(children) ? children : [children];
    const visible = kids.slice(0, max);
    const remaining = kids.length - max;

    return (
      <div ref={ref} className={cn("flex -space-x-2", className)} {...props}>
        {visible.map((child, index) => (
          <div key={index} className="relative z-[auto]">
            {child}
          </div>
        ))}
        {remaining > 0 && (
          <div className={cn("relative z-0 ml-1 flex items-center justify-center border-2 border-white", { "w-6 h-6 text-xs": size === "xs", "w-8 h-8 text-sm": size === "sm", "w-10 h-10 text-base": size === "md", "w-12 h-12 text-lg": size === "lg", "w-16 h-16 text-xl": size === "xl" })}>
            +{remaining}
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";