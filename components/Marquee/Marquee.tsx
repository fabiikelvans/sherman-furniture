import React from 'react';
import {GiStarFormation} from "react-icons/gi";
import Marquee from "react-fast-marquee";

function Marquees() {
    return (
        <div className='overflow-hidden relative flex items-center text-3xl bg-emerald-800 w-full h-full max-w-[100vw]'>

            <Marquee gradient={false} speed={100}>

                <div className='mr-[2.5rem] py-[2rem]'>
                    Folding Chair
                </div>

                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiStarFormation/>
                </div>

                <div className='mr-[2.5rem] py-[2rem]'>
                    Armchair
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiStarFormation/>
                </div>

                <div className='mr-[2.5rem] py-[2rem]'>
                    Sofa Chair
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiStarFormation/>
                </div>

                <div className='mr-[2.5rem] py-[2rem] '>
                    Cantilever Chair
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiStarFormation/>
                </div>

                <div className='mr-[2.5rem] py-[2rem] '>
                    Wing Chair
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiStarFormation/>
                </div>
            </Marquee>
        </div>
    );
}

export default Marquees;