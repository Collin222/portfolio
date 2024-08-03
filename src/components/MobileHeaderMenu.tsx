import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useOutsideClick } from "~/utils/hooks";

export default function MobileHeaderMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, { onOutsideClick: () => onOpenChange(false) });

  useEffect(() => {
    if (!ref.current) return;
    if (open) {
      ref.current.style.height = ref.current.scrollHeight + 8 + "px";
    } else {
      ref.current.style.height = "0px";
    }
  }, [open]);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 absolute left-2 right-2 top-2 rounded-xl bg-white bg-opacity-70 p-4 shadow-2xl backdrop-blur-2xl duration-300 ${open ? "z-50 translate-y-0 opacity-100" : "-z-50 -translate-y-96 opacity-0"}`}
    >
      <div className="relative mb-4 flex">
        <Link href="/" className="group flex items-center gap-4">
          <Image
            src="/brand/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="drop-shadow-lg duration-200 group-hover:scale-105"
          />
          <div>
            <h1 className="text-lg font-bold">Collin Cronin</h1>
            <p className="text-sm">Web Design & Development</p>
          </div>
        </Link>

        <IconX
          size={20}
          className="text-dimmed absolute right-3 top-4 cursor-pointer"
          onClick={() => onOpenChange(false)}
        />
      </div>

      <Link href="/work" className="p-2 hover:text-black">
        My Work
      </Link>

      <Link href="/about" className="p-2 hover:text-black">
        About
      </Link>

      <Link href="/contact" className="p-2 hover:text-black">
        Contact
      </Link>
    </div>
  );
}
