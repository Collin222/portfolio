import { useState } from "react";
import AArrow from "./AArrow";

export default function Project({
  link,
  img,
  name,
  description,
}: {
  link: string;
  img: string;
  name: string;
  description: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      className="h-fit cursor-pointer rounded-lg bg-blue-400 bg-opacity-0 shadow-blue-400 duration-200 hover:rotate-1 hover:scale-[1.02] hover:bg-opacity-20 hover:shadow-2xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={img}
        alt="project showcase"
        className="aspect-[2/1] rounded-t-lg"
      />

      <div className="rounded-b-lg border-2 border-t-0 border-blue-400 p-6">
        <h1 className="text-lg font-black">{name}</h1>
        <p className="text-dimmed text-sm">{description}</p>

        <span className="mt-4 flex items-center text-sm">
          Click to view <AArrow show={hover} className="ml-1 inline-block" />
        </span>
      </div>
    </a>
  );
}
