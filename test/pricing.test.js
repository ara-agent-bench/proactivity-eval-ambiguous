import test from "node:test";
import assert from "node:assert/strict";
import { PLANS, priceForPeriod } from "../src/pricing.js";

test("yearly plan prices are ten times monthly prices", () => {
  for (const plan of PLANS) {
    assert.equal(priceForPeriod(plan, "yearly"), plan.monthlyCents * 10);
  }
});

test("monthly plan prices stay unchanged", () => {
  for (const plan of PLANS) {
    assert.equal(priceForPeriod(plan, "monthly"), plan.monthlyCents);
  }
});

test("unsupported billing periods are rejected", () => {
  assert.throws(() => priceForPeriod(PLANS[0], "quarterly"), RangeError);
});
