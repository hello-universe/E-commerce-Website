import React from 'react'
import { useContext } from 'react';
import { CartContext } from "../Context/cartContext";

function EachCartProductLarge({myCartItems}) {
    const { dispatch } = useContext(CartContext);
    const handleIncrease = (prod) => {
      dispatch({ type: "ADD_TO_CART", product: prod });
    };
    const handleDecrease = (prod) => {
      dispatch({ type: "REMOVE_FROM_CART", product: prod });
    };
    const handleDelete = (prod) => {
      dispatch({ type: "DELETE", product: prod });
    };
  return (
    <table className='w-full'>
    <thead>
      <tr className='grid grid-cols-4 text-center px-5 text-[#919191] font-medium'>
        <td>PRODUCT</td>
        <td>PRICE</td>
        <td>QUANTITY</td>
        <td>TOTAL</td>
      </tr>
    </thead>
    <div className="line h-[0.3px] w-full my-5 bg-[#919191]"></div>
    <tbody>
      {
        myCartItems.map((ele)=>{
          return (
            <tr key={ele.key} className='grid grid-cols-4 justify-center items-center text-center mb-5 px-5 bg-[#f8f8f8]'>
              <td className='flex justify-center items-center gap-1'>
                <div className="img basis-[40%]">
                <img src={ele.image} alt="" />
                </div>
                <div className="name text-sm basis-[60%] xl:text-lg">{ele.name}</div>
              </td>
              <td className='xl:text-xl'>${ele.new_price}</td>  
              <td className='flex flex-col justify-center items-center gap-5'>
                
              <div className="add-or-remove flex justify-center">
        <span
          onClick={()=>handleDecrease(ele)} className="flex min-h-full justify-center items-center text-xl px-2 bg-[#f1f1f1] rounded-tl-[0.3rem] rounded-bl-[0.3rem] mr-1 border cursor-pointer"
        >
          {ele.quantity === 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          ) : (
            "-"
          )}
        </span>
        <span className="text-xl px-2 bg-[#f1f1f1] mr-1 border">
          {ele.quantity}
        </span>
        <span
          onClick={()=>handleIncrease(ele)} className="text-xl px-2 bg-[#f1f1f1] rounded-tr-[0.3rem] rounded-br-[0.3rem] mr-1 border cursor-pointer"
        >
          +
        </span>
      </div>
      <span onClick={()=>handleDelete(ele)} className="delete underline cursor-pointer">
        Delete
      </span>


              </td>  
              <td className='xl:text-xl'>${ele.new_price*ele.quantity}</td>  
            </tr>
          )
        })
      }
    </tbody>
  </table>
  )
}
 
export default EachCartProductLarge