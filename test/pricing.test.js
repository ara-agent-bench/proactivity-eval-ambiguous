import { test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, priceForInterval } from "../src/pricing.js";

test("monthly prices remain the configured plan prices", () => {
  assert.deepEqual(PLANS.map(plan => priceForInterval(plan, "monthly")), [500, 900]);
});

test("yearly prices are ten times their monthly prices", () => {
  assert.deepEqual(PLANS.map(plan => priceForInterval(plan, "yearly")), [5000, 9000]);
});
