export class CredencialError extends Error {
  constructor(errors = null, message = 'Invalid credentials') {
    super(message)
    this.name = 'Unauthorized'
    this.message = message
    this.statusCode = 401
    this.errors = errors
  }
}
