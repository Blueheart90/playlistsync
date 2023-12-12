import z from 'zod'

const authShema = z.object({
  username: z
    .string({
      invalid_type_error: 'El usuario debe ser un string',
      required_error: 'El usuario es requerido.'
    })
    .min(5),
  email: z.string().email(),
  password: z.string().min(8).max(32),
  password_confirmation: z.string().min(8).max(32)
})

export const authValidate = (data) => {
  return authShema.safeParse(data)
}
export const authValidatePartial = (data) => {
  return authShema.partial().safeParse(data)
}
