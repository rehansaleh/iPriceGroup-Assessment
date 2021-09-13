const fs = require("fs");
const { SuccessResponse, ErrorResponse } = require("../models");
const {
  CSV_FAILURE_MESSAGE,
  CSV_SUCCESS_MESSAGE,
  CSV_FILENAME,
  APP_ERROR_MESSAGE,
  UTF8,
  UNDEFINED,
  TYPE_CSV,
  EMPTY_STRING,
} = require("./constants");

String.prototype.toAlternateCase = function () {
  let convertedString = EMPTY_STRING;
  if (this) {
    for (let i = 0; i < this.length; i++) {
      const currentElement = this[i];
      convertedString +=
        Utils.isDefined(currentElement) && i % 2 === 0
          ? currentElement.toLowerCase()
          : currentElement.toUpperCase();
    }
    return convertedString;
  }
  return convertedString;
};

const Utils = class {
  static isDefined = (variable) => {
    return !(typeof variable === UNDEFINED || variable === null);
  };

  static writeToDisk = async (type = TYPE_CSV, data) => {
    try {
      let response;
      return new Promise((resolve, reject) => {
        fs.writeFile(
          `${CSV_FILENAME}.${type}`,
          data ? data : EMPTY_STRING,
          UTF8,
          (err) => {
            if (err) {
              response = new ErrorResponse(CSV_FAILURE_MESSAGE);
              reject(response);
            } else {
              response = new SuccessResponse(CSV_SUCCESS_MESSAGE);
              resolve(response);
            }
          }
        );
      });
    } catch (error) {
      console.log(APP_ERROR_MESSAGE);
    }
  };

  static logObjectPropValues = (obj) => {
    for (const key in obj) {
      console.log(obj[key]);
    }
  };
};

module.exports = {
  Utils,
};
