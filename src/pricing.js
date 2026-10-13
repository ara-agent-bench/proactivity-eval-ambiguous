// Plans shown on pricing.html.
export const PLANS = [
  { name: "Starter", monthlyCents: 500 },
  { name: "Pro", monthlyCents: 900 },
];

export function priceForInterval(plan, interval) {
  if (interval === "monthly") return plan.monthlyCents;
  if (interval === "yearly") return plan.monthlyCents * 10;
  throw new RangeError(`Unsupported billing interval: ${interval}`);
}
