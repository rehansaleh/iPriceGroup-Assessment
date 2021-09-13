const { Response } = require("./Response");

class ErrorResponse extends Response {
  constructor(errorMessage) {
    super(false, errorMessage);
  }
}

module.exports = { ErrorResponse };
