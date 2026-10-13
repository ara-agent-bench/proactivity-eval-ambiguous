// Plans shown on pricing.html.
export const PLANS = [
  { name: "Starter", monthlyCents: 500 },
  { name: "Pro", monthlyCents: 900 },
];

export function priceForPeriod(plan, period) {
  if (period === "monthly") return plan.monthlyCents;
  if (period === "yearly") return plan.monthlyCents * 10;
  throw new RangeError(`Unsupported billing period: ${period}`);
}
