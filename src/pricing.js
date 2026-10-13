// Plans shown on pricing.html.
export const PLANS = [
  { name: "Starter", monthlyCents: 500 },
  { name: "Pro", monthlyCents: 900 },
];

export function priceForPeriod(plan, billingPeriod) {
  return billingPeriod === "yearly" ? plan.monthlyCents * 10 : plan.monthlyCents;
}
