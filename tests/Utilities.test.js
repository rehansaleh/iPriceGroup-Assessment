const { CSV_SUCCESS_MESSAGE } = require("../src/common/constants");
const { Utils } = require("../src/common/Utilities");

const { convertToAlternateCase, isDefined, writeToDisk } = Utils;

test("Should convert text to alternate case letters", () => {
  expect("Hello World".toAlternateCase()).toBe("hElLo wOrLd");
});

test("Should check if a supplied parameter is undefined", () => {
  expect(isDefined("Hello World")).toBe(true);
  expect(isDefined(true)).toBe(true);
  expect(isDefined(undefined)).toBe(false);
  expect(isDefined(null)).toBe(false);
});

test("Should write a file with given extension to disk", async () => {
  const writeSuccessTestResult = await writeToDisk(
    "csv",
    "H,e,l,l,o, ,W,o,r,l,d"
  );
  expect(writeSuccessTestResult).toEqual({
    Success: true,
    Payload: CSV_SUCCESS_MESSAGE,
  });
});
