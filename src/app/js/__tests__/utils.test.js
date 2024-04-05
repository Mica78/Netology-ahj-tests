import { test, expect } from "@jest/globals";
import { isValid, getBrand } from "../utils";
import testData from "./test-data";

test.each(testData)("testing lunh validator %s %s", (a, expected) => {
  const res = isValid(a);
  expect(res).toBe(Boolean(expected));
});

test.each(testData)("testing brand validator %s %s", (a, expected) => {
  const res = getBrand(a);
  expect(res).toBe(expected);
});
