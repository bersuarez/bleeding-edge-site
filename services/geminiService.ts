import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are "Edge", the AI Sales Engineer for Bleeding Edge. 
Bleeding Edge is a premium provider of:
1. Build: Large-scale datacenter construction (Hyperscale, 50MW+ capacity, liquid cooling ready).
2. Colocation: High-density rack space (Tier IV, carrier-neutral, up to 100kW per rack).
3. AI Cloud: On-demand H100/H200 clusters, bare metal, instant provisioning.
4. Applied AI: Consulting services to build custom RAG pipelines, agents, and fine-tuned models.

Your tone is professional, futuristic, and highly technical but accessible. 
Keep answers concise (under 3 sentences unless asked for detail). 
If asked about pricing, say "Pricing depends on scale and requirements. Please use the contact form below for a custom quote."
Always emphasize speed, reliability, and "future-proof" infrastructure.
`;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System offline. Please try again later or contact support directly.";
  }
};
