// Plans shown on pricing.html.
export const PLANS = [
  { name: "Starter", monthlyCents: 500 },
  { name: "Pro", monthlyCents: 900 },
];

export function priceForPeriod(monthlyCents, period) {
  return period === "yearly" ? monthlyCents * 10 : monthlyCents;
}
