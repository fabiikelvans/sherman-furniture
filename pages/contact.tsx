import React from 'react';
import {Head} from "../seo/Head/Head";
import Nav from "../components/Header/Nav/Nav";
import {titan} from "./shop";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Button from "../components/ui/button/Button";
import Image from "next/image";

function Contact() {
    return (
        <div>
            <Head title='Sherman Furniture - Contact' description='Modern furniture and design store'/>

            <div className='relative h-[100vh] '>
                <Nav/>
                <div className="absolute -z-10 top-0 left-0 header h-full w-full bg-center bg-[url('https://images.unsplash.com/photo-1617806168351-467743046acc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')]">
                    <div className="bg-black bg-opacity-50 w-full h-full absolute spacing flex justify-center items-center">
                        <h1 className='text-6xl text-white z-50 font-bold' style={titan.style}>Contact Us</h1>
                    </div>
                </div>
            </div>

            <div className='spacing flex flex-col md:flex-row gap-8'>
                <div className='w-full md:w-[50%]'>
                    <h1 className='text-4xl' style={titan.style}>Get in touch</h1>
                    <p className='mt-4'>Our friendly team would love to hear from you!</p>

                    <form action="" className='space-y-4 mt-12'>
                        <div className='flex flex-col lg:flex-row relative lg:space-x-6'>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='my-4'>First name</label>
                                <input className='py-4 px-6 bg-transparent border border-white outline-none rounded-lg transition-all duration-75 focus:text-orange-500 focus:border-orange-500'
                                       type="text"
                                       placeholder='First name'
                                       required
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='my-4'>Last name</label>
                                <input className='py-4 px-6 bg-transparent border border-white outline-none rounded-lg transition-all duration-75 focus:text-orange-500 focus:border-orange-500'
                                       type="text"
                                       placeholder='Last name'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='my-4'>Email</label>
                            <input className='py-4 px-6 bg-transparent border border-white outline-none rounded-lg transition-all duration-75 focus:text-orange-500 focus:border-orange-500'
                                   type="text"
                                   placeholder='Email'
                                   required
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='my-4'>Phone number</label>
                            <input className='py-4 px-6 bg-transparent border border-white outline-none rounded-lg transition-all duration-75 focus:text-orange-500 focus:border-orange-500'
                                   type="text"
                                   placeholder='+1(555)000-0000'
                                   required
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='my-4'>Message</label>
                            <textarea className='py-4 px-6 bg-transparent border border-white outline-none rounded-lg transition-all duration-75 focus:text-orange-500 focus:border-orange-500'
                                      placeholder='Your message'
                                      rows={5}
                                      required
                            />
                        </div>

                        <div className='flex items-center space-x-4 py-4'>
                            <input required type="checkbox" className="h-5 w-5 bg-green-600 checked:bg-orange-500"/>
                            <span className='text-sm font-extralight tracking-wider '>Agree to our Terms and Conditions</span>
                        </div>

                        <Button title='Send Message'/>
                    </form>

                </div>

                <div className='w-full md:w-[50%] relative'>
                    <div  className='h-[83%] w-full relative'>
                        <Image
                               src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80"
                               alt='contact'
                               fill
                               className='rounded-2xl'
                        />
                    </div>
                </div>
            </div>

            <CTA/>
            <Footer/>
        </div>
    );
}

export default Contact;