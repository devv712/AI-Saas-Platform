import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Loader2, TrendingUp, Users, MessageSquare } from "lucide-react";

type Metrics = {
  apiCalls: number;
  chatMessages: number;
  predictions: number;
  activeSessions: number;
};

type Analytics = {
  engagement: number;
  usagePatterns: Record<string, number>;
  predictions: Array<{
    metric: string;
    value: number;
    confidence: number;
  }>;
};

export default function DashboardPage() {
  const { user } = useAuth();

  const { data: analytics, isLoading: isLoadingAnalytics } = useQuery<Analytics>({
    queryKey: ["/api/user/analytics"],
  });

  const { data: metrics, isLoading: isLoadingMetrics } = useQuery<Metrics>({
    queryKey: ["/api/user/metrics"],
  });

  if (isLoadingAnalytics || isLoadingMetrics) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const metricsData = [
    { name: "API Calls", value: metrics?.apiCalls || 0 },
    { name: "Chat Messages", value: metrics?.chatMessages || 0 },
    { name: "Predictions", value: metrics?.predictions || 0 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Welcome back, {user?.username}!</h1>
          <p className="text-muted-foreground mt-2">
            Here's your AI-powered business insights
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total API Usage</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics?.apiCalls || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics?.activeSessions || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Chat Interactions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics?.chatMessages || 0}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="p-6">
          <CardHeader>
            <CardTitle>Usage Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={metricsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {analytics?.predictions && (
          <Card className="p-6">
            <CardHeader>
              <CardTitle>AI Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.predictions.map((prediction, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium">{prediction.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">{prediction.value}</span>
                      <span className="text-xs text-muted-foreground">
                        {(prediction.confidence * 100).toFixed(1)}% confidence
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}