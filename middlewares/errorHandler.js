export const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    name: err.name,
    message: err.message,
    code: err.code || null,
    errors: err.errors || null
    // stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}
