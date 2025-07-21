import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'muted' | 'gradient';
  curveTop?: boolean;
  curveBottom?: boolean;
  innerClassName?: string;
}

export const Section = ({
  children,
  className = "",
  variant = "default",
  curveTop = false,
  curveBottom = false,
  innerClassName = "",
  ...props
}: SectionProps) => {
  const variants = {
    default: "bg-background text-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    muted: "bg-muted/40 text-foreground",
    gradient: "bg-gradient-to-br from-primary/10 via-background to-secondary/10 text-foreground",
  };

  return (
    <section 
      className={cn(
        "relative py-16 md:py-24 overflow-hidden",
        variants[variant],
        className
      )}
      {...props}
    >
      {/* Top curve */}
      {curveTop && (
        <div className="absolute top-0 left-0 right-0 h-16 -translate-y-1/2 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 w-[200%] h-full -translate-x-1/2 rounded-t-[50%] bg-inherit"></div>
        </div>
      )}

      <div
        className={cn(
          "relative z-10 w-full max-w-full px-4 md:px-8 lg:px-16 xl:px-32",
          innerClassName
        )}
      >
        {children}
      </div>

      {/* Bottom curve */}
      {curveBottom && (
        <div className="absolute bottom-0 left-0 right-0 h-16 translate-y-1/2 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-[200%] h-full -translate-x-1/2 rounded-b-[50%] bg-inherit"></div>
        </div>
      )}
    </section>
  );
};

export const SectionTitle = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={cn(
      "text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block mx-auto px-6",
      "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-primary after:rounded-full",
      className
    )}
    {...props}
  >
    {children}
  </h2>
);

export const SectionSubtitle = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={cn(
      "text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12",
      className
    )}
    {...props}
  >
    {children}
  </p>
);
