import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: inserted, error } = await supabaseAdmin
      .from("contact_messages")
      .insert({ name: data.name, email: data.email, message: data.message })
      .select("id")
      .single();

    if (error) {
      console.error("contact insert failed", error);
      throw new Error("Could not save your message. Please try again.");
    }

    return { ok: true as const, id: inserted.id };
  });
