import React from 'react'

function Card({img ,name, new_price, old_price}) {
  return (
    <div className='lg:w-64'>
        <div className="card-container h-48  flex gap-2 justify-center shadow-xl rounded-md  bg-[#f1f1f1] xs:bg-white xs:flex-col xs:gap-5 xs:h-80 xs:px-3 xs:pt-2 xs:pb-3 sm:h-80 lg:h-96 lg:w-full  ">
            <div className="img flex-1 flex justify-center xs:h-[50%] lg:basis-4/5">
                <img className='lg:w-fit max-h-full' src={img} alt="" />
            </div> 
            <div className="description flex-1 flex flex-col gap-2 justify-around">
                <h2 className="product-name text-[1.05rem] leading-tight sm:text-[0.9rem]">{name}</h2>
                <div className="prices flex gap-8 text-base font-medium">
                    <div className="new-price"> <span className='font-normal text-lg mr-0.5'>$</span>{new_price}</div>
                    <div className="old-price line-through"><span className='font-normal text-lg mr-0.5'>$</span>{old_price}</div>
                </div>
                <button className='add-to-cart bg-black text-lg  text-white py-1 px-5 rounded-lg xs:self-start xs:rounded-3xl xs:text-base xs:px-2.5'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Card