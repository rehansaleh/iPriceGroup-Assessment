const { PROMPT_EMPTY_STRING_MESSAGE } = require("./common/constants");
const { Utils } = require("./common/Utilities");
const { SuccessResponse, ErrorResponse } = require("./models");

const convertToCsv = async (inputString) => {
  // Split a string by spaces and then join by commas to create CSV input
  const csvString = inputString.split("").join(",");
  return await Utils.writeToDisk("csv", csvString);
};

const StringBuilder = class {
  static transformString = async (inputString) => {
    let response;
    // Check for nulls
    if (inputString !== "" && Utils.isDefined(inputString)) {
      // Convert string to uppercase
      const upperCase = inputString.toUpperCase();
      // Convert string to alternate case using extension method (prototype inheritence)
      const alternateCase = inputString.toAlternateCase();
      // Convert string to CSV
      const { Payload: csvResponse } = await convertToCsv(inputString);
      // Set response
      response = new SuccessResponse({ upperCase, alternateCase, csvResponse });
    } else {
      response = new ErrorResponse({ PROMPT_EMPTY_STRING_MESSAGE });
    }
    return response;
  };
};

module.exports = {
  StringBuilder,
};
