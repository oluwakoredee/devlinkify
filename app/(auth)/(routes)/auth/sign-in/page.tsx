import React from 'react';
import LoginForm from '@/components/auth/ui/login-form';

export default function page() {
  return (
    <div className='bg-[#FAFAFA]  h-screen w-screen flex mt-20  md:mt-0 justify-center  md:items-center'>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
