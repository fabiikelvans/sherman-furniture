import React, { useRef } from 'react'
import Image from "next/image";
import {titan} from "../../pages";
import {GiBedLamp, GiTable} from "react-icons/gi";
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Features() {

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    let scrollRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            t1.fromTo('.box', {
                scrollTrigger: {
                    trigger: '.box',
                    start: "top center",
                    end: "bottom bottom",
                    scrub: 1,
                    markers: true
                },
                opacity: 0,
                duration: 1.4,

            }, {
                opacity: 1,
                duration: 2,
            });
        }, scrollRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );


    return (
        <div ref={scrollRef} className='spacing relative flex flex-col gap-8 md:flex-row items-center md:justify-between'>
            <div className='relative box'>

                <Image src='https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
                       alt={'lamp'}
                       width={400}
                       height={400}
                       className='rounded-2xl image'
                />
                <div className='absolute top-[40%] left-[28%] text-center'>
                    <div className='flex justify-center items-center flex-col'>
                        <GiBedLamp className='h-12 w-12'/>
                    <h4 className='text-md'>Modern</h4>
                    <h1 className='mt-2 text-6xl font-bold' style={titan.style}>Élysée</h1>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <Image src='https://images.unsplash.com/photo-1594809512566-021e8369702a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvZmZlZSUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
                       alt={'table'}
                       width={400}
                       height={400}
                       className='rounded-2xl'
                />
                <div className='absolute top-[40%] left-[10%] text-center'>
                    <div className='flex justify-center items-center flex-col'>
                    <GiTable className='h-14 w-14'/>
                    <h4 className='text-md'>Wooden</h4>
                    <h1 className='mt-2 text-6xl font-bold' style={titan.style}>Lounge table</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;