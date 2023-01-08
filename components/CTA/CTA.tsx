import React, {useRef} from 'react';
import Image from "next/image";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Cta() {

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    let scrollRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            t1.from('.line', {
                scrollTrigger: {
                    trigger: '.line',
                    start: "top bottom",
                    end: "bottom 400px",
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
        <div ref={scrollRef} className='flex justify-center overflow-hidden bg-emerald-900'>
        <div className='spacing grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-4 text-center '>

            <div className='line'>
                <h1 className='text-xl'>Free Shipping</h1>
                <div  className='relative max-w-4xl mx-auto mt-8 h-52 w-80'>
                    <Image priority src="https://images.unsplash.com/photo-1580709839515-54b8991e2813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80"
                           alt='shipping'
                           fill
                           className='object-cover rounded-2xl'
                            />
                </div>
            </div>

            <div className='line'>
                <h1 className='text-xl'>Secure Payment</h1>
                <div  className='relative max-w-4xl mx-auto mt-8 h-52 w-80'>
                    <Image src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGF5bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
                           alt='secure payment'
                            fill
                           className='object-cover rounded-2xl'
                    />
                </div>
            </div>

            <div className='line'>
                <h1 className='text-xl'>Customer Support</h1>
                <div  className='relative max-w-4xl mx-auto mt-8 h-52 w-80'>
                    <Image priority src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGN1c3RvbWVyJTIwc3VwcG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
                           alt='customer support'
                           fill
                           className='object-cover rounded-2xl'
                    />
                </div>
            </div>

        </div>
        </div>
    );
}

export default Cta;