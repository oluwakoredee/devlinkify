import { ReactNode } from 'react';
import {LucideIcon} from 'lucide-react'
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

export type LinkType = 'github' | 'youtube' | 'linkedin' | 'facebook' | 'twitter';


export type LinkTypeInfo = {
  value: LinkType;
  label: string;
  icon: LucideIcon;
};

export type Link={
    id: string;
    type: LinkType;
    url: string;
  }
  
export type LinkCardProps= {
    id: string;
    index: number;
    link: Link;
    onUpdate: (id: string, updatedLink: Partial<Link>) => void;
    onRemove: (id: string) => void;
  }

