export default {
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        }
      });
    }

    const target = `https://api.paloma365.com/company/api/?method=order&class=Tester&point_id=1&authkey=${env.PALOMA_AUTHKEY}`;

    const response = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: request.body
    });

    const data = await response.text();
    return new Response(data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
    });
  }
};
