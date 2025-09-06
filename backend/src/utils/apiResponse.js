import codes from "./statusCodes.js";

export default class ApiResponse {
  constructor(
    message = "Api fetched succesfully",
    code = codes.ok,
    payload = {}
  ) {
    this.message = message;
    this.name = this.constructor.name;
    this.payload = payload;
    this.success = true;
    this.code = code;
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, this.constructor);
  }

  res() {
    return {
      message: this.message,
      name: this.name,
      success: this.success,

      payload: this.payload,
      code: this.code,
      ...(!!parseInt(process.env.DEV) && { stack: this.stack }),
    };
  }
}
