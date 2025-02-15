import { InsertUser, User, ChatMessage } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addChatMessage(message: Omit<ChatMessage, "id">): Promise<ChatMessage>;
  getChatHistory(userId: number): Promise<ChatMessage[]>;
  sessionStore: session.Store;
}

export class MemStorage implements IStorage {
  private users: User[] = [];
  private messages: ChatMessage[] = [];
  private nextUserId = 1;
  private nextMessageId = 1;
  sessionStore: session.Store;

  constructor() {
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000,
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: this.nextUserId++,
      ...insertUser,
      preferences: { theme: 'light', notifications: true },
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  async addChatMessage(message: Omit<ChatMessage, "id">): Promise<ChatMessage> {
    const chatMessage: ChatMessage = {
      id: this.nextMessageId++,
      ...message,
    };
    this.messages.push(chatMessage);
    return chatMessage;
  }

  async getChatHistory(userId: number): Promise<ChatMessage[]> {
    return this.messages
      .filter(msg => msg.userId === userId)
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  }
}

export const storage = new MemStorage();