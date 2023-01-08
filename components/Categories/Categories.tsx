import React, {useRef} from 'react';
import Product from "../Products/Product";
import Link from "next/link";
import Category from "./Category";
import {useRouter} from "next/router";
import {urlFor} from "../../sanity";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";


interface Props {
    categories: Category[];
    products: Product[];
}


function Categories({ categories, products } : Props) {

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
        <div ref={scrollRef} className='spacing'>
            <div  className='flex line justify-between flex-col md:flex-row items-center gap-8'>
                {
                    categories.map((category: Category) => (
                        <Category
                            key={category._id}
                            name={category.title}
                            link={() => router.push(`/furniture/${category.slug.current}`)}
                            image={urlFor(category.image[0]).url()}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Categories;