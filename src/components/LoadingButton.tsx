import { Button, ButtonProps } from "~/components/ui/button";
import Loader from "./Loader";
import React from "react";

export default function LoadingButton({
  loading,
  children,
  loadingColor,
  ...props
}: ButtonProps &
  React.RefAttributes<HTMLButtonElement> & {
    loading: boolean;
    loadingColor?: string;
  }) {
  return (
    <Button
      {...props}
      className={`relative overflow-hidden ${props?.className ?? ""}`}
    >
      <div
        className={`absolute inset-0 flex h-full w-full items-center justify-center duration-200 ${loading ? "translate-y-0" : "translate-y-[-100%]"}`}
      >
        <Loader size={20} color={loadingColor} />
      </div>

      <span className="-z-20 opacity-0">{children}</span>

      <div
        className={`absolute inset-0 flex h-full w-full items-center justify-center duration-200 ${loading ? "translate-y-[-100%]" : "translate-y-0"}`}
      >
        {children}
      </div>
    </Button>
  );
}
