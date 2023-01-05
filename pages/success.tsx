import React, {useEffect, useState} from 'react';
import {Head} from "../seo/Head/Head";
import Link from "next/link";
import {useRouter} from "next/router";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import {GetServerSideProps} from "next";
import {fetchLineItems} from "../utils/fetchLineItems";
import Currency from "react-currency-formatter";
import Button from "../components/ui/button/Button";
import Image from "next/image";
import { Nunito, Titan_One } from '@next/font/google'

const nunito = Nunito({ subsets: ['latin'] });
export const titan = Titan_One({
    subsets: ['latin'],
    weight: '400'
});

interface Props {
    products: StripeProduct[] | null;
}

function Success({ products }: Props) {

    const router = useRouter();
    const { session_id } = router.query;
    const [mounted, setMounted] = useState(false);
    const [showOrderSummary, setShowOrderSummary] = useState(false);
    const subtotal = products.reduce(
        (acc, product) => acc + product.price.unit_amount / 100,
        0
    );
    // const { data: session } = useSession();

    const { width, height } = useWindowSize()

    useEffect(() => {
        setMounted(true);
    }, []);


    return (
        <div >
            <Head title='Aster | Success' description='Aster is an online beauty and cosmetics shop'/>

            <Confetti
                width={width}
                height={height}
                className='h-[100%] w-[100%]'
            />

            <div className='success spacing flex flex-col md:flex-row gap-y-12 space-x-0 md:space-x-12' style={nunito.style}>
                <div className="success__left w-[100%] md:w-[60%] space-y-4">
                    {/* Logo */}
                    <div  className='h-28 w-36 relative cursor-pointer'>
                        <Image priority src="/logo/logo-white.png" alt='logo' layout='fill' objectFit='contain'
                               onClick={() => router.push('/')} />
                    </div>

                    <div className="success__left-thanks mt-6">
                        <div className="text text-2xl" style={titan.style}>Thank you</div>
                        <div className="number my-2 italic">Order <span>#dfL45f</span></div>
                    </div>

                    <div className="success__left-order">
                        <div>
                            <h4 className='text-lg font-light'>Your order is confirmed</h4>
                            <p className='text-sm font-medium w-[80%]'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                We've accepted your order, and we're getting it ready. Come back to this page for updates on your shipment status.
                            </p>
                        </div>

                        <div className='mt-4'>
                            <h5 className='text-lg font-light'>Other tracking number:</h5>
                            <p className='font-bold'>CNB21441622</p>
                        </div>
                    </div>

                    <div className="success__left-update">
                        <h4 className='text-lg font-light'>Order updates</h4>
                        <p className='text-sm font-medium w-[80%]'>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            You'll get shipping and delivery updates by email and text.
                        </p>
                    </div>

                    <div className="success__left-contact">
                        <div className='italic'>
                            Need help? <span>Contact us</span>
                        </div>
                    </div>

                    {mounted && (
                        <Button
                            title='Continue Shopping'
                            onClick={() => router.push('/')}
                        />
                    )}
                </div>

                <div className="w-[100%] md:w-[40%] py-12 px-12 bg-emerald-900 space-y-2 rounded-2xl">
                    <div className="text-2xl mb-6" >
                        <h1 style={titan.style}>Order Summary</h1>
                    </div>

                    <div className="success__right-body space-y-2">
                                <div className="success__product">
                                    {/*@ts-ignore*/}
                                    {products.map((product) => (
                                        <div key={product.id}>
                                    <div className="success__product-title mt-2 flex justify-between">
                                        <h2>{product.description}</h2>
                                        <div className="amount font-bold">
                                            <Currency
                                                quantity={product.price.unit_amount / 100}
                                                currency={product.currency}
                                            />
                                        </div>
                                    </div>

                                        </div>
                                        ))}

                                    <hr className='my-6'/>
                                    <div className="success__product-subtotal flex justify-between">
                                        <p className='text-1'>Subtotal</p>
                                        <p className='amount font-bold'>
                                            <Currency quantity={subtotal}/>
                                        </p>
                                    </div>
                                    <div className="success__product-discount my-2 flex justify-between">
                                        <p className='text-1'>Discount</p>
                                        <p className='amount font-bold'>$0.00</p>
                                    </div>

                                    <div className="success__product-shipping flex justify-between">
                                        <p className='text-1'>Shipping</p>
                                        <p className='amount font-bold'>
                                            <Currency quantity={20} currency='USD' />
                                        </p>
                                    </div>

                                    <hr className='my-6'/>
                                    <div className="success__product-total flex justify-between">
                                        <p className='total text-lg font-bold'>Total</p>
                                        <p className='total-amount text-xl' style={titan.style}>
                                            USD {' '}
                                            <span className=''>
                                            <Currency quantity={ subtotal + 20} />
                                        </span>
                                        </p>
                                    </div>
                                </div>

                    </div>



                </div>
            </div>
        </div>
    );
}

export default Success;

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {

    const sessionId = query.session_id as string;
    const products = await fetchLineItems(sessionId)

    if (!products) return { props: null, notFound: true };

    else return {
        props: {
            products,
        }
    }
}