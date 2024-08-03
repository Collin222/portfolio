import { IconExternalLink, IconPointFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import ArrowButton from "~/components/ArrowButton";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default function Work() {
  return (
    <div className="max-w-screen relative overflow-x-hidden bg-amber-50">
      <Header />

      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white bg-opacity-20 shadow-lg backdrop-blur-2xl md:top-[50vh] md:-translate-y-[50vh]"></div>

      <div className="gradientbg flex min-h-screen items-center justify-center xl:pr-[10vw]">
        <div className="container-padding py-36" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-6xl">
            Transforming concepts into stunning websites
          </h1>

          <p className="mt-4 md:text-xl">Take a look at some of my work.</p>

          <div className="mt-10 grid w-fit grid-cols-6 gap-2">
            {[
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0,
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

      <div className="container-padding -translate-y-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
          <div className="group">
            <div className="relative aspect-[1.1/1] overflow-hidden rounded-md duration-200 hover:cursor-none group-hover:scale-105">
              <div className="absolute inset-0 flex items-center justify-center bg-sky-100">
                <Image
                  src="/img/discolyticslogo.png"
                  alt="discolytics"
                  width={100}
                  height={100}
                  className="z-20"
                />
              </div>
              <Image
                src="/img/discolytics.png"
                alt="discolytics"
                fill
                className="duration-200 group-hover:opacity-100 md:opacity-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 duration-200 group-hover:opacity-100 md:opacity-0"></div>
            </div>

            <h1 className="mt-4 text-2xl">Discolytics</h1>

            <p className="mb-4">
              Designed and developed a complete software solution for businesses
              developing on the chat app, Discord.
            </p>

            <Link
              href="https://discolytics.com"
              className="duration-200 hover:text-sky-500 hover:underline"
              target="_blank"
            >
              <IconExternalLink className="mr-2 inline-block -translate-y-px" />{" "}
              Live preview
            </Link>
          </div>

          <div className="group mt-20">
            <div className="relative aspect-[1.1/1] overflow-hidden rounded-md duration-200 hover:cursor-none group-hover:scale-105">
              <div className="absolute inset-0 flex items-center justify-center bg-teal-100">
                <Image
                  src="/img/melonlylogo.png"
                  alt="melonly"
                  width={200}
                  height={200}
                  className="z-20"
                />
              </div>
              <Image
                src="/img/melonly.png"
                alt="melonly"
                fill
                className="duration-200 group-hover:opacity-100 md:opacity-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 duration-200 group-hover:opacity-100 md:opacity-0"></div>
            </div>

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

      <div className="container-padding pb-24">
        <div className="group" data-aos="fade-up">
          <div className="relative mt-10 aspect-[1.8/1] overflow-hidden rounded-md duration-200">
            <Image src="/img/abclandscaping.png" alt="abclandscaping" fill />
            <div className="absolute inset-0 z-10 bg-black bg-opacity-10"></div>
          </div>

          <div className="mt-8 flex flex-grow flex-row gap-8">
            <div>
              <h1 className="text-2xl">ABC Landscaping</h1>

              <p className="mb-4">
                A demo design concept for landscaping businesses.
              </p>

              <Link
                href="https://landscaping.collin22.dev"
                className="duration-200 hover:text-green-500 hover:underline"
              >
                <IconExternalLink className="mr-2 inline-block -translate-y-px" />{" "}
                Live preview
              </Link>
            </div>

            <div className="flex justify-end">
              <div className="grid w-fit grid-cols-4 gap-2 md:hidden">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1].map((x) =>
                  x ? (
                    <IconPointFilled
                      size={12}
                      className="text-green-500 opacity-70"
                    />
                  ) : (
                    <div></div>
                  ),
                )}
              </div>
            </div>
          </div>
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
