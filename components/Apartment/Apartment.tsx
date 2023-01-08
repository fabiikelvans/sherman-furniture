import React, {useRef} from 'react';
import Image from "next/image";
import {titan} from "../../pages";
import {useRouter} from "next/router";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Apartment() {

    const router = useRouter();

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    let scrollRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            t1.from('.line', {
                scrollTrigger: {
                    trigger: '.line',
                    start: "top bottom",
                    end: "bottom 350px",
                    scrub: 1,
                },
                duration: 1.8,
                y: 100,
                opacity: 0,
                ease: "power4.out",
                delay: 0.1,
                stagger: {
                    amount: 0.6
                }

            });
        }, scrollRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );

    return (
        <div ref={scrollRef} className='relative bg-emerald-900 h-[120vh] text-center bg-no-repeat bg-[url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80")] bg-cover'>
            <div className='flex flex-col justify-center items-center py-[50vh]'>

                <h1 className='text-4xl line md:text-5xl font-bold' style={titan.style}>Sherman Apartment</h1>

                <div className='relative line'>
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