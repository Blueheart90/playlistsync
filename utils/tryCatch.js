export const tryCatch = (controllerMethod) => async (req, res, next) => {
  try {
    await controllerMethod(req, res, next)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
