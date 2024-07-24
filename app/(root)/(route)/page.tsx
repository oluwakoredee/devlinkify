import SignoutButton from '@/components/auth/ui/sign-out-button';
import { auth } from 'auth';
import { redirect } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkManager from '@/components/link-manager';

export default async function Page() {
  const session = await auth();
  if (!session) redirect('/auth/sign-in');
  return (
    <div className='bg-[#FAFAFA] '>
      <nav className='flex justify-between bg-white rounded-lg mx-3 text-[rgba(115,115,115,1)] p-4 items-center text-[16px] mt-3 px-2'>
        <div className='flex gap-2 items-center'>
          <Image src={'/Vector(1).png'} alt="" className='h-[30px] w-[30px] flex' width={30} height={30} />
          <h1 className='md:text-center text-[26.25px] font-bold text-[rgba(51,51,51,1)] hidden md:flex'>devlinks</h1>
        </div>
        <div className='flex items-center gap-5'>
          <Link href={'/'}>
            <div className='flex items-center text-[rgba(99,60,255,1)] md:p-2 border-2 bg-[#EFEBFF] rounded-lg h-[50px]'>
              <Image src={'/ph_link-bold.png'} alt="" className='flex p-[19px]' width={60} height={50} />
              <p className='hidden md:mr-4 md:ml-[-15px] md:flex font-bold'>Links</p>
            </div>
          </Link>
          <Link href={'/profile'}>
            <div className='flex items-center h-12 rounded-lg border-2 md:px-4'>
              <Image src={'/Vector(3).png'} alt="" className='p-[16px] flex' width={50} height={50} />
              <p className='hidden md:flex md:ml-[-8px] font-bold'>Profile Details</p>
            </div>
          </Link>
        </div>
        <div className='flex items-center border-2 h-12 md:p-2 md:px-4 border-[rgba(99,60,255,1)] rounded-lg'>
          <Image src={'/Vector(4).png'} alt="" className='flex md:hidden p-[16px]' width={60} height={50} />
          <p className='hidden md:flex text-[rgba(99,60,255,1)] font-bold'>Preview</p>
        </div>
      </nav>
      <div className='flex md:justify-center xl:justify-normal'>
        <div className='hidden bg-white mr-6 mt-6 xl:flex w-[50%]'>
          <Image src={'/preview-section.png'} alt="" className='flex xl:mt-[-80px] p-48' width={800} height={500} />
        </div>
        <div className='mt-10 px-10 bg-white md:w-full xl:w-[60%] mx-3'>
          <div className='justify-center flex bg-[#FAFAFA] p-2 rounded-lg flex-col gap-5'>
            <h1 className='text-[24px] md:text-[32px] font-bold text-[rgba(51,51,51,1)]'>Customize your links</h1>
            <p className='text-[rgba(115,115,115,1)] text-[16px] pr-18 md:p-0'>Add/edit/remove links below and then share all your profiles with the world!</p>
          </div>
          <div className='mt-12 flex flex-col gap-6'>
            <p className='border-2 h-12 flex justify-center items-center border-[rgba(99,60,255,1)] bg-[#EFEBFF] rounded-lg'>+ Add new link</p>
            <div className='flex flex-col bg-[#FAFAFA] rounded-lg pb-4 justify-center text-center gap-6'>
              <Image src={'/Group 273.png'} alt="" className='flex p-[16px] mx-auto w-1/2' width={600} height={500} />
              <h1 className='font-bold text-[24px] md:text-[32px]'>Let’s get you started</h1>
              <LinkManager />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
