import { geolocation } from "@vercel/edge";
import { NextResponse } from "next/server";

export const runtime = "edge";

export function GET(request: Request) {
  const { country, city } = geolocation(request);

  return NextResponse.json({ country, city });
}
