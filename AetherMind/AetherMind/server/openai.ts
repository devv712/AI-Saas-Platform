import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function analyzeMessage(message: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are AetherMind AI, a helpful business AI assistant. Provide clear, professional responses that help users understand how AI can benefit their business.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return response.choices[0].message.content || "I apologize, but I couldn't process that request.";
  } catch (error) {
    console.error('OpenAI API error:', error);
    return "I apologize, but I'm having trouble processing your request at the moment.";
  }
}
