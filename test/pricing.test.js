import { test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, priceForPeriod } from "../src/pricing.js";

test("yearly prices are ten times monthly prices", () => {
  assert.equal(priceForPeriod(PLANS[0].monthlyCents, "yearly"), 5000);
  assert.equal(priceForPeriod(PLANS[1].monthlyCents, "yearly"), 9000);
});

test("monthly prices stay unchanged for monthly billing", () => {
  assert.equal(priceForPeriod(PLANS[0].monthlyCents, "monthly"), 500);
  assert.equal(priceForPeriod(PLANS[1].monthlyCents, "monthly"), 900);
});
