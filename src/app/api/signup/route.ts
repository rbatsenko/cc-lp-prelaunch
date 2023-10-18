export const runtime = "edge";

import { signUpFormRequestSchema } from "@/lib/form";
import { addRowToDatabase } from "@/lib/notion";
import { NextRequest, NextResponse } from "next/server";

const verifyEndpoint = "https://www.google.com/recaptcha/api/siteverify";

export async function POST(req: NextRequest) {
  // Validate request
  const requestBody = await req.json();
  const data = signUpFormRequestSchema.parse(requestBody);

  const { firstName, lastName, email, captcha } = data;

  // Validate a "token" that the client-side reCAPTCHA script generated for the user
  const captchaResponse = await fetch(verifyEndpoint, {
    method: "POST",
    headers: { "Content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET!,
      response: captcha,
    }),
  }).then((res) => res.json());

  // If the verification fails, return 500x code
  if (!captchaResponse.success) {
    return NextResponse.json(
      {
        error: captchaResponse["error-codes"][0],
      },
      {
        status: 500,
      }
    );
  }

  // Add a row to the database
  const addRowResponse = await addRowToDatabase({ firstName, lastName, email });
  // Log the response from Notion
  console.info(JSON.stringify(addRowResponse));

  // TODO: Send email to the user

  return NextResponse.json(
    {
      message: "Success",
    },
    {
      status: 200,
    }
  );
}
