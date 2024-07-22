import { useRef, useState } from "react";
import AArrow from "./AArrow";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import { IconExternalLink } from "@tabler/icons-react";

export default function Project({
  link,
  img,
  name,
  description,
  logo,
  tagline,
}: {
  link: string;
  img: string;
  name: string;
  description: string;
  logo: string;
  tagline: string;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="relative aspect-[1.8/1] rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <CSSTransition
          in={hover}
          timeout={200}
          classNames="fade"
          unmountOnExit
          nodeRef={overlayRef}
        >
          <div
            ref={overlayRef}
            className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-70"
          >
            <Image src={logo} alt="project logo" width={50} height={50} />
          </div>
        </CSSTransition>
      </div>

      <div className="mt-2">
        <p className="font-medium">{name}</p>
        <p className="mt-1 text-xs text-blue-400">{tagline}</p>

        <p className="text-dimed mt-2 text-sm">{description}</p>

        <a
          href={link}
          target="_blank"
          className="mt-4 text-sm text-blue-400 hover:text-blue-300 flex items-center"
        >
          <IconExternalLink className="mr-1 inline-block" size={18} /> Live preview
        </a>
      </div>
    </div>
  );
}
