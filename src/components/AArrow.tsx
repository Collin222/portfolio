import { IconArrowRight, IconChevronRight } from "@tabler/icons-react";

export default function AArrow({
  show,
  className,
  size,
}: {
  show: boolean;
  className?: string;
  size?: number;
}) {
  return (
    <div className={`relative h-6 w-4 translate-y-1 ${className}`}>
      <IconChevronRight
        size={size ?? 18}
        className={`absolute inset-0 ${show ? "translate-x-2 scale-0 opacity-0" : "scale-100 opacity-100"} duration-300`}
      />
      <IconArrowRight
        size={size ?? 18}
        className={`absolute inset-0 ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-300`}
      />
    </div>
  );
}
