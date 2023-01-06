import React from 'react';
import Nav from "./Nav/Nav";
import MainCanvas from "../Canvas/MainCanvas";
import {titan} from "../../pages";
import Button from "../ui/button/Button";
import Image from "next/image";
import {GiSofa, GiStarFormation} from "react-icons/gi";
import {TiStarburst} from "react-icons/ti";

function Header() {
    return (
        <div className='relative h-[100vh] relative'>
            <Nav/>

            <div className='absolute spacing top-[12%] left-0 '>
                <div className=''>
                    <h1 className='text-5xl md:text-6xl font-bold w-[80%] md:w-[60%]' >
                        Furniture
                        <span className='inline-block items-center  bg-[url("https://images.unsplash.com/photo-1632120669818-ed5498030e32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80")]
                          h-14 w-32 mx-2 pt-2 rounded-full bg-cover bg-no-repeat'></span>
                        for your dream</h1>
                    <p className='w-[80%] md:w-[50%] my-8'>All furniture products you are looking for are available here, enjoy the experience of various furniture</p>
                    <Button title='Discover'/>
                </div>

                <div className='absolute top-0 right-0 hidden md:block' >
                    <MainCanvas/>
                </div>

                <div className="">
                    <GiSofa className='absolute text-orange-400  top-[85%] md:top-[65%] left-[28%] h-8 md:h-16 w-8 md:w-16'/>
                    <TiStarburst className='absolute text-emerald-600 top-[54%] right-[20%] h-8 md:h-12 w-8 md:w-12'/>
                    <GiStarFormation className='absolute text-orange-500  top-[25%] md:top-12 right-[10%] md:right-0 h-10 md:h-14 w-10 md:w-14'/>
                </div>

            </div>


        </div>
    );
}

export default Header;