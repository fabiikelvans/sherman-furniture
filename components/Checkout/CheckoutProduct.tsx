import React from 'react';
import {useDispatch} from "react-redux";
import {addToBasket, removeAllFromBasket, removeFromBasket} from "../../redux/features/basketSlice";
import toast from "react-hot-toast";
import Image from "next/image";
import {urlFor} from "../../sanity";
import { IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5";
import { BiTrash} from "react-icons/bi";

// @ts-ignore
import Currency from 'react-currency-formatter';
import Link from "next/link";
import {TrashIcon} from "@heroicons/react/outline";
import {titan} from "../../pages";


interface Props {
    items: Product[];
    id: string;
}

function CheckoutProduct({ items, id } : Props) {

    const dispatch = useDispatch()

    const product = items[0];

    // Add Item to Basket
    const addItemToBasket = () => {
        dispatch(addToBasket(product));

        toast.success(`${product.title} added to basket`, {
            position: "bottom-center",
        })
    }

    // Remove Item from Basket
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));

        toast.error(`${items[0].title} removed from basket`, {
            position: "bottom-center",
        })
    }

    // Remove Items from Basket
    const removeAllItemsFromBasket = () => {
        dispatch(removeAllFromBasket({ id }));

        toast.error(`Items removed from basket`, {
            position: "bottom-center",
        })
    }

    return (
        <div className='my-6 bg-emerald-900 flex justify-between px-4 py-6 rounded-xl'>
            <div className="relative object-cover">
                <Image
                    src={urlFor(items[0].image[0]).url()}
                    width={100}
                    height={100}
                    alt={items[0].title}
                />
            </div>

            <div className='flex flex-col justify-between space-y-6'>
            <div className="modal__product-item text-lg font-bold cursor-pointer duration-300 hover:text-emerald-300">
                <Link href={`/product/${product.slug.current}`}
                >
                {items[0].title}
                </Link>
            </div>

            <div className="flex items-center space-x-2">
                <IoRemoveCircleOutline className='h-6 w-6 cursor-pointer duration-150 hover:text-orange-500'
                                 onClick={removeItemFromBasket}
                />
                <div className='q-no text-xl'>{items.length}</div>
                <IoAddCircleOutline className='h-6 w-6 cursor-pointer duration-150 hover:text-orange-500'
                                onClick={addItemToBasket}
                />
            </div>
            </div>

            <div className='flex flex-col justify-between items-center'>
                <div className="modal__product-remove">
                    {/*Remove Item from Basket*/}
                    <TrashIcon className='h-6 w-6 cursor-pointer duration-300 hover:text-red-400' onClick={removeAllItemsFromBasket}/>
                </div>


            <div className="text-md font-bold">
                <h4>
                    <Currency
                        quantity={items.reduce((total, item) => total + item.price, 0)}
                        currency="USD"
                    />
                </h4>
            </div>

            </div>
        </div>
    );
}

export default CheckoutProduct;