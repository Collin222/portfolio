import {
  IconBrandDiscordFilled,
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandXFilled,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import ArrowButton from "~/components/ArrowButton";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Loader from "~/components/Loader";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { client } from "~/utils/api";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setSubmitting(true);
    const res = await client.collin.contact
      .mutate({ name, email, message })
      .catch((e) => console.error(e));
    setSubmitting(false);

    if (!res) {
      setError("Failed to send message, please try again.");
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-amber-50">
      <Header />

      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white bg-opacity-20 shadow-lg backdrop-blur-2xl md:top-[50vh] md:-translate-y-[50vh]"></div>

      <div className="container-padding gradientbg flex min-h-screen justify-center">
        <div
          className="m-0 grid w-full grid-cols-1 gap-10 py-48 pb-24 md:gap-20 lg:grid-cols-2"
          data-aos="fade-up"
        >
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold md:text-6xl">Let's Chat</h1>

            <p className="mt-4 md:text-xl">
              Get a free website quote, hire me for a project, or ask a
              question.
            </p>

            <div className="mt-4 flex w-fit flex-row items-center gap-6 lg:justify-end">
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

            <a
              className="linkline mt-4 w-fit text-2xl"
              href="mailto:collincronin227@gmail.com"
            >
              <IconMailFilled className="mr-2 inline-block" size={26} />
              collincronin227@gmail.com
            </a>

            <a className="linkline mt-4 w-fit text-2xl" href="tel:8479618007">
              <IconPhoneFilled className="mr-2 inline-block" size={26} />
              847 961 8007
            </a>
          </div>

          <div>
            <form
              className="w-full"
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <Label htmlFor="name">Name</Label>
              <Input
                required
                id="name"
                className="mb-4 rounded-none border-0 border-b border-neutral-900 bg-transparent px-0 text-black focus-visible:!outline-none focus-visible:ring-0 focus-visible:!ring-offset-0"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Label htmlFor="email">Email</Label>
              <Input
                required
                id="email"
                type="email"
                className="mb-4 rounded-none border-0 border-b border-neutral-900 bg-transparent px-0 text-black focus-visible:!outline-none focus-visible:ring-0 focus-visible:!ring-offset-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Label htmlFor="message">Message</Label>
              <Textarea
                required
                id="message"
                className="mb-4 max-h-40 rounded-none border-0 border-b border-neutral-900 bg-transparent px-0 text-black focus-visible:!outline-none focus-visible:ring-0 focus-visible:!ring-offset-0"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <ArrowButton
                type="submit"
                className="w-full rounded-full bg-neutral-700 p-6 hover:!bg-neutral-700 hover:!bg-opacity-80"
                disabled={submitting || submitted || error != ""}
              >
                {submitting ? <Loader size={20} /> : "Submit"}
              </ArrowButton>

              <p className="mt-2 text-sm">
                {(() => {
                  if (error) {
                    return error;
                  } else if (submitted) {
                    return "Thanks for your message! I'll get back to you soon.";
                  }
                })()}
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
