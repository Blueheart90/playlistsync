import bcrypt from 'bcrypt'

export const encrypPassword = async (input, salt = 10) => {
  const hash = await bcrypt.hash(input, salt)
  return hash
}

export const comparePassword = async (input, hash) => {
  const result = await bcrypt.compare(input, hash)
  return result
}
