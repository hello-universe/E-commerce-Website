import React from 'react'
import Card from './Card'
import all_product from './assets/all_product'

export default function Hero({category}) {
   const selectedCategoryProducts  = all_product.filter(((product)=>product.category === category))
  return (
    <div className='relative top-14 grid grid-cols-1 gap-6 justify-items-center pt-[1px] px-1 rounded-lg mx-auto xs:grid-cols-2 xs:p-5  sm:grid-cols-3 sm:w-auto md2:grid-cols-4 md2:top-28 xl:w-[85%] md2:gap-y-14  xs:bg-[#f1f1f1] xl:grid-cols-5'>
        {selectedCategoryProducts.map((element)=>{
            return <Card  key={element.id} img={element.image} name={element.name} new_price={element.new_price} old_price={element.old_price} />
        })}
    </div>
  )
}
