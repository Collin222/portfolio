import { Oval } from "react-loader-spinner";
import { PRIMARY_COLOR } from "~/constants";

export default function Loader({
  size,
  color,
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <Oval
      width={size}
      height={size}
      color={color ?? PRIMARY_COLOR}
      secondaryColor={color ?? PRIMARY_COLOR}
      strokeWidth={5}
      wrapperClass={className}
    />
  );
}
