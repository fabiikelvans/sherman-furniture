import React, {useRef} from 'react';
import {GiStarFormation} from "react-icons/gi";
import Marquee from "react-fast-marquee";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Marquees() {

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
                skewY: 5,
                stagger: {
                    amount: 0.6
                }

            });
        }, scrollRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );

    return (
        <div ref={scrollRef}>
        <div className='overflow-hidden line relative flex items-center text-3xl bg-emerald-800 w-full h-full max-w-[100vw]'>

            <Marquee gradient={false} speed={100} className=''>

                <div className='mr-[2.5rem] py-[2rem]'>
                    Folding Chair
                </div>

                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiStarFormation/>
                </div>

                <div className='mr-[2.5rem] py-[2rem]'>
                    Armchair
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiStarFormation/>
                </div>

                <div className='mr-[2.5rem] py-[2rem]'>
                    Sofa Chair
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiStarFormation/>
                </div>

                <div className='mr-[2.5rem] py-[2rem] '>
                    Cantilever Chair
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiStarFormation/>
                </div>

                <div className='mr-[2.5rem] py-[2rem] '>
                    Wing Chair
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiStarFormation/>
                </div>
            </Marquee>
        </div>
        </div>
    );
}

export default Marquees;