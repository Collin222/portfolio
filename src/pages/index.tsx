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
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandXFilled,
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
      <div className="grid min-h-screen grid-cols-1 rounded-b-xl bg-[url(/img/bg.png)] bg-cover bg-center shadow-2xl shadow-black md:grid-cols-2">
        <div className="absolute inset-0 rounded-b-xl bg-black bg-opacity-60"></div>

        <div className="relative animate-appear z-10 flex flex-col justify-center p-8 py-36 text-white lg:p-20">
          <h1 className="text-xl font-bold">Hey, I'm Collin</h1>

          <h1 className="mt-8 text-3xl font-black">
            Creating beautiful and engaging websites since 2020
          </h1>

          <p className="mt-4 text-gray-100">
            I create websites that stand out from the industry norm, offering
            engaging and unique experiences tailored to captivate customers and
            help businesses gain valuable leads.
          </p>

          <div className="mt-4 flex gap-4">
            <Link href="#contact" className="w-1/2">
              <ArrowButton
                className="w-full overflow-hidden rounded-3xl bg-blue-400 p-4 text-white shadow-2xl shadow-blue-400 hover:bg-blue-300"
                onClick={() => setContactForm(true)}
              >
                Contact me
                <Shine />
              </ArrowButton>
            </Link>

            <Link href="#work" className="w-1/2">
              <ArrowButton className="w-full rounded-3xl bg-white p-4 text-black hover:bg-white hover:bg-opacity-90">
                View my work
              </ArrowButton>
            </Link>
          </div>

          <p className="ml-6 mt-6 rotate-2 text-sm font-medium text-white md:ml-12">
            <IconArrowWaveLeftUp className="mr-2 inline-block -translate-y-1 rotate-[20deg]" />
            Let's talk – order a website, hire me for a project, or ask a
            question
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

            <a href="https://discord.com/users/693570309491654726" target="_blank">
              <IconBrandDiscordFilled />
            </a>
          </div>
        </div>

        <div
          id="contact"
          className="relative flex items-center justify-center rounded-xl bg-blue-400 py-10 shadow-2xl shadow-blue-400 md:rounded-none md:rounded-bl-[100px] md:rounded-br-xl"
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
              className="animate-appear mx-20"
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
                  <img
                    src="/img/discolytics.png"
                    alt="discolytics"
                    className="border-dimmed aspect-[2/1] rounded-2xl border-2 shadow-black"
                  />

                  <h1 className="mt-6 text-center font-medium">
                    Discolytics – Founder & CEO, created and designed the
                    website
                  </h1>
                  <ArrowButton
                    variant="link"
                    className="m-0 mx-auto p-0 hover:no-underline"
                  >
                    <a href="https://www.discolytics.com" target="_blank">
                      Visit website
                    </a>
                  </ArrowButton>
                </CarouselItem>

                <CarouselItem>
                  <img
                    src="/img/melonly.png"
                    alt="melonly"
                    className="border-dimmed aspect-[2/1] rounded-2xl border-2 shadow-black"
                  />

                  <h1 className="mt-6 text-center font-medium">
                    Melonly – Founder, created and designed the website
                  </h1>
                  <ArrowButton
                    variant="link"
                    className="m-0 mx-auto p-0 hover:no-underline"
                  >
                    <a href="https://melonly.xyz" target="_blank">
                      Visit website
                    </a>
                  </ArrowButton>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </CSSTransition>
        </div>
      </div>

      <div className="p-8 py-36 lg:p-20" id="work">
        <h1 className="text-2xl font-black">My Work</h1>
        <p className="text-dimmed text-lg">
          My unique, engaging creations for the web
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <Project
            link="https://www.discolytics.com"
            img="/img/discolytics.png"
            name="Discolytics"
            description="Founder & CEO, created and designed the website. Discolytics is a powerful software as a service product that helps businesses on Discord, a chat app, scale and grow."
          />

          <Project
            link="https://melonly.xyz"
            img="/img/melonly.png"
            name="Melonly"
            description="Founder, created and designed the website. Melonly is a strong CRM for communities online to manage and grow their community."
          />
        </div>
      </div>

      <div className="relative h-[500px] bg-blue-400 p-8 py-36 lg:p-20">
        <div className="absolute left-0 right-0 top-0 h-20 w-[150%] -translate-y-12 -rotate-2 bg-blue-400"></div>

        <ContactForm />
      </div>
    </div>
  );
}
