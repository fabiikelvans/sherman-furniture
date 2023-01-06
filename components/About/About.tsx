import React from 'react';
import {titan} from "../../pages";
import Link from "next/link";

function About() {
    return (
        <div className='text-center bg-orange-500 h-[100vh] py-[35vh]'>
            <h1 className='text-3xl md:text-5xl font-extralight px-[10%] md:px-[20%] ' >
                Sherman Furniture has been offering
                stylish furniture in deep colours
                embracing a classic approach
            </h1>

            <h4 className='text-md mt-8 font-semibold' >
                <Link href="/about">Discover Our History</Link>
            </h4>
        </div>
    );
}

export default About;