class Response {
  Success;
  Payload;
  constructor(success, payload) {
    this.Success = success;
    this.Payload = payload;
  }
}

module.exports = {
  Response,
};
