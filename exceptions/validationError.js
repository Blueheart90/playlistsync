export class ValidationError extends Error {
  constructor(errors, message = 'Input validation failed') {
    super(message)
    this.name = 'ValidationError'
    this.message = message
    this.statusCode = 400
    this.errors = errors
  }
}
