import React, {useRef} from 'react';
import {titan} from "../../pages";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Testimonials() {

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
        <div ref={scrollRef} className='spacing flex justify-between flex-col md:flex-row gap-x-4'>
            <div className='relative'>
                <h1 className='text-4xl md:text-5xl w-full md:w-[70%] line' style={titan.style}>Our customers love what we do</h1>
                <p className='my-12 text-lg w-full md:w-[60%] line'>
                    Many customers entrust various furniture needs to us, and customer satisfaction is our pride.
                </p>
            </div>

            <div className='w-full md:w-[400px] rounded-2xl bg-orange-200 text-[#121B14] py-8 px-10 line'>
                <div className='text-4xl opacity-40' style={titan.style}>"</div>
                <p className='italic'>
                    Their products are amazing! This is the best place to buy any furnitures with super fantastic quality and design.
                    With super many benefits you must try it.
                </p>
                <h3 className='font-bold mt-4'>Margaret Steward</h3>
            </div>
        </div>
    );
}

export default Testimonials;