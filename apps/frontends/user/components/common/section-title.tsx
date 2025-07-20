import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionTitleVariants = cva("space-y-4", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    align: "center",
  },
});

export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionTitleVariants> {}

const SectionTitle = React.forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ className, align, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(sectionTitleVariants({ align }), className)}
      {...props}
    />
  )
);
SectionTitle.displayName = "SectionTitle";

const SectionTitleHeader = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-3xl font-bold text-primary tracking-wide font-serif",
      className
    )}
    {...props}
  />
));
SectionTitleHeader.displayName = "SectionTitleHeader";

const SectionTitleDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-muted-foreground", className)} {...props} />
));
SectionTitleDescription.displayName = "SectionTitleDescription";

export { SectionTitle, SectionTitleHeader, SectionTitleDescription };
