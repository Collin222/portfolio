import Image from "next/image";
import Link from "next/link";
import ArrowButton from "./ArrowButton";
import { IconMenuDeep } from "@tabler/icons-react";
import { useScrollPosition } from "~/utils/hooks";
import { useEffect, useState } from "react";
import MobileHeaderMenu from "./MobileHeaderMenu";

export default function Header() {
  const scrollPosition = useScrollPosition();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={`container-padding fixed left-0 right-0 top-0 z-40 flex py-8 duration-300 ${showHeader || scrollPosition < 1 ? "translate-y-0 scale-y-100" : "-translate-y-20 scale-y-0"} ${scrollPosition > 0 ? "bg-amber-50 bg-opacity-50 shadow-2xl backdrop-blur-2xl" : ""}`}
    >
      <MobileHeaderMenu
        open={showMobileMenu}
        onOpenChange={setShowMobileMenu}
      />

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

      <div className="hidden flex-grow items-center justify-end gap-8 lg:flex">
        <Link href="/work" className="linkline">
          My Work
        </Link>

        <Link href="/about" className="linkline">
          About
        </Link>

        <Link href="/contact" className="linkline">
          Contact
        </Link>

        <Link href="/contact">
          <ArrowButton className="rounded-full border border-neutral-700 !bg-transparent p-6 text-black hover:!bg-neutral-700 hover:text-white">
            Get a Free Website Quote
          </ArrowButton>
        </Link>
      </div>

      <div className="flex flex-grow items-center justify-end lg:hidden">
        <IconMenuDeep
          className="cursor-pointer"
          onClick={() => setShowMobileMenu((v) => !v)}
        />
      </div>
    </div>
  );
}
