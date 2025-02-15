import { z } from "zod";

export const insertUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;

export type User = {
  id: number;
  username: string;
  password: string;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
  };
  createdAt: Date;
};

export type ChatMessage = {
  id: number;
  userId: number;
  content: string;
  isBot: boolean;
  timestamp: string;
};

export type UserMetric = {
  id: number;
  userId: number;
  metricType: string;
  value: number;
  timestamp: Date;
};

export type UserAnalytics = {
  id: number;
  userId: number;
  data: {
    engagement: number;
    usagePatterns: Record<string, number>;
    predictions: Array<{
      metric: string;
      value: number;
      confidence: number;
    }>;
  };
  updatedAt: Date;
};

export const insertMetricSchema = z.object({
  userId: z.number().int().positive(),
  metricType: z.string(),
  value: z.number().int().positive(),
});

export const insertAnalyticsSchema = z.object({
  userId: z.number().int().positive(),
  data: z.object({
    engagement: z.number(),
    usagePatterns: z.record(z.string(), z.number()),
    predictions: z.array(z.object({
      metric: z.string(),
      value: z.number(),
      confidence: z.number(),
    })),
  }),
});