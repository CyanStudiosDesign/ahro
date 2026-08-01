import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

function joinClassNames(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  icon?: ReactNode;
}

export function Eyebrow({ icon, className, children, ...props }: EyebrowProps) {
  return (
    <span
      className={joinClassNames(
        "inline-flex w-fit items-center gap-2 rounded-pill bg-paper px-4 py-2 font-ui text-eyebrow font-semibold uppercase leading-[1.4] tracking-[0.08em] text-forest",
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
}

export function Chip({ active = false, className, children, ...props }: ChipProps) {
  return (
    <span
      className={joinClassNames(
        "inline-flex items-center justify-center rounded-pill border px-4 py-2 font-ui text-body font-medium leading-[1.3] transition-colors",
        active
          ? "border-forest bg-forest text-white"
          : "border-mist bg-white text-slate-1",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function ChipButton({
  active = false,
  className,
  children,
  type = "button",
  ...props
}: ChipButtonProps) {
  return (
    <button
      type={type}
      aria-pressed={active}
      className={joinClassNames(
        "inline-flex cursor-pointer items-center justify-center rounded-pill border px-4 py-2 font-ui text-body font-medium leading-[1.3] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest",
        active
          ? "border-forest bg-forest text-white"
          : "border-mist bg-white text-slate-1 hover:border-forest hover:text-forest",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  as: Heading = "h2",
  className,
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <Heading
      className={joinClassNames(
        "font-heading text-[22px] font-bold leading-[1.2] tracking-[-0.005em] text-ink sm:text-[26px] lg:text-h2",
        className
      )}
      {...props}
    >
      {children}
    </Heading>
  );
}

export function BodyText({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={joinClassNames(
        "max-w-[65ch] font-body text-[14px] font-normal leading-[1.6] text-slate-1 sm:text-body",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
