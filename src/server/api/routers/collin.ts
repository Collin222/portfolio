import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const collinRouter = createTRPCRouter({
  contact: publicProcedure
    .input(
      z.object({ name: z.string(), email: z.string(), message: z.string() }),
    )
    .mutation(async ({ input: { name, email, message } }) => {
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
      <p>Message: ${message}</p>
      `,
        }),
      });

      if (!result.ok) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }

      return 1;
    }),
});
