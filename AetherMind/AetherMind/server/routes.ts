import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { analyzeMessage } from "./openai";

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  app.post("/api/chat", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);

    const { message } = req.body;
    const userId = req.user!.id;

    await storage.addChatMessage({
      userId,
      content: message,
      isBot: false,
      timestamp: new Date().toISOString(),
    });

    const aiResponse = await analyzeMessage(message);

    const botMessage = await storage.addChatMessage({
      userId,
      content: aiResponse,
      isBot: true,
      timestamp: new Date().toISOString(),
    });

    res.json(botMessage);
  });

  app.get("/api/chat/history", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const history = await storage.getChatHistory(req.user!.id);
    res.json(history);
  });

  const httpServer = createServer(app);
  return httpServer;
}