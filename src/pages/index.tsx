import { useEffect, useRef, useState } from "react";
import ArrowButton from "~/components/ArrowButton";
import Shine from "~/components/Shine";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CSSTransition } from "react-transition-group";
import {
  IconArrowWaveLeftUp,
  IconBrandDiscordFilled,
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandXFilled,
  IconExternalLink,
  IconMailFilled,
} from "@tabler/icons-react";
import Project from "~/components/Project";
import ContactForm from "~/components/ContactForm";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const carouselRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLFormElement>(null);

  const [contactForm, setContactForm] = useState(false);

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
    <div className="max-w-screen overflow-x-hidden">
      <div className="relative grid min-h-screen grid-cols-1 rounded-b-xl bg-[url(/img/bg.png)] bg-cover bg-center shadow-2xl shadow-black md:grid-cols-2">
        <div className="absolute inset-0 rounded-b-xl bg-black bg-opacity-60"></div>

        <div className="relative z-10 flex animate-appear flex-col justify-center p-8 py-36 text-white lg:p-20">
          <h1 className="text-xl font-bold">Hey, I'm Collin Cronin</h1>

          <h1 className="mt-8 text-3xl font-black">
            Creating beautiful and engaging websites since 2020
          </h1>

          <p className="mt-4 text-gray-100">
            I create websites that stand out from the industry norm, offering
            engaging and unique experiences tailored to captivate customers and
            help businesses gain valuable leads.
          </p>

          <div className="mt-4 flex w-full flex-col gap-4 lg:flex-row">
            <Link href="#contact" className="flex-grow">
              <ArrowButton
                className="w-full overflow-hidden rounded-3xl bg-blue-400 p-4 text-white shadow-2xl shadow-blue-400 hover:bg-blue-300"
                onClick={() => setContactForm(true)}
              >
                Get a Free Website Quote
                <Shine />
              </ArrowButton>
            </Link>

            <Link href="#work" className="flex-grow">
              <ArrowButton className="w-full rounded-3xl bg-white p-4 text-black hover:bg-white hover:bg-opacity-90">
                View my work
              </ArrowButton>
            </Link>
          </div>

          <p className="ml-6 mt-6 rotate-2 text-sm font-medium text-white md:ml-12">
            <IconArrowWaveLeftUp className="mr-2 inline-block -translate-y-1 rotate-[20deg]" />
            Let's talk – get a free website quote, hire me for a project, or ask
            a question
          </p>

          <div className="absolute bottom-0 left-0 mt-4 flex gap-4 p-8 lg:p-20">
            <a href="https://github.com/Collin222" target="_blank">
              <IconBrandGithubFilled />
            </a>
            <a href="https://x.com/Collin22h" target="_blank">
              <IconBrandXFilled />
            </a>

            <a href="mailto:collincronin227@gmail.com" target="_blank">
              <IconMailFilled />
            </a>

            <a
              href="https://discord.com/users/693570309491654726"
              target="_blank"
            >
              <IconBrandDiscordFilled />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61563577731758"
              target="_blank"
            >
              <IconBrandFacebookFilled />
            </a>
          </div>
        </div>

        <div
          id="contact"
          className="relative flex items-center justify-center overflow-x-hidden rounded-xl bg-blue-400 py-10 shadow-2xl shadow-blue-400 md:rounded-none md:rounded-bl-[100px] md:rounded-br-xl"
        >
          <CSSTransition
            in={contactForm}
            timeout={500}
            classNames="fade"
            nodeRef={contactRef}
            unmountOnExit
          >
            <>
              <div className="h-[450px]"></div>
              <ContactForm
                onClose={() => setContactForm(false)}
                passRef={contactRef}
              />
            </>
          </CSSTransition>

          <CSSTransition
            in={!contactForm}
            timeout={500}
            classNames="fade"
            nodeRef={carouselRef}
            unmountOnExit
          >
            <Carousel
              ref={carouselRef}
              className="mx-20 animate-appear"
              plugins={[
                Autoplay({
                  delay: 6000,
                }),
              ]}
            >
              <CarouselPrevious className="border-black !bg-transparent text-black hover:text-black" />
              <CarouselNext className="border-black !bg-transparent text-black hover:text-black" />
              <CarouselContent>
                <CarouselItem>
                  <h1 className="mb-6 text-center text-lg font-bold">
                    Featured Work
                  </h1>

                  <img
                    src="/img/discolytics.png"
                    alt="discolytics"
                    className="aspect-[2/1] rounded-2xl border-2 border-dimmed shadow-black"
                  />

                  <h1 className="mt-6 text-center font-medium">
                    Discolytics – Founder & CEO, created and designed the
                    website
                  </h1>
                  <ArrowButton
                    variant="link"
                    className="m-0 mx-auto p-0 hover:no-underline hover:opacity-70"
                  >
                    <a href="https://www.discolytics.com" target="_blank">
                      <IconExternalLink
                        size={18}
                        className="mr-1 inline-block"
                      />{" "}
                      Live preview
                    </a>
                  </ArrowButton>
                </CarouselItem>

                <CarouselItem>
                  <h1 className="mb-6 text-center text-lg font-bold">
                    Featured Work
                  </h1>

                  <img
                    src="/img/melonly.png"
                    alt="melonly"
                    className="aspect-[2/1] rounded-2xl border-2 border-dimmed shadow-black"
                  />

                  <h1 className="mt-6 text-center font-medium">
                    Melonly – Founder, created and designed the website
                  </h1>
                  <ArrowButton
                    variant="link"
                    className="m-0 mx-auto p-0 hover:no-underline hover:opacity-70"
                  >
                    <a href="https://melonly.xyz" target="_blank">
                      <IconExternalLink
                        size={18}
                        className="mr-1 inline-block"
                      />{" "}
                      Live preview
                    </a>
                  </ArrowButton>
                </CarouselItem>

                <CarouselItem>
                  <h1 className="mb-6 text-center text-lg font-bold">
                    Featured Work
                  </h1>

                  <img
                    src="/img/abclandscaping.png"
                    alt="melonly"
                    className="aspect-[2/1] rounded-2xl border-2 border-dimmed shadow-black"
                  />

                  <h1 className="mt-6 text-center font-medium">
                    ABC Landscaping – A demo website
                  </h1>
                  <ArrowButton
                    variant="link"
                    className="m-0 mx-auto p-0 hover:no-underline hover:opacity-70"
                  >
                    <a
                      href="https://landscaping-template-six.vercel.app/"
                      target="_blank"
                    >
                      <IconExternalLink
                        size={18}
                        className="mr-1 inline-block"
                      />{" "}
                      Live preview
                    </a>
                  </ArrowButton>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </CSSTransition>
        </div>
      </div>

      <div className="px-8 py-36 lg:px-48" id="work">
        <h1 className="text-2xl font-black">My Work</h1>
        <p className="text-lg text-dimmed">
          My unique, engaging creations for the web.{" "}
          <Link
            href="#contact"
            onClick={() => setContactForm(true)}
            className="text-blue-400 hover:text-blue-300"
          >
            Hire me?
          </Link>
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <Project
            link="https://www.discolytics.com"
            img="/img/discolytics.png"
            name="Discolytics – Founder & CEO"
            description="Founder & CEO, created and designed the website. Discolytics is a powerful software as a service product that helps businesses on Discord, a chat app, scale and grow."
            logo="/img/discolyticslogo.png"
            tagline="Next.js / TypeScript / Stripe"
          />

          <Project
            link="https://melonly.xyz"
            img="/img/melonly.png"
            name="Melonly – Founder"
            description="Founder, created and designed the website. Melonly is a strong CRM for communities online to manage and grow their community."
            logo="/img/melonlylogo.png"
            tagline="Next.js / TypeScript / MySQL"
          />

          <Project
            link="https://landscaping-template-six.vercel.app/"
            img="/img/abclandscaping.png"
            name="ABC Landscaping – A demo website"
            description="ABC Landscaping is a demo website built to showcase my skills in web development."
            logo="/img/melonlylogo.png"
            tagline="Next.js / TypeScript / CSS"
          />
        </div>
      </div>

      <div className="mb-40 grid grid-cols-1 gap-12 px-8 md:grid-cols-2 lg:px-48">
        <div>
          <h1 className="text-2xl font-black">Where am I?</h1>
          <p className="text-lg text-dimmed">
            I live in Huntley Illinois and the Chicago area. Are you a local
            business? I would love to work with you!
          </p>
        </div>

        <div className="md:flex md:justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94635.11756671575!2d-88.5177102397546!3d42.164249518565484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f1440e587b80f%3A0xd6ad845ff11f34fc!2sHuntley%2C%20IL%2060142!5e0!3m2!1sen!2sus!4v1721939961752!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: "0", borderRadius: "6px" }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="relative bg-neutral-900 px-8 py-20 lg:px-48">
        <div className="absolute left-0 right-0 top-0 h-20 w-[150%] -translate-y-12 -rotate-2 bg-neutral-900"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="px-8">
            <h1 className="text-2xl font-black text-white">Collin Cronin</h1>
            <p className="mt-1 text-gray-200">Web Design and Development</p>

            <div className="mt-4 flex flex-col gap-4 text-white">
              <a href="https://github.com/Collin222" target="_blank" className="hover:underline flex flex-row gap-2 items-center text-sm text-gray-200">
                <IconBrandGithubFilled className="text-white" /> @Collin222
              </a>
              <a href="https://x.com/Collin22h" target="_blank" className="hover:underline flex flex-row gap-2 items-center text-sm text-gray-200">
                <IconBrandXFilled className="text-white" /> @Collin22h
              </a>

              <a href="mailto:collincronin227@gmail.com" target="_blank" className="hover:underline flex flex-row gap-2 items-center text-sm text-gray-200">
                <IconMailFilled className="text-white" /> collincronin227@gmail.com
              </a>

              <a
                href="https://discord.com/users/693570309491654726"
                target="_blank" className="hover:underline flex flex-row gap-2 items-center text-sm text-gray-200"
              >
                <IconBrandDiscordFilled className="text-white" /> @collin22
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61563577731758"
                target="_blank" className="hover:underline flex flex-row gap-2 items-center text-sm text-gray-200"
              >
                <IconBrandFacebookFilled className="text-white" /> Collin Cronin 
              </a>
            </div>
          </div>

          <div className="relative">
            <ContactForm darkBg />
          </div>
        </div>
      </div>
    </div>
  );
}
