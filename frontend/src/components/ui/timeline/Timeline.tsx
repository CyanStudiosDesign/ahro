import { cn } from "@/lib/utils";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export default function Timeline({
  children,
  className,
}: TimelineProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {children}
    </div>
  );
}