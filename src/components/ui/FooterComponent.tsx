import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import Detecom from '@public/logo/detecom.svg';


export default async function FooterComponent() {
  return (
      <footer className='flex max-md:flex-col-reverse items-center justify-around gap-6 bg-secondary-500 w-full h-96 p-4'>
        <section className="relative min-w-60 h-full">
          <Link
              href="/"
          >
            <Image
                alt="logo"
                className="w-full max-w-60  h-full object-contain block dark:hidden sm:ml-10"
                src={Detecom}
                fill
            />
          </Link>
        </section>
        <section className='w-full flex justify-around max-md:pt-10 max-w-[1150px] max-xl:max-w-[750px] max-lg:max-w-[600px]'>
          <div className='flex flex-col justify-center text-white text-center gap-4'>
            <h6 className='font-bold mb-2'>Redes Sociales:</h6>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>TikTok</span>
            <span>YouTube</span>
          </div>
          <div className='flex flex-col justify-center text-white text-center gap-4'>
            <h6 className='font-bold mb-2'>Contacto:</h6>
            <span>Email</span>
            <span>WhatsApp</span>
          </div>
        </section>
      </footer>
  );
}