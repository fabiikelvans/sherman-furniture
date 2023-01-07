import Image from 'next/image'
import {
    SearchIcon,
    ShoppingBagIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
    XCircleIcon, MenuAlt1Icon
} from "@heroicons/react/outline"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { Nunito } from '@next/font/google';
import Menu from "./Menu";
import {HiMenu, HiOutlineMenuAlt3} from "react-icons/hi";
import {CgClose} from "react-icons/cg";

// Redux Modal
import {modalOpen, toggleAffinityModal} from "../../../redux/features/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectBasketItems} from "../../../redux/features/basketSlice";
import Link from "next/link";

function Header() {
    const router = useRouter();


    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: <HiOutlineMenuAlt3 />
    });

    // State of our button
    const [disabled, setDisabled] = useState(false);

    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                // @ts-ignore
                initial: null,
                // @ts-ignore
                clicked: true,
                menuName: <CgClose/>
            });
        } else if (state.clicked === true) {
            setState({
                // @ts-ignore
                clicked: !state.clicked,
                menuName: <HiOutlineMenuAlt3 />
            });
        } else if (state.clicked === false) {
            setState({
                // @ts-ignore
                clicked: !state.clicked,
                menuName: <CgClose/>
            });
        }
    };

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };


    // Show Basket Modal
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    // Selected Items
    const items = useSelector(selectBasketItems);

    return (
        <div className='z-50 text-white'>
            <div className='flex  pt-4 items-center justify-between max-w-6xl mx-5 lg:mx-auto'>

                {/* Logo */}
                <Link href={'/'}
                >
                <div className='h-24 w-32 relative cursor-pointer'>
                    <Image priority src="/logo/logo-white.png" alt='logo' layout='fill' objectFit='contain'/>
                </div>
                </Link>

                {/* Icons */}
                <div className='flex items-center justify-end space-x-4'>

                    <div className='relative hidden md:inline-flex flex justify-center items-center h-12 w-12 transition-all rounded-full duration-300 hover:bg-white hover:text-black'
                    >
                        <SearchIcon className='navBtn cursor-pointer'/>
                    </div>

                    <div className='relative cursor-pointer flex justify-center items-center h-12 w-12 transition-all rounded-full duration-300 hover:bg-white hover:text-black'
                         onClick={() => dispatch(toggleAffinityModal())}
                    >
                        <ShoppingBagIcon className='navBtn'/>
                            {items.length > 0 && (
                                <div className='absolute bg-orange-500 rounded-full flex items-center justify-center animate-pulse text-white -top-1 -right-2 text-xs w-5 h-5'>
                                    <p>{items.length}</p>
                                </div>
                            )}

                    </div>

                    <button className='hidden md:inline-flex' >Sign In</button>


                    {/*Menu Component*/}
                    <div className="nav__menu">
                        <Menu state={state}/>
                    </div>

                    <button className="nav__toggle z-40 bg-transparent border-none p-0 m-0 outline-none ease-in-out duration-300 cursor-pointer" disabled={disabled} onClick={handleMenu}>
                        <div className='nav__toggle-icon navBtn flex justify-center items-center cursor-pointer text-[1.2rem] h-12 w-12 transition-all rounded-full duration-300 hover:bg-white hover:text-black'>
                            {state.menuName}
                        </div>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Header