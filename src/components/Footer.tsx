import {
  IconBrandDiscordFilled,
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandXFilled,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import ArrowButton from "./ArrowButton";

export default function Footer() {
  return (
    <footer className="container-padding grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:gap-20">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold">Let's Talk</h1>

        <a
          className="linkline mt-4 w-fit text-lg md:text-2xl"
          href="mailto:collincronin227@gmail.com"
        >
          <IconMailFilled className="mr-2 inline-block" size={26} />
          collincronin227@gmail.com
        </a>

        <a
          className="linkline mt-4 w-fit text-lg md:text-2xl"
          href="tel:8479618007"
        >
          <IconPhoneFilled className="mr-2 inline-block" size={26} />
          847 961 8007
        </a>

        <Link href="/contact">
          <ArrowButton className="mt-4 rounded-full bg-neutral-700 p-6 hover:!bg-neutral-700 hover:!bg-opacity-80 md:p-8 md:text-lg">
            Get a Free Website Quote
          </ArrowButton>
        </Link>
      </div>

      <div className="flex flex-col lg:items-end">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link href="/" className="linkline w-fit">
            Home
          </Link>
          <Link href="/work" className="linkline w-fit">
            My Work
          </Link>
          <Link href="/about" className="linkline w-fit">
            About
          </Link>
          <Link href="/contact" className="linkline w-fit">
            Contact
          </Link>
        </div>

        <div className="mt-10 flex flex-grow flex-col justify-end">
          <div className="flex w-fit flex-row items-center gap-6 lg:justify-end">
            <a
              href="https://github.com/Collin222"
              target="_blank"
              className="hover:opacity-60"
            >
              <IconBrandGithubFilled />
            </a>
            <a
              href="https://x.com/Collin22h"
              target="_blank"
              className="hover:opacity-60"
            >
              <IconBrandXFilled />
            </a>

            <a
              href="mailto:collincronin227@gmail.com"
              target="_blank"
              className="hover:opacity-60"
            >
              <IconMailFilled />
            </a>

            <a
              href="https://discord.com/users/693570309491654726"
              target="_blank"
              className="hover:opacity-60"
            >
              <IconBrandDiscordFilled />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61563577731758"
              target="_blank"
              className="hover:opacity-60"
            >
              <IconBrandFacebookFilled />
            </a>

            <a
              href="https://www.linkedin.com/in/collincronin"
              target="_blank"
              className="hover:opacity-60"
            >
              <IconBrandLinkedin />
            </a>
          </div>

          <p className="mt-4 text-neutral-800 lg:text-end">
            © 2024 Collin Cronin
          </p>
        </div>
      </div>
    </footer>
  );
}
