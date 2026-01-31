import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const productData = useContext(ProductDataContext);
    const {id} = useParams();  // useparams is used to retrive the id from the url used in app.jsx to navigate to differenet products 
    let product = '';
    if(productData.length > 0){
        product = productData.find((elem)=>elem.id == id);
    }
     // to get the selected data we use the productData to get the exact value present at that index
    //  (elem) => elem.id == id; this is checked the data  
    console.log(product);
  return (
    <div className="bg-black h-screen text-white">
      <h2>Product Details</h2>
      <div className="flex flex-col h-60 w-60 p-4 text-center ">
      <img src={product.image} className="h-50 w-50 object-cover " alt="" />
      <h3>{product.title}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
