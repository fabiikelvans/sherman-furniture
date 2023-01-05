import React from 'react';
import Image from "next/image";
import {titan} from "../../pages";

function Journal() {
    return (
        <div className='py-20'>
            <div className='spacing flex flex-col md:flex-row mb-32 md:mb-0 justify-between gap-y-12'>
                <div className='w-[100%] md:w-[50%] text-center'>
                    <h1 className='text-6xl font-bold' style={titan.style}>Journal</h1>
                    <p className='mt-10 px-12 text-sm font-semibold'>The Journal is a space where we post our thoughts on trends, collaborations with other designers, stuff we love at the moment, and news. Not to mention Red events that can't be missed!</p>
                    <button className='mt-12 underline tracking-wide'>Discover</button>
                </div>

                <div className='relative w-[100%] md:w-[50%]'>
                    <div className='absolute top-0 left-0 h-72 md:h-80 w-60 md:w-64'>
                        <Image src='https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
                               alt={'table'}
                               fill
                               className='object-cover rounded-xl'
                        />
                    </div>

                    <div className='absolute top-8 right-0 h-56 md:h-64 w-44 md:w-56'>
                        <Image src='https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
                               alt={'table'}
                               fill
                               className='object-cover rounded-xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Journal;