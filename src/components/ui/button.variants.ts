import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-md hover:shadow-xl",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus-visible:shadow-glow",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus-visible:shadow-destructive",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] hover:shadow-md active:scale-[0.98] focus-visible:shadow-outline",
        secondary:
          "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus-visible:shadow-glow",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98] focus-visible:shadow-outline",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        gradient: "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus-visible:shadow-glow",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4 py-1.5 text-xs",
        lg: "h-12 rounded-lg px-8 py-3 text-base",
        icon: "h-10 w-10 rounded-full",
        pill: "h-10 px-6 py-2 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
