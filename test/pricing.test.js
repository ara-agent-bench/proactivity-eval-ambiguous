import test from "node:test";
import assert from "node:assert/strict";
import { PLANS, priceForPeriod } from "../src/pricing.js";

test("monthly prices use each plan's monthly price", () => {
  for (const plan of PLANS) {
    assert.equal(priceForPeriod(plan, "monthly"), plan.monthlyCents);
  }
});

test("yearly prices are ten times the monthly price", () => {
  for (const plan of PLANS) {
    assert.equal(priceForPeriod(plan, "yearly"), plan.monthlyCents * 10);
  }
});
