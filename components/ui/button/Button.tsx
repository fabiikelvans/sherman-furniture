import React, {useEffect, useRef, useState} from 'react';
import {titan} from "../../../pages";
import {gsap} from 'gsap';
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface Props {
    title?: string;
    bordered? : boolean | undefined;
    icon? : any;
    loading?: boolean;
    onClick?: () => void;

}

function Button({ title, bordered, icon, loading, onClick } : Props) {

    const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });

    const mouseListener = (e) => {
        setCursorPos({
            x: e.clientX - 10,
            y: e.clientY - 10
        });
    };

    const scaleCursorIn = () => {
        gsap.to(".cursor", {
            scale: 30,
            duration: 0.7
        });
        gsap.to(".btn-main", {
            color: "white",
            duration: 0.7
        });
    };

    const scaleCursorOut = () => {
        gsap.to(".cursor", {
            scale: 1,
            duration: 0.7
        });
        gsap.to(".btn-main", {
            duration: 0.7
        });
    };

    React.useEffect(() => {
        let button = document.querySelector(".button-wrapper");

        window.addEventListener("mousemove", mouseListener);
        button.addEventListener("mouseenter", scaleCursorIn);
        button.addEventListener("mouseleave", scaleCursorOut);

        return () => {
            window.removeEventListener("mousemove", mouseListener);
            button.removeEventListener("mouseenter", scaleCursorIn);
            button.removeEventListener("mouseleave", scaleCursorOut);
        };
    }, []);


    return (

        <div className='button-wrapper'>
        <button
        className={`btn-main flex items-center space-x-2 border-2 text-white hover:text-white 
        border-green-500 hover:border-green-600 py-4 px-6 rounded-full ${bordered && ''}`}
        onClick={onClick}
        >
            <span className="icon">{icon}</span>
            <span style={titan.style}>
                {loading ? "Loading..." : title}
            </span>
        </button>
            <div
                className="cursor bg-green-600"
                style={{
                    top: `${cursorPos.y}px`,
                    left: `${cursorPos.x}px`
                }}
            />
        </div>

    );
}

export default Button;