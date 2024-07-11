import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { name, email, reason, message } = req.body as {
    name: string;
    email: string;
    reason: string;
    message: string;
  };

  const result = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "collin22.dev <collin@collin22.dev>",
      to: ["collincronin227@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
      <p>Hey Collin, you got a new contact request! 🎉</p>

      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Reason: ${reason}</p>
      <p>Message: ${message}</p>
      `,
    }),
  });

  if (!result.ok) {
    return res.status(400).json({ message: "error" });
  }

  res.status(200).json({ message: "success" });
};
