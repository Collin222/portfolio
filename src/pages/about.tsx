import { IconExternalLink, IconPointFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ArrowButton from "~/components/ArrowButton";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default function About() {
  const [width, setWidth] = useState("80%");
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        if (document.body.clientWidth < 1000) return setWidth("100%");

        const imageTop = (imageRef.current as any).getBoundingClientRect().top;
        const imageHeight = (imageRef.current as any).clientHeight;
        const windowHeight = window.innerHeight;
        const imageCenter = imageTop + imageHeight / 2;
        const viewportCenter = windowHeight / 2;
        const distanceToCenter = Math.abs(imageCenter - viewportCenter);

        const dist = imageCenter - viewportCenter;
        if (dist < 0) return setWidth("95%");

        // Calculate the new width based on the distance to the center
        const maxDistance = windowHeight / 2;
        const scrollFraction = Math.max(
          0,
          Math.min(1, 1 - distanceToCenter / maxDistance),
        );

        // Calculate new width between 60% and 90%
        const newWidth = 80 + 15 * scrollFraction;
        if (newWidth < 80) return setWidth("80%");
        setWidth(`${newWidth}%`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set the initial width

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-amber-50">
      <Header />

      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white bg-opacity-20 shadow-lg backdrop-blur-2xl md:top-[50vh] md:-translate-y-[50vh]"></div>

      <div className="gradientbg flex min-h-screen items-center justify-center xl:pr-[10vw]">
        <div className="container-padding py-36" data-aos="fade-up">
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Crafting exceptional websites that elevate your brand's digital
            presence
          </h1>

          <p className="mt-4 md:text-xl">
            I craft unique, high-converting websites that elevate your brand's
            digital presence. Partner with me to transform your online identity.
          </p>
        </div>
      </div>

      <div>
        <div className="-translate-y-32">
          <div className="flex w-full items-center justify-center">
            <div
              className="relative aspect-[16/9] overflow-hidden duration-75 md:rounded-md"
              style={{ width }}
            >
              <Image
                src="/img/melonly2.png"
                alt="melonly"
                fill
                ref={imageRef}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          </div>

          <div className="container-padding mt-10">
            <h1 className="mt-4 text-2xl">Melonly</h1>

            <p className="mb-4">
              Designed and developed a CRM solution for communities to scale and
              manage.
            </p>

            <Link
              href="https://melonly.xyz"
              className="duration-200 hover:text-teal-500 hover:underline"
              target="_blank"
            >
              <IconExternalLink className="mr-2 inline-block -translate-y-px" />{" "}
              Live preview
            </Link>
          </div>
        </div>
      </div>

      <div className="container-padding py-24 pt-0">
        <div className="grid grid-cols-8">
          <div className="col-span-8 flex-grow md:col-span-5">
            <h1 className="text-4xl">Why me?</h1>
            <p className="mt-4 text-lg">
              I’m Collin, and I specialize in hand-coded, custom web design that
              goes beyond the basics. With over 4 years of experience, I focus
              on creating unique, high-converting websites tailored to your
              brand. My approach combines meticulous craftsmanship with
              strategic design to ensure your site not only stands out but also
              drives results. Choose me for a personalized, expert touch that
              turns your vision into a standout digital presence.
            </p>
          </div>

          <div className="col-span-3 hidden h-fit justify-end md:flex">
            <div className="grid w-fit grid-cols-6 gap-2">
              {[
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
              ].map((x) =>
                x ? (
                  <IconPointFilled
                    size={12}
                    className="text-neutral-800 opacity-70"
                  />
                ) : (
                  <div></div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 grid w-fit grid-cols-6 gap-2 md:hidden">
          {[
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0,
          ].map((x) =>
            x ? (
              <IconPointFilled
                size={12}
                className="text-neutral-800 opacity-70"
              />
            ) : (
              <div></div>
            ),
          )}
        </div>
      </div>

      <div className="container-padding flex flex-col items-center border-y border-neutral-700 py-16">
        <h1 className="text-center text-4xl">
          Let's build something amazing together
        </h1>
        <Link href="/contact" className="w-full md:w-fit">
          <ArrowButton className="mt-6 w-full rounded-full border border-neutral-700 !bg-transparent p-6 text-black hover:!bg-neutral-700 hover:text-white md:p-8 md:text-lg">
            Get a free website quote
          </ArrowButton>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
