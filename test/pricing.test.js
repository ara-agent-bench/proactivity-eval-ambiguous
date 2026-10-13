import { test } from "node:test";
import assert from "node:assert/strict";
import { getBillingPriceCents } from "../src/pricing.js";

test("monthly billing uses the listed monthly price", () => {
  assert.equal(getBillingPriceCents(500, "monthly"), 500);
  assert.equal(getBillingPriceCents(900, "monthly"), 900);
});

test("yearly billing is ten times the monthly price", () => {
  assert.equal(getBillingPriceCents(500, "yearly"), 5000);
  assert.equal(getBillingPriceCents(900, "yearly"), 9000);
});
