import React from 'react';
import {titan} from "../../pages";

function About() {
    return (
        <div className='text-center bg-orange-500 h-[100vh] py-[35vh]'>
            <h1 className='text-3xl md:text-5xl font-extralight px-[10%] md:px-[20%] ' >
                Red Edition has been offering
                stylish furniture in deep colours
                embracing a classic approach
            </h1>

            <h4 className='text-md mt-8 font-semibold' >
                <a href="#">Discover Our History</a>
            </h4>
        </div>
    );
}

export default About;