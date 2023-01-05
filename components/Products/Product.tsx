import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import {titan} from "../../pages";
import {urlFor} from "../../sanity";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {toggleAffinityModal} from "../../redux/features/modalSlice";
import {addToBasket} from "../../redux/features/basketSlice";
import toast from "react-hot-toast";
import gsap from "gsap";
import {useIsomorphicLayoutEffect} from "usehooks-ts";
import {ScrollTrigger} from "gsap/ScrollTrigger";

interface Props {
    product: Product
}


function Product({ product } : Props) {

    const dispatch = useDispatch();

    // Toggle Modal
    const toggleBasketModal = () => {
        dispatch(toggleAffinityModal())
    }

    // Add Item to Basket
    const addItemToBasket = () => {
        dispatch(addToBasket(product));

        toast.success(`${product.title} added to basket`, {
            position: "bottom-center",
        })
    }

    const t1 = gsap.timeline();

    const twitterRef = useRef();
    const twitterTween = useRef();

    useEffect(() => {
        twitterTween.current = gsap.fromTo(twitterRef.current, {
            duration: 0.5,
            opacity: 0

        }, {
            y: '-60%',
            opacity: 1,
            paused: true
        });
    }, []);

    const onMouseEnterHandler = () => {
        twitterTween.current.play();
    };
    const onMouseLeaveHandler = () => {
        twitterTween.current.reverse();
    };

    return (
       <div className='flex flex-col items-center text-center group'
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
       >
           <div className='relative bg-[#29312b] h-[300px] w-[300px] flex flex-col justify-center items-center rounded-2xl'

           >

               <Image src={urlFor(product.image[0]).url()}
                      alt={product.title}
                      height={200}
                      width={200}
                      className=''
               />
               <button
                   onClick={
                       (ev) => {
                           ev.stopPropagation();
                           toggleBasketModal();
                           addItemToBasket();
                       }}
                   ref={twitterRef}
                   className='absolute button--calypso bottom-0 bg-red-500 px-4 py-2 rounded-full hover:bg-emerald-700'>
                   <span> Add to Cart </span>
               </button>
           </div>

           <div className='my-6'>
               <Link href={`/product/${product.slug.current}`}>
               <h1 className='text-xl duration-150 hover:text-red-500' style={titan.style}>{product.title}</h1>
               </Link>

               <h3 className='mt-1'>$ 240</h3>
           </div>
       </div>
    );
}

export default Product;