'use client';

import signIn from '@/actions/auth/sign-in';
import { registerFormSchema } from '@/types/index';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import {toast} from 'sonner'


export default function RegisterForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword:'',
    },
  });

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    setLoading(true);
    try {
      if(values.password !== values.confirmPassword)
             toast.warning("passwords do not match")

      const res = await fetch(`${window.location.origin}/api/auth/register`, {
        method: 'POST',
        body: JSON.stringify(values),
      });
      if (res.ok) {
        const data: { email: string; password: string } = {
          email: values.email,
          password: values.password,
        };
        toast.success('login succeessful')
        await signIn(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='min-w-96 py-10 md:py-0 md:border-1 gap-4 rounded-xl md:w-full  text-[rgba(115,115,115,1)]    flex flex-col p-3'>
      <div className='flex gap-2  items-center mb-6 md:justify-center '>
      <Image src={'/Vector(1).png'} alt="" className='h-[30px] w-[30px] flex ' />
      <h1 className='md:text-center   text-[26.25px]  font-bold text-[rgba(51,51,51,1)]'>devlinks</h1>
      </div>
      <div className='md:border-1 md:bg-[white]  flex flex-col md:w-[476px]  gap-8 md:py-6 rounded-xl md:items-center'>
      <div className={'text-2xl   flex text-[24px] md:text-[26.25px] md:px-8  md:w-full flex-col items-start text-center '}>
        <p className='font-bold mb-2 text-[rgba(51,51,51,1)]'>Create account</p>
        <p className='text-[16px]'>Let’s get you started sharing your links!</p>
        <Separator />
      </div>
      <div className='mt-2'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=' space-y-4 w-full'
          >
            <div className={'space-y-4'}>
              {/* <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={'font-semibold'}>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='john doe'
                        {...field}
                        type='text'
                        className='h-[48px]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={'font-semibold text-[12px]'}>Email address</FormLabel>
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
                    <FormLabel className='font-semibold text-[12px]'>Create password</FormLabel>

                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='At least .8 characters'
                        {...field}
                        type='password'
                        className='h-[48px] bg-transparent md:w-[396px]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                            <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-semibold text-[12px]'>Confirm password</FormLabel>

                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='At least .8 characters'
                        {...field}
                        type='password'
                        className='h-[48px] bg-transparent md:w-[396px] ring-[rgba(99,60,255,1)]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <p className='text-[12px]'>Password must contain at least 8 characters</p>
            <div>
              <Button disabled={loading} type='submit' className='w-full bg-[rgba(99,60,255,1)]'>
                Submit
              </Button>
            </div>
            <div className={'flex gap-2 flex-col items-center  md:flex-row justify-center w-full'}>
              <span>Already have An Account? </span>
              <span>
                <Link
                  href={'/auth/sign-in'}
                  className='font-semibold text-[rgba(99,60,255,1)]'
                >
                  Sign in here
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
