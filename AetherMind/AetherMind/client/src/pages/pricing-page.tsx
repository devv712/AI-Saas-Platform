import { PricingCalculator } from "@/components/pricing-calculator";

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Pricing</h1>
          <p className="text-xl text-muted-foreground">
            Calculate the perfect plan for your business
          </p>
        </div>
        <PricingCalculator />
      </div>
    </div>
  );
}
