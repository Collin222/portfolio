import { IconChecks, IconX } from "@tabler/icons-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import LoadingButton from "./LoadingButton";
import { Textarea } from "./ui/textarea";
import { useRef, useState } from "react";
import { client } from "~/utils/api";
import { CSSTransition } from "react-transition-group";
import { Button } from "./ui/button";

export default function ContactForm({
  onClose,
  passRef,
}: {
  onClose?: () => void;
  passRef?: React.RefObject<HTMLFormElement>;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = async () => {
    setSubmitting(true);
    const res = await client.collin.contact
      .mutate({ name, email, message })
      .catch((e) => console.error(e));
    setSubmitting(false);

    if (!res) {
      setError("Failed to send message, please try again.");
    } else {
      setSuccess(true);
    }
  };

  return (
    <form
      className="absolute inset-0 flex w-full flex-col justify-center px-8 text-black md:px-20"
      ref={passRef}
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div className="relative">
        <h1 className="text-2xl font-black">Contact Me</h1>
        <p className="w-[80%]">
          Order a website, hire me for a project, or ask a question
        </p>

        {onClose && (
          <IconX
            className="absolute right-0 top-0 cursor-pointer text-black"
            size={20}
            onClick={onClose}
          />
        )}
      </div>

      <div className="relative mt-4 flex h-fit flex-col gap-4">
        <CSSTransition
          in={success || error != ""}
          timeout={200}
          classNames="fade"
          unmountOnExit
          nodeRef={overlayRef}
        >
          <div
            ref={overlayRef}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center rounded-xl bg-black bg-opacity-80 text-white backdrop-blur-xl"
          >
            {success ? (
              <>
                <IconChecks className="text-blue-500" />
                <p className="mt-4 text-sm text-gray-200">
                  I got your message, I'll get back to you soon.
                </p>
              </>
            ) : (
              <>
                <h1 className="font-black">Uh oh, something went wrong.</h1>
                <p className="mt-2 text-sm text-gray-200">{error}</p>

                <Button className="mt-2" onClick={() => location.reload()}>
                  Retry
                </Button>
              </>
            )}
          </div>
        </CSSTransition>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            placeholder="Your name"
            id="name"
            required
            className="bg-gray-100 text-black !ring-offset-0 focus:border focus:border-black focus-visible:outline-none focus-visible:ring-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Your email"
            id="email"
            type="email"
            required
            className="bg-gray-100 text-black !ring-offset-0 focus:border focus:border-black focus-visible:outline-none focus-visible:ring-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            placeholder="Write your message to me"
            id="message"
            required
            className="bg-gray-100 text-black outline-none !ring-offset-0 focus:border focus:border-black focus-visible:outline-none focus-visible:ring-0"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <LoadingButton
          loading={submitting}
          type="submit"
          className="bg-neutral-800 text-white hover:bg-neutral-800 hover:bg-opacity-80"
        >
          Send
        </LoadingButton>

        <p className="text-dimmed text-sm">
          Or email collincronin227@gmail.com
        </p>
      </div>
    </form>
  );
}
