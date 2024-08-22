//import React from 'react'
import ProductBoxComp from '../../../component/ProductBoxComp'
import SectionComp from '../../../component/SectionComp'
import {productApi} from '../../../api/Apis'
import { useEffect, useState } from 'react';
const ProductHome = () => {
console.log(productApi);
 const [data, setData] = useState([]);
 
 useEffect(  function(){
  const fetchProducts = async () => {
    try {
      const prodata = await productApi();
      console.log(prodata);
      setData(prodata);
    } catch (error) {
      console.log(error.message);
    }
  };

  fetchProducts();

},[])
  return (
    <SectionComp>
      <h2 className="mt-16 text-3xl font-bold text-zinc-800 max-md:mt-10 text-center">Our Product</h2>
    <div className='flex row flex-wrap gap-6 justify-between'>  { data.map((prodata, index)=> <ProductBoxComp key={index} fulldata={prodata}/> )}</div>
    
    </SectionComp>
  )
}

export default ProductHome