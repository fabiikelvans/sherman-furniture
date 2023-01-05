import React, {useEffect, useState} from 'react';
import {modalOpen, toggleAffinityModal} from "../../redux/features/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {selectBasketItems, selectBasketTotal} from "../../redux/features/basketSlice";
import {fetchPostJSON} from "../../utils/api-helper";
import Stripe from "stripe";
import getStripe from "../../utils/get-stripejs";
import CheckoutProduct from "../Checkout/CheckoutProduct";
// @ts-ignore
import Currency from "react-currency-formatter";
import {CiShoppingBasket} from "react-icons/ci";
import Link from "next/link";
import {BiLock} from "react-icons/bi";
import Button from "../ui/button/Button";
import {XIcon} from "@heroicons/react/solid";
import {titan} from "../../pages";



function Modal() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    // Show Cart Modal
    const showModal = useSelector(modalOpen);

    // Items added to the cart
    const items = useSelector(selectBasketItems);


    // Basket Total
    const basketTotal = useSelector(selectBasketTotal);

    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
        {} as { [key: string] : Product[] }
    );

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item._id] = results[item._id] || []).push(item)
            return results;
        }, {} as { [key: string] : Product[] });

        setGroupedItemsInBasket(groupedItems);
    }, [items]);



    // Create Checkout Session
    const createCheckoutSession = async () => {
        setLoading(true);

        const checkoutSession: Stripe.Checkout.Session =  await fetchPostJSON(
            "/api/checkout_sessions",
            {
                items: items,
            }
        );

        // Internal Server Error
        if((checkoutSession as any).statusCode === 500) {
            console.error((checkoutSession as any).message);
            return;
        }

        // Redirect to checkout
        const stripe = await getStripe()
        const { error } = await stripe!.redirectToCheckout({
            sessionId: checkoutSession.id,
        });
        console.warn(error.message);
        setLoading(false);
    }

    return (
        <>
            {showModal ? (
                <div className='modal fixed top-0 flex right-0 w-[100%] h-[100%] transition-all duration-300 z-50'>
                    <div className="bg-[rgba(19, 19, 19, 0.69)] backdrop-blur-md w-0 md:w-[60%]"
                         onClick={() => dispatch(toggleAffinityModal())}
                    ></div>
                    <div className="bg-emerald-800 w-[100%] md:w-[40%] py-[3rem] px-[2rem]  sm:px-[4rem] relative ">

                        <div className="flex justify-between">
                            <div className="text-2xl" style={titan.style}>
                                <h2>Shopping Bag</h2>
                            </div>
                            <div className="modal__header-icon cursor-pointer duration-300 hover:text-red-400"
                                 onClick={() => dispatch(toggleAffinityModal())}
                            >
                                <XIcon className='h-6 w-6'/>
                            </div>

                        </div>


                        <div className="modal__body">


                            {items.length > 0 ? (
                            <div>
                                <div className="modal__body-products disable-scrollbar">
                                    <div>
                                        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                                            <CheckoutProduct key={key} items={items} id={key}/>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between my-6">
                                    <h2 className='text-lg font-bold'>Subtotal:</h2>
                                    <h2 className='text-lg' style={titan.style}><Currency quantity={basketTotal} currency='USD'/></h2>
                                </div>

                                <div className="">
                                    <Button title='Proceed to Checkout'
                                            icon={loading ? null : <BiLock className='h-6 w-6'/>}
                                            loading={loading}
                                            onClick={createCheckoutSession}
                                    />
                                </div>
                                <div className="modal__body-payments"></div>
                            </div>

                                )
                                : (

                            <div className='flex flex-col items-center mt-24 space-y-6'>
                                <CiShoppingBasket className='h-12 w-12'/>
                                <h2 className='text-2xl font-light'>Your cart is empty</h2>
                                <p className='empty-text'>Please, add some products to checkout</p>

                                <Link href={'/'} className=''>
                                    <Button title='Continue Shopping'
                                            onClick={() => dispatch(toggleAffinityModal())}
                                    />
                                </Link>
                            </div>

                                )}

                        </div>
                    </div>
                </div>
            ) : null}
        </>

    );
}

export default Modal;