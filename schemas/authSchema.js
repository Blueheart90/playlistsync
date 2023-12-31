import z from 'zod'

const registerShema = z.object({
  name: z
    .string({
      invalid_type_error: 'El usuario debe ser un string',
      required_error: 'El usuario es requerido.'
    })
    .min(5),
  email: z
    .string({
      required_error: 'El correo es requerido.'
    })
    .email('El correo debe ser valido.'),
  photo: z.string().optional(),
  password: z
    .string({
      required_error: 'La contraseña es requerida.'
    })
    .min(8)
    .max(32),
  password_confirmation: z.string({
    required_error: 'La confirmacion de contraseña es requerida.'
  })
})
const loginShema = registerShema.pick({ email: true, password: true })

export const authValidate = (data) => {
  return registerShema
    .refine((data) => data.password === data.password_confirmation, {
      path: ['password_confirmation'],
      message: 'Las contraseñas no coinciden'
    })
    .safeParse(data)
}
export const authValidatePartial = (data) => {
  return registerShema.partial().safeParse(data)
}

export const loginValidate = (data) => {
  return loginShema.safeParse(data)
}
