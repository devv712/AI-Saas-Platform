import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Check } from "lucide-react";

const BASE_PRICE = 49;
const USER_PRICE = 10;
const API_PRICE = 0.001;

export function PricingCalculator() {
  const [users, setUsers] = useState(5);
  const [apiCalls, setApiCalls] = useState(1000);

  const totalPrice = BASE_PRICE + (users * USER_PRICE) + (apiCalls * API_PRICE);

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <Label>Number of Users</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[users]}
              onValueChange={([value]) => setUsers(value)}
              min={1}
              max={100}
              step={1}
              className="flex-1"
            />
            <Input
              type="number"
              value={users}
              onChange={(e) => setUsers(Number(e.target.value))}
              className="w-20"
            />
          </div>
        </div>

        <div>
          <Label>Estimated Monthly API Calls</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[apiCalls]}
              onValueChange={([value]) => setApiCalls(value)}
              min={100}
              max={10000}
              step={100}
              className="flex-1"
            />
            <Input
              type="number"
              value={apiCalls}
              onChange={(e) => setApiCalls(Number(e.target.value))}
              className="w-28"
            />
          </div>
        </div>
      </div>

      <div className="p-4 bg-secondary rounded-lg space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Estimated Monthly Cost</span>
          <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4" /> Base platform access (${BASE_PRICE})
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4" /> {users} users (${USER_PRICE}/user)
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4" /> {apiCalls.toLocaleString()} API calls (${API_PRICE}/call)
          </div>
        </div>
      </div>

      <Button className="w-full">Get Started</Button>
    </Card>
  );
}
