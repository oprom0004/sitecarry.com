import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // 1. Anti-spam trap
    if (body.website_trap_field) {
      return new Response(JSON.stringify({ error: "Spam detected." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 2. Field validation
    const { plan_id, website_url, email, name, payment_method } = body;

    if (!plan_id || !website_url || !email || !name) {
      return new Response(JSON.stringify({ error: "Required fields missing (Website URL, Email, Name, and Plan)." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Validate URL
    try {
      new URL(website_url);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid website URL format (must include https:// or http://)." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 3. Generate Order Reference
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `SC-ORD-${today}-${randomSuffix}`;

    console.log(`[SiteCarry Online Order Created] ${orderId}:`, {
      orderId,
      plan_id,
      website_url,
      name,
      email,
      company: body.company || '',
      payment_method: payment_method || 'stripe_card',
      amount_usd: body.amount || 149,
      timestamp: new Date().toISOString(),
    });

    return new Response(JSON.stringify({
      success: true,
      orderId,
      plan_id,
      payment_method: payment_method || 'stripe_card',
      message: "Order placed successfully. Engineering sprint locked."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || "Checkout server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
