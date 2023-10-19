import { z } from "zod";

export const signUpFormRequestSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  captcha: z.string(),
  metadata: z.optional(
    z.object({
      city: z.string().optional(),
      country: z.string().optional(),
    })
  ),
});

export type SignUpFormData = Omit<
  z.infer<typeof signUpFormRequestSchema>,
  "captcha"
>;
