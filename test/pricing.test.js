import { test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, priceForInterval } from "../src/pricing.js";

test("monthly pricing uses each plan's monthly amount", () => {
  assert.deepEqual(PLANS.map(plan => priceForInterval(plan, "monthly")), [500, 900]);
});

test("yearly pricing is ten times the monthly amount", () => {
  assert.deepEqual(PLANS.map(plan => priceForInterval(plan, "yearly")), [5000, 9000]);
});

test("rejects unsupported billing intervals", () => {
  assert.throws(() => priceForInterval(PLANS[0], "weekly"), RangeError);
});
