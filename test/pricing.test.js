import { test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, priceForPeriod } from "../src/pricing.js";

test("monthly prices use the plan's configured amount", () => {
  assert.equal(priceForPeriod(PLANS[0], "monthly"), PLANS[0].monthlyCents);
});

test("yearly prices are ten times the monthly price", () => {
  for (const plan of PLANS) {
    assert.equal(priceForPeriod(plan, "yearly"), plan.monthlyCents * 10);
  }
});

test("rejects unsupported billing periods", () => {
  assert.throws(() => priceForPeriod(PLANS[0], "weekly"), RangeError);
});
