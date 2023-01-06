import React, {Suspense, useRef} from 'react';
import {Canvas} from "@react-three/fiber";
import Furniture from "../Furniture/Furniture";
import ChairModel from "./ChairModel";
import SofaModel from "./SofaModel";
import TableModel from "./TableModel";
import {titan} from "../../pages";

// GSAP
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Collections() {

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    let scrollRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.section').forEach((section, i) => {
                // @ts-ignore
                ScrollTrigger.create({
                    // @ts-ignore
                    trigger: section,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                    // @ts-ignore
                    snap: true
                })
            })
        }, scrollRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );


    return (
        <div className='text-center'>
            {/*<h1 className='text-4xl mt-24 '>Our Collections</h1>*/}
        <div className='' ref={scrollRef}>
            <div className='relative collection section text-center h-[100vh] w-[100%] bg-orange-500'>
                <Suspense fallback={null}>
                    <Canvas shadows dpr={1.5}>
                        <ChairModel/>
                    </Canvas>
                </Suspense>
                <div className='absolute top-[40%] left-[10%] md:left-[35%] text-center'>
                    <h4 className='text-md'><a href="#">Collection</a></h4>
                    <h1 className='mt-2 text-6xl font-bold' style={titan.style}>Cantilever Chair</h1>
                </div>
            </div>

            <div className='relative section h-[100vh] w-[100%] bg-gray-500'>
                <Suspense fallback={null}>
                    <Canvas shadows dpr={1.5}>
                        <SofaModel/>
                    </Canvas>
                </Suspense>
                <div className='absolute top-[40%] left-[10%] md:left-[35%] text-center'>
                    <h4 className='text-md'><a href="#">Collection</a></h4>
                    <h1 className='mt-2 text-6xl font-bold px-[10%] md:px-0' style={titan.style}>Sofa Chair</h1>
                </div>
            </div>

            <div className='relative h-[100vh] w-[100%] bg-red-500'>
                <Suspense fallback={null}>
                    <Canvas shadows dpr={1.5}>
                        <TableModel/>
                    </Canvas>
                </Suspense>
                <div className='absolute top-[40%] left-[10%] md:left-[35%] text-center'>
                    <h4 className='text-md'><a href="#">Collection</a></h4>
                    <h1 className='mt-2 text-6xl font-bold' style={titan.style}>Lounge table</h1>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Collections;