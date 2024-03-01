class AppError {
  massage;
  statusCode;

  constructor(massage, statusCode = 400) {
    this.massage = massage;
    this.statusCode = statusCode;
  }
}
module.exports = AppError;