import React from 'react';
import {BsBoxArrowUpRight} from "react-icons/bs";
import Link from "next/link";
import {titan} from "../../pages";

interface Props {
    name: string;
    image: string;
    link: any;
}


function Category({ name, link, image } : Props) {
    return (
        <div style={{ backgroundImage: `url(${image})`}} className='relative flex justify-center items-end
         bg-center bg-cover h-[450px] w-full rounded-2xl'>
            <div className='h-[30%] mb-6 w-[85%] bg-emerald-600 backdrop-blur-md text-white rounded-2xl p-6 flex justify-between'>
                <div>
                    <h1 className='text-3xl' style={titan.style}>{name}</h1>
                    <h4 className='mt-2 uppercase text-xs font-extralight tracking-wider'>Category</h4>
                </div>
                <button onClick={link} className='flex justify-center text-emerald-200 items-center h-12 w-12 transition-all rounded-full duration-300 hover:bg-white hover:text-orange-600'>
                    <BsBoxArrowUpRight className='h-6 w-6'/>
                </button>
            </div>
        </div>
    );
}

export default Category;