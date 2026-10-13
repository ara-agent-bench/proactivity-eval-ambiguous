import { test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, priceForPeriod, YEARLY_PRICE_MULTIPLIER } from "../src/pricing.js";

test("yearly prices are exactly 10 times the monthly prices", () => {
  assert.equal(YEARLY_PRICE_MULTIPLIER, 10);
  for (const plan of PLANS) {
    assert.equal(priceForPeriod(plan, "yearly"), plan.monthlyCents * 10);
    assert.equal(priceForPeriod(plan, "monthly"), plan.monthlyCents);
  }
});
