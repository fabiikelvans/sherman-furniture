import React, {useRef} from 'react';
import {titan} from "../../pages";
import Link from "next/link";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function About() {

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
        <div ref={scrollRef} className='text-center bg-orange-500 h-[100vh] py-[35vh]'>
            <h1 className='text-3xl line md:text-5xl font-extralight px-[10%] md:px-[20%] ' >
                Sherman Furniture has been offering
                stylish furniture in deep colours
                embracing a classic approach
            </h1>

            <h4 className='text-md line mt-8 font-semibold' >
                <Link href="/about">Discover Our History</Link>
            </h4>
        </div>
    );
}

export default About;