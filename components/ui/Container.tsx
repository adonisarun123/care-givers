import { cn } from "@/lib/cn";

export function Container({
  className,
  size = "default",
  children,
}: {
  className?: string;
  size?: "default" | "tight" | "wide";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "container",
        size === "tight" && "max-w-4xl",
        size === "wide" && "max-w-[1320px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
