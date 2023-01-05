import React from 'react';
import Nav from "./Nav/Nav";
import MainCanvas from "../Canvas/MainCanvas";
import {titan} from "../../pages";
import Button from "../ui/button/Button";

function Header() {
    return (
        <div className='relative'>
            <Nav/>
            <MainCanvas/>

            <div className='absolute top-[30%] left-[10%]'>
                <h1 className='text-5xl md:text-6xl font-bold w-[80%] md:w-[60%]' >Furniture for your dream</h1>
                <p className='w-[80%] md:w-[50%] my-8'>All furniture products you are looking for are available here, enjoy the experience of various furniture</p>
                <Button title='Discover'/>
            </div>
        </div>
    );
}

export default Header;