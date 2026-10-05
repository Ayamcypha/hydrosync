import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Separator = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement> & { orientation?: "horizontal" | "vertical"; decorative?: boolean }>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn(
        "border-neutral-200",
        orientation === "horizontal" ? "w-full" : "h-full",
        className
      )}
      aria-orientation={orientation}
      role={decorative ? "none" : "separator"}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", padding = true, children, ...props }, ref) => {
    const sizes = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-[80rem]",
      full: "max-w-full",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto",
          sizes[size],
          padding && "px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  responsive?: boolean;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 3, gap = "md", responsive = true, children, ...props }, ref) => {
    const gaps = {
      none: "gap-0",
      sm: "gap-3",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    };

    const responsiveCols = responsive
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : `grid-cols-${cols}`;

    return (
      <div
        ref={ref}
        className={cn("grid", responsiveCols, gaps[gap], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Grid.displayName = "Grid";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  wrap?: boolean;
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ className, direction = "row", align = "stretch", justify = "start", gap = "md", wrap = false, children, ...props }, ref) => {
    const gaps = {
      none: "gap-0",
      sm: "gap-3",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          `flex-${direction}`,
          `items-${align}`,
          `justify-${justify}`,
          gaps[gap],
          wrap && "flex-wrap",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Flex.displayName = "Flex";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg" | "xl";
  background?: "none" | "neutral" | "primary" | "dark";
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, size = "lg", background = "none", children, ...props }, ref) => {
    const sizes = {
      sm: "py-12 sm:py-16",
      md: "py-16 sm:py-20",
      lg: "py-20 sm:py-24",
      xl: "py-24 sm:py-32",
    };

    const backgrounds = {
      none: "",
      neutral: "bg-neutral-50",
      primary: "bg-primary-600",
      dark: "bg-neutral-900",
    };

    return (
      <section
        ref={ref}
        className={cn(sizes[size], backgrounds[background], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";

export const VisuallyHidden = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
        "clip-[rect(0,0,0,0)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
);
VisuallyHidden.displayName = "VisuallyHidden";