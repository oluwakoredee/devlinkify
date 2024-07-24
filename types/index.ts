import { ReactNode } from 'react';
import * as z from 'zod';
const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
});
const registerFormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
  confirmPassword: z.string().min(6,{
    message:"Password must be at least 6 characters"
  })
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
});

type props = {
  children: ReactNode;
};

export { loginFormSchema, registerFormSchema };
export { type props };
