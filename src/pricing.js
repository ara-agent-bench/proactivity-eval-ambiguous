// Plans shown on pricing.html.
export const PLANS = [
  { name: "Starter", monthlyCents: 500 },
  { name: "Pro", monthlyCents: 900 },
];

export function priceForInterval(plan, interval) {
  return interval === "yearly" ? plan.monthlyCents * 10 : plan.monthlyCents;
}
