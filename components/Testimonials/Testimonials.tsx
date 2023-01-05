import React from 'react';
import {titan} from "../../pages";

function Testimonials() {
    return (
        <div className='spacing flex justify-between flex-col md:flex-row gap-x-4'>
            <div className='relative'>
                <h1 className='text-4xl md:text-5xl w-full md:w-[70%]' style={titan.style}>Our customers love what we do</h1>
                <p className='my-12 text-lg w-full md:w-[60%]'>
                    Many customers entrust various furniture needs to us, and customer satisfaction is our pride.
                </p>
            </div>

            <div className='w-full md:w-[400px] rounded-2xl bg-orange-200 text-[#121B14] py-8 px-10'>
                <div className='text-4xl opacity-40' style={titan.style}>"</div>
                <p className='italic'>
                    Their products are amazing! This is the best place to buy any furnitures with super fantastic quality and design.
                    With super many benefits you must try it.
                </p>
                <h3 className='font-bold mt-4'>Margaret Steward</h3>
            </div>
        </div>
    );
}

export default Testimonials;