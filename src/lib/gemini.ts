import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const chatModel = "gemini-3-flash-preview";

export async function sendMessage(message: string, history: { role: "user" | "model"; parts: { text: string }[] }[] = []) {
  const chat = ai.chats.create({
    model: chatModel,
    config: {
      systemInstruction: "You are a helpful and concise AI assistant. Format your responses with Markdown.",
    },
    history,
  });

  const response = await chat.sendMessage({ message });
  return response.text;
}
