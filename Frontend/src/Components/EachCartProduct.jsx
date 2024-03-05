import React, { useContext, useState } from "react";
import { CartContext } from "../Context/cartContext";

function EachCartProduct({ prod }) {
  const { state, dispatch } = useContext(CartContext);
  const handleIncrease = () => {
    dispatch({ type: "ADD_TO_CART", product: prod });
  };
  const handleDecrease = () => {
    dispatch({ type: "REMOVE_FROM_CART", product: prod });
  };
  const handleDelete = () => {
    dispatch({ type: "DELETE", product: prod });
  };

  return (
    
  <div className="each-product">
    <div className="small-screen min-w-full h-48 flex justify-center">
      <div className="img flex-1 flex justify-center">
        <img className="max-w-full h-auto" src={prod.image} alt="" />
      </div>
      <div className="description flex-1 flex flex-col justify-between px-2">
        <h2 className="product-name text-base font-medium">{prod.name}</h2>
        <div className="new-price text-lg">
          {" "}
          <span className="font-normal text-lg mr-0.5">$</span>
          {prod.new_price}
        </div>
        <div className="quantity-and-delete flex justify-between items-end">
          <div className="add-or-remove flex ">
            <span
              onClick={handleDecrease}
              className="flex min-h-full justify-center items-center text-xl px-2 bg-[#f1f1f1] rounded-tl-[0.3rem] rounded-bl-[0.3rem] mr-1 border cursor-pointer"
            >
              {prod.quantity === 1 ? (
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
              {prod.quantity}
            </span>
            <span
              onClick={handleIncrease}
              className="text-xl px-2 bg-[#f1f1f1] rounded-tr-[0.3rem] rounded-br-[0.3rem] mr-1 border cursor-pointer"
            >
              +
            </span>
          </div>
          <span onClick={handleDelete} className="delete underline cursor-pointer">
            Delete
          </span>
        </div>
      </div>
    </div>

    {/* Card for large screen */}

    {/* <div className="large-screen hidden sm:flex justify-around gap-5">
        <div className="image-and-name flex gap-1 basis-[35%]">
            <div className="img">
                <img src={prod.image} alt="" />
            </div>
            <div className="name">{prod.name}</div>
        </div>
        <div className="price basis-[15%]">
            ${prod.new_price}
        </div>
        <div className="quantity-and-delete flex flex-col gap-2 basis-[35%]">
        <div className="add-or-remove flex ">
            <span
              onClick={handleDecrease}
              className="flex min-h-full justify-center items-center text-xl px-2 bg-[#f1f1f1] rounded-tl-[0.3rem] rounded-bl-[0.3rem] mr-1 border"
            >
              {prod.quantity === 1 ? (
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
              {prod.quantity}
            </span>
            <span
              onClick={handleIncrease}
              className="text-xl px-2 bg-[#f1f1f1] rounded-tr-[0.3rem] rounded-br-[0.3rem] mr-1 border"
            >
              +
            </span>
          </div>
          <span onClick={handleDelete} className="delete underline">
            Delete
          </span>
        </div>
        <div className="total-for-each basis-[15%]">${prod.quantity * prod.new_price}</div>
    </div> */}
    </div>
  );
}

export default EachCartProduct;
