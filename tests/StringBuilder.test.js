const {
  PROMPT_EMPTY_STRING_MESSAGE,
  CSV_SUCCESS_MESSAGE,
} = require("../src/common/constants");
const { StringBuilder } = require("../src/StringBuilder");

test("Should transform a string to upper/alternate case and create a CSV file for it", async () => {
  const transformSuccessResult = await StringBuilder.transformString(
    "Hello World Test"
  );
  expect(transformSuccessResult).toEqual({
    Success: true,
    Payload: {
      upperCase: "HELLO WORLD TEST",
      alternateCase: "hElLo wOrLd tEsT",
      csvResponse: CSV_SUCCESS_MESSAGE,
    },
  });

  const transformErrorResult = await StringBuilder.transformString();
  expect(transformErrorResult).toEqual({
    Success: false,
    Payload: { PROMPT_EMPTY_STRING_MESSAGE },
  });
});
