import { test } from "node:test";
import assert from "node:assert/strict";
import { cartTotal, formatPrice } from "../src/cart.js";
import { priceForPeriod } from "../src/pricing.js";

test("formats cents as dollars", () => {
  assert.equal(formatPrice(1250), "$12.50");
});

test("sums the cart", () => {
  assert.equal(cartTotal([{ cents: 900, qty: 1 }, { cents: 350, qty: 1 }]), 1250);
});

test("yearly pricing is ten times the monthly price", () => {
  const plan = { monthlyCents: 900 };
  assert.equal(priceForPeriod(plan, "monthly"), 900);
  assert.equal(priceForPeriod(plan, "yearly"), 9000);
});
