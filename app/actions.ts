'use server';

import { GoogleGenAI, Chat } from "@google/genai";

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

let chatSession: Chat | null = null;

// Initialize on the server
// Note: In serverless (Vercel), global variables might not persist across requests, 
// so we might create a new session or relying on stateless calls is safer. 
// For a simple chat bot, instantiating per request is robust but lacks history.
// However, sticking to the user's pattern but moving to server:

export async function submitUserMessage(message: string) {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        // For now, simpler stateless or single-turn for stability in server actions 
        // unless we persist state. The previous code tried to share `chatSession`.
        // We will recreate it to ensure it uses the server env var every time.

        const chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.7,
            },
        });

        const result = await chat.sendMessage({ message });
        return {
            text: result.text || "I apologize, I didn't catch that. Could you rephrase?",
            success: true
        };
    } catch (error) {
        console.error("Gemini API Error:", error);
        return {
            text: "System offline. Please try again later or contact support directly.",
            success: false
        };
    }
}
