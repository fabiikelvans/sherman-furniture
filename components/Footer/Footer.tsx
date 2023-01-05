import React from 'react';
import Image from "next/image";
import {PaperAirplaneIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import Link from "next/link";

function Footer() {
    const router = useRouter();

    return (
        <div className='spacing flex justify-between gap-x-6 gap-y-8 flex-col md:flex-row'>
            <div className='text-center'>
                <Link href={''} onClick={() => router.push('/')}>
                <div  className='h-24 w-32 relative cursor-pointer'>
                    <Image priority src="/logo/logo-white.png" alt='logo' fill
                            />
                </div>
                </Link>
                <p className='font-extralight text-[15px] mt-4 w-[60%]'>Creating Modern Looking Homes!</p>
            </div>

            <div>
                <ul className='font-light text-[15px]'>
                    <li ><a>info@sherman.com</a></li>
                    <li className='my-4'><a>+254 712 345 678</a></li>
                    <li>Nairobi, Kenya</li>
                </ul>
            </div>

            <div>
                <ul className='font-light text-[15px]'>
                    <li className='cursor-pointer'><a className='link link--thebe duration-300 hover:text-orange-600' onClick={() => router.push('/about')}>About Us</a></li>
                    <li className='my-4 cursor-pointer'><a className='link link--thebe duration-300 hover:text-orange-600' onClick={() => router.push('/privacy')}>Privacy Policy</a></li>
                    <li className='cursor-pointer'><a className='link link--thebe duration-300 hover:text-orange-600' onClick={() => router.push('/terms')}>Term & Conditions</a></li>
                </ul>
            </div>

            <div>
                <h1 className='font-bold'>Get 20% off</h1>
                <p className='text-sm my-4'>By subscribing to our newsletter</p>
                <div className='relative'>
                    <form action="">
                    <input type="text" required placeholder='Enter Email' className='bg-emerald-800 w-full text-sm font-light outline-none py-3 px-4'/>
                    <button type={'submit'}><PaperAirplaneIcon className='absolute cursor-pointer rotate-90 top-[20%] right-2 h-6 w-6 transition-all ease-in duration-150 hover:text-orange-400'/></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;