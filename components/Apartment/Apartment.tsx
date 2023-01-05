import React from 'react';
import Image from "next/image";
import {titan} from "../../pages";
import {useRouter} from "next/router";

function Apartment() {

    const router = useRouter();

    return (
        <div className='relative bg-emerald-900 h-[120vh] text-center bg-no-repeat bg-[url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80")] bg-cover'>
            <div className='flex flex-col justify-center items-center py-[50vh]'>

                <h1 className='text-4xl md:text-5xl font-bold' style={titan.style}>Sherman Edition Apartment</h1>

                <div className='relative'>
                    <div className=' absolute top-0 left-0 animate-ping border-2 border-orange-500 h-[120px] w-[120px] rounded-full'></div>
                    <button className='menu-link button--fenrir '
                            onClick={() => router.push('/room')}
                    >
                        <svg aria-hidden="true" className="progress" width="120" height="120" viewBox="0 0 70 70">
                            <path className="progress__circle"
                                  d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"></path>
                            <path className="progress__path"
                                  d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
                                  pathLength="1"></path>
                        </svg>
                        <span className='font-bold text-lg'>Enter</span>
                    </button>
                </div>

            </div>
            </div>
    );
}

export default Apartment;