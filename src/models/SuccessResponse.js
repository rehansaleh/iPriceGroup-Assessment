const { Response } = require("./Response");

class SuccessResponse extends Response {
  constructor(params) {
    super(true, params);
  }
}

module.exports = { SuccessResponse };
