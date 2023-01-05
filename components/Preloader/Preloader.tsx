import React, {useEffect, useRef} from 'react';
import { Expo, gsap } from "gsap";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Preloader() {

    let mainRef = useRef(null);

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"

    let svg = useRef(null);

    const t1 = gsap.timeline();

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {

            t1.from('.block', {
                    y: "100%",
                    duration: 1.2,
                    ease: Expo.easeInOut,
                    delay: 0.5,
                    stagger: 1,
                    opacity: 0
                })
                .to('.block', {
                    opacity: 0,
                    duration: 1.4,
                    ease: Expo.easeInOut,
                })
            t1.to('#svg', {
                duration: 0.8,
                attr: { d: curve },
                ease: "power2.easeIn",
            })
                .to('#svg', {
                    duration: 0.8,
                    attr: { d: flat },
                    ease: "power2.easeOut",
                });
            t1.to('.loader-wrap', {
                y: -1500,
            })
            t1.to('.loader-wrap', {
                zIndex: -1,
                display: "none"
            })
                .to('.preloader', {
                    x: "-200%",
                    duration: 2,
                })


        }, mainRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, [])

    return (
        <div ref={mainRef}>
        <div  className='preloader text-white fixed top-0 left-0 w-full h-full flex items-center justify-center z-[99] ' >
            <div className="loader-wrap absolute h-[100vh] w-full bg-transparent relative">
                <svg viewBox='0 0 1000 1000' preserveAspectRatio='none' fill={'#064E3B'} className='absolute w-[100vw] h-[110vh]'>
                    <path id='svg' d='M0, 1005S175, 995, 500, 995s500, 5, 500, 5V0H0Z'> </path>
                </svg>
                <div className="container absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] h-[300px]">
                    <div className="block
                absolute w-full h-full
                bg-[url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80')]
                bg-cover
                bg-center
                "></div>
                    <div className="block
                absolute w-full h-full
                bg-[url('https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')]
                bg-cover
                bg-center
                "></div>
                    <div className="block
                absolute w-full h-full
                bg-[url('https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80')]
                bg-cover
                bg-center
                "></div>
                    <div className="block
                absolute w-full h-full
                bg-[url('https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')]
                bg-cover
                bg-center
                "></div>
                    <div className="block
                absolute w-full h-full
                bg-[url('https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')]
                bg-cover
                bg-center
                "></div>
                    <div className="block
                absolute w-full h-full
                bg-[url('https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')]
                bg-cover
                bg-center
                "></div>

                </div>

            </div>
        </div>
        </div>
    );
}

export default Preloader;