import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom';

const Product = () => {
   const productData =   useContext(ProductDataContext);
   let renderData = '';
   if(productData.length > 0){
    renderData = productData.map(function(elem,idx){
           return <Link className=' inline-block m-3' key= {idx} to={`/product/${elem.id}`}>
            <div className='flex justify-between items-center flex-col w-60 text-center h-65 rounded-xl overflow-hidden bg-white'>

              <img src={elem.image} className='h-40 w-40  mt-2 ' alt="" />
                <h1 className=' text-sm mb-3 text-amber-500'> {elem.title}</h1>
            </div>
           </Link>
        })
   }
  return (
    <div className='text-2xl bg-black h-full w-full text-white  '>
        {renderData}
      </div>
  )
}

export default Product