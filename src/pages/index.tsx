import { useEffect } from "react";
import { useRouter } from "next/router";
import ArrowButton from "~/components/ArrowButton";
import Header from "~/components/Header";
import {
  IconArrowWaveLeftUp,
  IconExternalLink,
  IconLeaf,
  IconPointFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import Footer from "~/components/Footer";
import Shine from "~/components/Shine";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    removeHash();
  }, [router]);

  function removeHash() {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search,
    );
  }

  return (
    <div className="max-w-screen relative overflow-x-hidden bg-amber-50">
      <Header />

      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white bg-opacity-20 shadow-lg backdrop-blur-2xl md:top-[50vh] md:-translate-y-[50vh]"></div>

      <div className="gradientbg flex min-h-screen items-center justify-center xl:pr-[10vw]">
        <div className="container-padding py-36" data-aos="fade-up">
          <div className="flex items-center gap-2">
            <IconUserFilled />
            <h2 className="md:text-xl">Hey, I'm Collin Cronin</h2>
          </div>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Creating beautiful and engaging websites since 2020
          </h1>

          <p className="mt-4 md:text-xl">
            I create websites that stand out from the industry norm, offering
            engaging and unique experiences tailored to captivate customers and
            help businesses gain valuable leads.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
            <Link className="w-full md:w-fit" href="/contact">
              <ArrowButton className="relative w-full overflow-hidden rounded-full bg-neutral-700 p-6 hover:!bg-neutral-700 hover:!bg-opacity-80 md:p-8 md:text-lg">
                Get a Free Website Quote
                <Shine />
              </ArrowButton>
            </Link>
            <Link className="w-full md:w-fit" href="/work">
              <ArrowButton className="w-full rounded-full border border-neutral-700 !bg-transparent p-6 text-black hover:!bg-neutral-700 hover:text-white md:p-8 md:text-lg">
                View my Work
              </ArrowButton>
            </Link>
          </div>

          <p className="ml-6 mt-8 max-w-96 rotate-2 md:ml-12">
            <IconArrowWaveLeftUp className="mr-2 inline-block -translate-y-1 rotate-[20deg]" />
            Get a free website quote for your business – I'll work with you to
            design the website of your dreams
          </p>
        </div>
      </div>

      <div
        className="container-padding grid grid-cols-1 gap-10 py-24 md:grid-cols-2 md:gap-20"
        data-aos="fade-up"
      >
        <div>
          <p className="text-lg md:text-2xl">
            Hi, I'm Collin! With 4+ years in web development, I specialize in
            creating business websites. My focus is on generating more leads and
            driving growth for your business.
          </p>

          <Link href="/about">
            <ArrowButton className="mt-6 w-full rounded-full border border-neutral-700 !bg-transparent p-6 text-black hover:!bg-neutral-700 hover:text-white md:w-fit">
              Learn about me
            </ArrowButton>
          </Link>

          <div className="mt-10 hidden w-fit grid-cols-4 gap-2 md:grid">
            {[
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1,
            ].map(() => (
              <IconPointFilled
                size={12}
                className="text-neutral-800 opacity-70"
              />
            ))}
          </div>
        </div>

        <div>
          <Accordion type="single">
            <AccordionItem value="1">
              <AccordionTrigger className="text-start text-lg md:text-2xl">
                What experience do you have?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">
                I’ve been creating websites and software for over four years.
                During this time, I've built everything from dynamic websites to
                custom software solutions. My goal is always to bring your
                vision to life with creativity and technical skill.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="2">
              <AccordionTrigger className="text-start text-lg md:text-2xl">
                How much does a website cost?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">
                The cost of a website really depends on the project. For simple
                websites, prices typically start at a few hundred USD. More
                complex projects will naturally cost more, but we can discuss
                your needs and budget to find the perfect solution for you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="3">
              <AccordionTrigger className="text-start text-lg md:text-2xl">
                Can you redesign my website?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">
                Absolutely! I can give your website a fresh, modern look while
                improving its functionality. Whether you need a complete
                overhaul or just a few tweaks, I’ll work with you to make sure
                your site stands out and meets your goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="4">
              <AccordionTrigger className="text-start text-lg md:text-2xl">
                What separates you from other website designers and developers?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">
                What sets me apart is my commitment to hand-coding every
                website. This approach allows me to fully customize your site,
                ensuring every detail fits your unique needs. Unlike restrictive
                templates, hand-coding results in a unique, high-performing
                website designed to engage visitors and drive conversions
                effectively.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-10 grid w-fit grid-cols-4 gap-2 md:hidden">
          {[
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          ].map(() => (
            <IconPointFilled
              size={12}
              className="text-neutral-800 opacity-70"
            />
          ))}
        </div>
      </div>

      <div className="container-padding bg-sky-50 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
          <div className="group">
            <div
              className="relative aspect-[1.1/1] overflow-hidden rounded-md duration-200 hover:cursor-none group-hover:scale-105"
              data-aos="fade-up"
            >
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
            <div
              className="relative aspect-[1.1/1] overflow-hidden rounded-md duration-200 hover:cursor-none group-hover:scale-105"
              data-aos="fade-up"
            >
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

        <div className="mt-16 flex justify-center">
          <Link href="/work">
            <ArrowButton variant="link" className="text-lg underline">
              View all my work
            </ArrowButton>
          </Link>
        </div>
      </div>

      <div className="container-padding pt-24">
        <div data-aos="fade-up">
          <div className="md:w-2/3">
            <h1 className="text-4xl">
              Mastering SEO, branding, and complex functionality for your
              success
            </h1>
            <p className="mt-4 text-lg">
              Unlock the full potential of your digital strategy with my
              expertise in SEO, dynamic branding, and advanced functionality. I
              craft solutions that not only stand out but also perform, ensuring
              your website excels in search rankings and user engagement.
            </p>
          </div>
        </div>
      </div>

      <div
        className="md:container-padding mt-10 grid grid-cols-1 gap-6 px-[5vw] pb-24 lg:grid-cols-3"
        data-aos="fade-up"
      >
        <div
          className="group relative aspect-[3/1] overflow-hidden rounded-md lg:aspect-[1.5/1]"
          data-aos="fade-up"
        >
          <Image src="/img/seo.png" alt="seo" fill className="object-cover" />
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm duration-200 group-hover:bg-opacity-50 group-hover:backdrop-blur-xl">
            <h1 className="text-5xl font-bold text-white">SEO</h1>
          </div>
        </div>

        <div
          className="group relative aspect-[3/1] overflow-hidden rounded-md lg:aspect-[1.5/1]"
          data-aos="fade-up"
        >
          <Image
            src="/img/branding.png"
            alt="seo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm duration-200 group-hover:bg-opacity-50 group-hover:backdrop-blur-xl">
            <h1 className="text-5xl font-bold text-white">Branding</h1>
          </div>
        </div>

        <div
          className="group relative aspect-[3/1] overflow-hidden rounded-md lg:aspect-[1.5/1]"
          data-aos="fade-up"
        >
          <Image
            src="/img/functionality.png"
            alt="seo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm duration-200 group-hover:bg-opacity-50 group-hover:backdrop-blur-xl">
            <h1 className="text-5xl font-bold text-white">Functionality</h1>
          </div>
        </div>
      </div>

      <div className="container-padding bg-rose-50 py-24">
        <div
          className="flex flex-col gap-4 lg:flex-row lg:gap-20"
          data-aos="fade-up"
        >
          <div className="flex-grow lg:w-2/3">
            <h2 className="mb-4 text-lg text-green-500">
              <IconLeaf className="mr-1 inline-block" size={20} /> Landscaping
            </h2>

            <h1 className="text-4xl">
              Creating beautiful, high-converting websites for landscaping
              businesses that elevate your online presence
            </h1>

            <Link href="/work">
              <ArrowButton className="mt-6 w-full rounded-full border border-neutral-700 !bg-transparent p-6 text-black hover:!bg-neutral-700 hover:text-white md:w-fit">
                View my work
              </ArrowButton>
            </Link>
          </div>

          <div className="flex justify-end">
            <div className="hidden w-fit grid-cols-6 gap-2 md:grid">
              {[
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
              ].map((x) =>
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

        <div className="group md:w-3/4" data-aos="fade-up">
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

      <div className="container-padding py-24">
        <div data-aos="fade-up" className="md:w-2/3">
          <h1 className="text-4xl">
            Transform your vision into high-performing, high-converting websites
          </h1>

          <p className="mt-4 text-lg">
            Elevate your online presence with expertly crafted websites designed
            for peak performance and conversion. My bespoke solutions ensure
            every detail works in harmony to captivate your audience and drive
            results.
          </p>

          <Link href="/contact">
            <ArrowButton className="mt-6 w-full rounded-full border border-neutral-700 !bg-transparent p-6 text-black hover:!bg-neutral-700 hover:text-white md:w-fit">
              Get a free website quote
            </ArrowButton>
          </Link>
        </div>
      </div>

      <div className="container-padding bg-neutral-900 py-24 text-gray-200">
        <div data-aos="fade-up" className="grid grid-cols-6">
          <div className="col-span-6 md:col-span-4">
            <h1 className="text-4xl font-bold text-white">FAQ</h1>

            <Accordion type="single" className="mt-10">
              <AccordionItem value="1" className="border-neutral-400">
                <AccordionTrigger className="text-start text-lg md:text-2xl">
                  What experience do you have?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">
                  I’ve been creating websites and software for over four years.
                  During this time, I've built everything from dynamic websites
                  to custom software solutions. My goal is always to bring your
                  vision to life with creativity and technical skill.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2" className="border-neutral-400">
                <AccordionTrigger className="text-start text-lg md:text-2xl">
                  How much does a website cost?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">
                  The cost of a website really depends on the project. For
                  simple websites, prices typically start at a few hundred USD.
                  More complex projects will naturally cost more, but we can
                  discuss your needs and budget to find the perfect solution for
                  you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3" className="border-neutral-400">
                <AccordionTrigger className="text-start text-lg md:text-2xl">
                  Can you redesign my website?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">
                  Absolutely! I can give your website a fresh, modern look while
                  improving its functionality. Whether you need a complete
                  overhaul or just a few tweaks, I’ll work with you to make sure
                  your site stands out and meets your goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="4" className="border-neutral-400">
                <AccordionTrigger className="text-start text-lg md:text-2xl">
                  What separates you from other website designers and
                  developers?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">
                  What sets me apart is my commitment to hand-coding every
                  website. This approach allows me to fully customize your site,
                  ensuring every detail fits your unique needs. Unlike
                  restrictive templates, hand-coding results in a unique,
                  high-performing website designed to engage visitors and drive
                  conversions effectively.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="col-span-2 hidden h-fit justify-end md:flex">
            <div className="grid w-fit grid-cols-6 gap-2">
              {[
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
              ].map((x) =>
                x ? (
                  <IconPointFilled
                    size={12}
                    className="text-white opacity-70"
                  />
                ) : (
                  <div></div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
