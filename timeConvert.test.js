import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", () => {
  assert.strictEqual(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", () => {
  assert.strictEqual(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert midnight", () => {
  assert.strictEqual(formatAs12HourClock("00:00"), "12:00 am");
});

test("can correctly convert midday and preserve minutes", () => {
  assert.strictEqual(formatAs12HourClock("12:30"), "12:30 pm");
  assert.strictEqual(formatAs12HourClock("13:05"), "01:05 pm");
  assert.strictEqual(formatAs12HourClock("23:59"), "11:59 pm");
  assert.strictEqual(formatAs12HourClock("00:15"), "12:15 am");
});

