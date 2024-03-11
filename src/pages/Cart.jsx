import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from "../components/CartItem"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';




const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);
    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago(process.env.MERCADOPAGO_PUBLIC_KEY, {
        locale: 'es-AR',
    });

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3001/create_preference", {
                title: cart[0].title,
                quantity: 1,
                price: totalAmount.toFixed(2),
            })
            const { id } = response.data;
            return id;
        } catch (e) {
            console.log(e)
        };
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id)
        }
    };

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])

    return (
        <>
            {
                cart.length > 0 ?
                    (
                        <div className='flex flex-col lg:flex-row'>
                            <div>
                                {
                                    cart.map((item, index) => {
                                        return <CartItem key={item.id} item={item} itemindex={index} />
                                    })
                                }
                            </div>
                            <div className='p-10  flex flex-col justify-between h-[30rem] lg:w-[30rem] gap-3 
                                    shadow-[5px_5px_rgba(74,135,_206,_0.4),_10px_10px_rgba(74,135,_206,_0.3),_15px_15px_rgba(74,135,_206,_0.2),_20px_20px_rgba(74,135,_206,_0.1),_25px_25px_rgba(74,135,_206,_0.05)]
                                    lg:fixed lg:right-[4rem] top-[10rem] sm:w-full  '>
                                <div>
                                    <div className='uppercase text-sky-600 font-bold text-xl'>Your Cart</div>
                                    <div className='uppercase text-sky-600 font-extrabold text-[2.8rem]'>Summary</div>
                                    <p className='font-bold text-gray-800'>
                                        <span>Total Items : {cart.length}</span>
                                    </p>
                                </div>

                                <div>
                                    <p className='text-gray-700 font-semibold'>Total Amount :
                                        <span className='text-black font-bold'>${totalAmount.toFixed(2)}</span>  </p>
                                    <button
                                        className='w-full border border-zinc-200 bg-sky-600 text-white 
                                p-5 rounded-md hover:bg-sky-600 transition duration-700 hover:text-white text-xl mt-2 cart'
                                        onClick={handleBuy}
                                    >
                                        Checkout Now
                                    </button>
                                    {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}

                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <div className='flex flex-col justify-center items-center h-[30rem] relative gap-5 '>
                            <h1 className='font-bold'>Cart <span className="text-red-600">Empty</span></h1>
                            <Link to={"/home"}>
                                <button className='border border-zinc-200 bg-sky-700 text-white p-5 rounded-md hover:bg-sky-600 transition duration-700 hover:text-white'>
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    )
            }
        </>
    )
}

export default Cart