import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../Context/cartContext'
import EachCartProduct from '../Components/EachCartProduct'
import EachCartProductLarge from '../Components/EachCartProductLarge';

function Cart() {
  const {state} = useContext(CartContext);
  const myCartItems = state.cartItems;
  const subtotal = myCartItems.reduce((accumulator, prod)=>{
    return accumulator + prod.quantity * prod.new_price;
  }, 0)
  const shippingCharges = 0;
  const total = subtotal + shippingCharges;

  const [hasLargeScreen, setHasLargeScreen] = useState(true);
  const handleResize = () => {
    setHasLargeScreen(window.innerWidth >= 900);
  };
  useEffect(() => {
    //Run the handleResize() method on the initial render

    handleResize();

    //Adding event listner for resize

    window.addEventListener("resize", handleResize);
    return () => {
      //Cleanup function for the event listner

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='relative top-14 md2:top-28 md2:bg-[#f1f1f1] md2:px-8 md2:py-5 md2:rounded-2xl xl:w-[80%] mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>My Cart</h1>
     
      {
        hasLargeScreen ? <EachCartProductLarge myCartItems =   {myCartItems}/> :       <div className="cart-products flex flex-col gap-3">
        {
          myCartItems.map((ele)=>{
            return <EachCartProduct key={ele.id} prod={ele}/>
          })
        }
      </div>
      }


        {/* Payment Card */}

      <div className="payment-card w-full bg-[#f1f1f1] p-8 my-5 rounded-lg md2:bg-[#e6e6e6]">
         <div className="all-payments w-[300px] grid grid-cols-2 gap-x-16 gap-y-4 mb-5">
          <span className='text-[#666666] font-semibold'>SUBTOTAL</span>
          <span className='font-medium text-center'>${subtotal}</span> 
          <span className='text-[#666666] font-semibold'>SHIPPING</span>
          <span className='font-medium text-center'>${shippingCharges}</span>
          <span className='text-[#666666] font-semibold'>TOTAL</span>
          <span className='font-medium text-center'>${total}</span>
         </div>
        <button className="pay bg-black text-white font-medium px-5 py-2 rounded-lg">Proceed to Pay</button>
      </div>
    </div>
  )
}

export default Cart