// Vercel Serverless Function to proxy Gemini API requests securely
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { userQuery, systemPrompt } = req.body;

    if (!userQuery) {
      return res.status(400).json({ error: "Missing userQuery" });
    }

    // API key is stored securely in Vercel environment variables
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("GEMINI_API_KEY not configured");
      return res.status(500).json({ error: "API key not configured" });
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: {
        parts: [{ text: systemPrompt }],
      },
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Gemini API Error:", response.status, errorData);

      return res.status(response.status).json({
        error: `API error: ${response.status}`,
        details: errorData,
      });
    }

    const result = await response.json();

    return res.status(200).json(result);
  } catch (error) {
    console.error("Function error:", error);
    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}
