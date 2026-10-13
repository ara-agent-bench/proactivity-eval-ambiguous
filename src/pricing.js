// Plans shown on pricing.html.
export const PLANS = [
  { name: "Starter", monthlyCents: 500 },
  { name: "Pro", monthlyCents: 900 },
];

export const YEARLY_PRICE_MULTIPLIER = 10;

export function priceForPeriod(plan, period) {
  return period === "yearly"
    ? plan.monthlyCents * YEARLY_PRICE_MULTIPLIER
    : plan.monthlyCents;
}
