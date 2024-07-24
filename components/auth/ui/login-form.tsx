'use client';

import signIn from '@/actions/auth/sign-in';
import { loginFormSchema } from '@/types/index';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';
import image1 from '/Users/alobakehinde/Desktop/HNG/devlinkify/public/Vector(1).png'
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import InvalidCredentialsError from '@/lib/error.auth';

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      setLoading(true);
      await signIn(values);
    } catch (e) {
      if (e) {
        toast('Invalid credentials', {
          action: {
            label: 'Dismiss',
            onClick: () => console.log('undo'),
          },
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='md:border-1 px-12  gap-7 text-[rgba(115,115,115,1)]  md:w-full flex flex-col md:p-4'>
      <div className='flex gap-2 mb-6  md:justify-center md:mb-0'>
      <Image src={image1} alt="" className='h-[40px] w-[40px]' />
        <h1 className='md:text-center md:mb-9  text-[26.25px]  font-bold text-[rgba(51,51,51,1)]'>devlinks</h1>
      </div>
      <div className='md:bg-white md:border-gray-400 md:w-[476px] md:pl-5 md:px-10   gap-8 md:py-6 md:rounded-md'>
      <div className={'text-2xl  flex flex-col items-start mb-5 '}>
        <p className='font-bold mb-2 text-[24px] text-[rgba(51,51,51,1)]'>Login</p>
        <p className='text-[16px] leading-6'>Add your details below to get back into the app</p>
        <Separator />
      </div>
      <div className='mt-0'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=' space-y-8 w-full'
          >
            <div className={'space-y-4'}>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={'font-semibold text-[12px]'}>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='e.g. alex@email.com'
                        {...field}
                        type='text'
                        className='h-[48px] bg-transparent md:w-[396px]'
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-semibold text-[12px]'>Password</FormLabel>

                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='Enter your password'
                        {...field}
                        type='password'
                        className='h-[48px] bg-transparent md:w-[396px]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Button disabled={loading} type='submit' className='w-full md:w-[396px] bg-[rgba(99,60,255,1)]'>
                Login
              </Button>
            </div>
            <div className={'flex gap-2 my-2 text-[16px]  flex-col items-center md:flex-row justify-center'}>
              <span>Don’t have an account?</span>
              <span>
                <Link
                  href={'/auth/sign-up'}
                  className=' text-[rgba(99,60,255,1)]'
                >
                   Create account
                </Link>
              </span>
            </div>
          </form>
        </Form>
      </div>
      </div>
     
    </div>
  );
}
