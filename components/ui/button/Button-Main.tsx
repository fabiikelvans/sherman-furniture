import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ButtonMain = () => {
    const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });

    const mouseListener = (e : any) => {
        setCursorPos({
            x: e.clientX - 10,
            y: e.clientY - 10
        });
    };

    const scaleCursorIn = () => {
        gsap.to(".cursor", {
            scale: 18,
            duration: 0.7
        });
        gsap.to("button", {
            color: "white",
            duration: 0.7
        });
    };

    const scaleCursorOut = () => {
        gsap.to(".cursor", {
            scale: 1,
            duration: 0.7
        });
        gsap.to("button", {
            color: "#4b418a",
            duration: 0.7
        });
    };
    React.useEffect(() => {
        let button = document.querySelector(".button-wrapper");

        window.addEventListener("mousemove", mouseListener); //@ts-ignore
        button.addEventListener("mouseenter", scaleCursorIn);//@ts-ignore
        button.addEventListener("mouseleave", scaleCursorOut);

        return () => {
            window.removeEventListener("mousemove", mouseListener);//@ts-ignore
            button.removeEventListener("mouseenter", scaleCursorIn);//@ts-ignore
            button.removeEventListener("mouseleave", scaleCursorOut);
        };
    }, []);


    return (
        <div className="App">
            <h1>This is a hover test on buttons</h1>
            <div className="button-wrapper">
                <button className='btn-main'>Get in touch</button>
                <div
                    className="cursor"
                    style={{
                        top: `${cursorPos.y}px`,
                        left: `${cursorPos.x}px`
                    }}
                />
            </div>
        </div>
    );
};

export default ButtonMain;
