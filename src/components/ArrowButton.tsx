import { useState } from "react";
import { Button, type ButtonProps } from "~/components/ui/button";
import AArrow from "./AArrow";

export default function ArrowButton(
  props: ButtonProps &
    React.RefAttributes<HTMLButtonElement> & { initiallyHidden?: boolean },
) {
  const initiallyHidden = props.initiallyHidden ?? false;

  const [hovered, setHovered] = useState(false);

  return (
    <Button
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${props.className ?? ""} relative flex`}
    >
      {props.children}{" "}
      <AArrow
        show={hovered}
        className={`ml-2 ${initiallyHidden ? `duration-300 ${hovered ? "opacity-100" : "opacity-0"}` : ""}`}
      />
    </Button>
  );
}
