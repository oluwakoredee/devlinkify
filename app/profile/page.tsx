import Image from 'next/image';
import Link from 'next/link';


export default function page(){
    return (
        <div className='bg-[#FAFAFA] '>
        {/* <div className={'w-96 flex flex-col justify-center'}>
          <div className='text-center'>
            Welcome <span className='font-bold ml-2'>{session?.user?.email}</span>
          </div>
          <div className='mt-4 w-full'>
            <SignoutButton />
          </div>
        </div> */}
  
        <nav className='flex justify-between bg-white rounded-lg mx-3 text-[rgba(115,115,115,1)] p-4   items-center text-[16px] mt-3 px-2'>
        <div className='flex gap-2  items-center  '>
        <Image src={'/Vector(1).png'} alt="" className='h-[30px] w-[30px] flex' width={30} height={30} />
        <h1 className='md:text-center   text-[26.25px]  font-bold text-[rgba(51,51,51,1)] hidden md:flex'>devlinks</h1>
        </div>
        <div className='flex items-center gap-5 '>
        <Link href={'/'}>
        <div className='flex items-center   md:p-2 border-2  rounded-lg h-[50px]'>
          <Image src={'/ph_link-bold.png'} alt="" className=' flex p-[19px]' width={60} height={50}/>
          <p className='hidden md:mr-4 md:ml-[-15px] md:flex font-bold'>Links</p>
          </div>
          </Link>
          <div className='flex items-center h-12 rounded-lg text-[rgba(99,60,255,1)] bg-[#EFEBFF] border-2 md:px-4'>
          <Image src={'/Vector(3).png'} alt="" className='p-[16px] flex ' width={50} height={50}/>
          <p className='hidden md:flex md:ml-[-8px] font-bold '>Profile Details</p>
          </div>
        </div>
        <div>
        <div className='flex items-center border-2 h-12 md:p-2 md:px-4 border-[rgba(99,60,255,1)] rounded-lg'>
          <Image src={'/Vector(4).png'} alt="" className='flex md:hidden p-[16px] ' width={60} height={50}/>
           <p className='hidden md:flex text-[rgba(99,60,255,1)] font-bold'>Preview</p>
          </div>
        </div>
        </nav>
        <div className='flex md:justify-center  xl:justify-normal'> 
          <div className='hidden bg-white mr-6  mt-6  xl:flex w-[40%]'>
          <Image src={'/Subtract(1).png'} alt="" className='flex xl:mt-[-80px] p-48 ' width={800} height={500} />
          </div>
          <div>
            <div className='flex flex-col gap-5'>
                <h1>Profile Details</h1>
                <p>Add your details to create a personal touch to your profile.</p>
            </div>
            <div className='flex justify-between gap-7 '>
                <p>Profile picture</p>
                <Image src={'/Vector(4).png'} alt="" className='flex md:hidden p-[16px] ' width={60} height={50}/>
                <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
            </div>
          </div>
        </div>
      </div>
  );
}

//<Link href={'/your-link-here'} prefetch={''}>name>/Link> or <a href={'url'}>name</a>