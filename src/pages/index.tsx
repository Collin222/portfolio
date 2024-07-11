import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [contactResult, setContactResult] = useState<string>("");

  const submit = async () => {
    setSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        reason,
        message,
      }),
    });
    const success = res.status >= 200 && res.status < 300;

    setSubmitting(false);

    if (!success) {
      setContactResult("Something went wrong. Please try again later.");
    } else {
      setContactResult(
        "Thank you for your message! I will get back to you soon.",
      );
    }
  };

  return (
    <div>
      <div className="relative min-h-screen rounded-b-md bg-[url('/background.jpg')] bg-cover !text-white shadow-lg shadow-black">
        <div className="grid min-h-screen grid-cols-1 gap-10 rounded-b-md bg-black bg-opacity-50 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-10 py-40 lg:p-20">
            <h2 className="text-4xl font-semibold">Hey, I&apos;m Collin</h2>

            <h1 className="my-10 text-6xl font-black">
              I build and design websites
            </h1>

            <Link href="#work">
              <Button className="w-fit !text-white" variant="contained">
                View my work
              </Button>
            </Link>
          </div>
          <form
            className="flex flex-col justify-center gap-6 bg-white bg-opacity-40 p-10 !text-black backdrop-blur-md lg:p-20"
            onSubmit={async (e) => {
              e.preventDefault();
              await submit();
            }}
          >
            <h1 className="text-4xl font-black">Let&apos;s talk</h1>

            <TextField
              variant="filled"
              label="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              variant="filled"
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormControl fullWidth required>
              <InputLabel id="Reason">Reason</InputLabel>
              <Select
                labelId="reason"
                label="Reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                variant="filled"
              >
                <MenuItem value="I want to work with you">
                  I want to order a website
                </MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              variant="filled"
              label="Message"
              multiline
              minRows={3}
              maxRows={10}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <LoadingButton
              loading={submitting}
              disabled={contactResult.length > 0}
              type="submit"
              variant="contained"
              onClick={submit}
            >
              Send
            </LoadingButton>

            {contactResult.length > 0 && <p>{contactResult}</p>}

            <p className="text-sm">
              Or email{" "}
              <a href="mailto:collincronin227@gmail.com">
                collincronin227@gmail.com
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-20 p-10 lg:p-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-blue-500" id="work">
              My Work
            </h2>

            <h1 className="text-4xl font-black">Discolytics</h1>

            <p>
              I created{" "}
              <a href="https://discolytics.com" target="_blank">
                discolytics.com
              </a>
              , a full-fledged website for building and scaling an application
              on Discord. With multiple moving parts, I built and scaled all
              components of the website: the frontend and backend. The dashboard
              contains many data points and graphs for users to analyze and grow
              their business.
            </p>

            <Link href="https://discolytics.com" target="_blank">
              <Button variant="contained">See Website</Button>
            </Link>
          </div>

          <div>
            <img
              src="/discolytics.png"
              alt="Discolytics"
              className="aspect-[1.5/1] rounded-md shadow-lg shadow-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
