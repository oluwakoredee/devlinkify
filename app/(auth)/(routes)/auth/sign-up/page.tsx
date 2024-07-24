import React from 'react';
import RegisterForm from '@/components/auth/ui/register-form';

export default function page() {
  return (
    <div className=' bg-[#FAFAFA]  md:mt-0 h-screen w-screen flex justify-center md:items-center'>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
}
