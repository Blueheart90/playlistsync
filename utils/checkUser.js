import { comparePassword } from './hashPassword.js'

export const checkUser = async (user, passwordTocheck) => {
  return user ? await comparePassword(passwordTocheck, user.password) : false
}
