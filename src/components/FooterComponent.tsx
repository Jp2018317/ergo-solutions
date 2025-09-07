import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import DetecomWhite from '@public/logo/DetecomWhite.webp';
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faContactCard} from "@fortawesome/free-solid-svg-icons";
import {WHATSAPP_NUMBER} from "@/config";


export default async function FooterComponent() {
  return (
      <footer className='flex max-md:flex-col-reverse items-center justify-around gap-6 bg-secondary-500 w-full h-96 px-4 py-6'>
        <section className="relative min-w-60 h-full">
          <Link
              href="/"
          >
            <Image
                alt="logo"
                className="w-full max-w-60 h-full object-contain block dark:hidden sm:ml-10"
                src={DetecomWhite}
                fill
            />
          </Link>
        </section>
        <section className='flex justify-center md:justify-end max-md:pt-10 max-w-[1150px] max-xl:max-w-[750px] max-lg:max-w-[600px]'>
          <div className='flex flex-col justify-center items-center text-white text-center gap-4 sm:mr-10'>
            <h6 className='font-bold mb-2 max-sm:text-action'>Contacto:</h6>
            {/*<div className='flex gap-2'>*/}
            {/*    <FontAwesomeIcon icon={faContactCard} />*/}
            {/*<   span>Email: ventas@solucionesergonomicas-gt.com</span>*/}
            {/*</div>*/}
              <a className='flex items-center gap-2' href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>WhatsApp</span>
            </a>
          </div>
        </section>
      </footer>
  );
}
