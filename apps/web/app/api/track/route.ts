import { NextRequest } from "next/server";
import { PostHog } from "posthog-node";

// Note: this is a server-side API route that forwards events to PostHog
// Requires POSTHOG_SECRET_KEY in the server environment (not exposed to client)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event, properties } = body || {};

    if (!event || typeof event !== "string") {
      return new Response(JSON.stringify({ error: "missing event name" }), {
        status: 400,
      });
    }

    const client = new PostHog(process.env.POSTHOG_SECRET_KEY as string, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    });

    // Send capture to PostHog. The server SDK requires a distinct distinct_id.
    await client.capture({
      distinctId: properties?.distinct_id || "server",
      event,
      properties: properties || {},
    });

    // No explicit shutdown necessary for short-lived serverless handlers.

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message || String(err) }),
      { status: 500 },
    );
  }
}
