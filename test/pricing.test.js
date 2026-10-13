import { test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, priceForPeriod } from "../src/pricing.js";

test("monthly pricing uses each plan's monthly price", () => {
  assert.equal(priceForPeriod(PLANS[0], "monthly"), 500);
  assert.equal(priceForPeriod(PLANS[1], "monthly"), 900);
});

test("yearly pricing is ten times the monthly price", () => {
  assert.equal(priceForPeriod(PLANS[0], "yearly"), 5000);
  assert.equal(priceForPeriod(PLANS[1], "yearly"), 9000);
});
