import React from 'react';
import {Head} from "../seo/Head/Head";
import Nav from "../components/Header/Nav/Nav";
import {titan} from "./shop";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import Testimonials from "../components/Testimonials/Testimonials";

function About() {
    return (
        <div>
            <Head title='Sherman Furniture & Design' description='Modern furniture and design store'/>

            <div className='relative h-[100vh] '>
                <Nav/>
                <div className="absolute -z-10 top-0 left-0 header h-full w-full bg-center bg-[url('https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')]">
                    <div className="bg-black bg-opacity-50 w-full h-full absolute spacing flex justify-center items-center">
                        <h1 className='text-6xl text-white z-50 font-bold' style={titan.style}>About Us</h1>
                    </div>
                </div>
            </div>

            <div className='spacing flex justify-between flex-col md:flex-row gap-12 md:items-center'>

                <Image src='https://images.unsplash.com/photo-1616593871468-2a9452218369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
                       alt={'about'}
                       height={600}
                       width={400}
                       className='rounded-2xl'
                />
                <div>
                    <h1 className='text-4xl px-0 md:px-[15%] font-extralight'>Experienced in making your home more modern and comfortable</h1>
                    <p className='text-md font-medium mt-8 px-0 md:px-[15%] '>
                        We have helped thousands of customers by making their homes more modern and comfortable,
                        do not let yourself have any doubts about using quality products from us.
                    </p>
                </div>
            </div>

            <Testimonials/>

            <CTA/>
            <Footer/>

        </div>
    );
}

export default About;