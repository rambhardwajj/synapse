enum ErrCodes {
  DEFAULT_RES = "DEFAULT_RES",
  INVALID_CREDS = "INVALID_CREDS",
  EMAIL_NOT_VERIFIED = "EMAIL_NOT_VERIFIED",
  VALIDATION_ERR = "VALIDATION_ERR",
  USER_EXISTS = "USER_EXISTS",
  DB_INSERT_ERR = "DB_INSERT_ERR",
  DB_UPDATE_ERR = "DB_UPDATE_ERR",
  DB_ROW_NOT_FOUND = "DB_ROW_NOT_FOUND",
  ALREADY_VERIFIED = "ALREADY_VERIFIED",
  EMAIL_SEND_ERR = "EMAIL_SEND_ERR",
  UNAUTHORIZED = "UNAUTHORIZED",
  TOKEN_EXPIRED = "TOKEN_EXPIRED"
}

class ApiError extends Error {
  statusCode?: number;
  data?: any;
  message: string;
  success?: boolean;
  errType?: ErrCodes;
  errors?: any[];

  constructor(
    statusCode: number,
    message: string,
    errType?: ErrCodes,
    errors?: [],
    stack = ""
  ) {
    super();
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errType = errType ?? ErrCodes.DEFAULT_RES;
    this.errors = errors;

    if (process.env.NODE_ENV == "development") {
      if (stack) this.stack = stack;
      else Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = ""
    }
  }
}

export { ApiError, ErrCodes };
