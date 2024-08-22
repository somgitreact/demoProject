//import React from 'react'
import CommonBanner from '../../component/CommonBanner'
import FeatureSection from '../../component/FeatureSection';
import CartItem from './templatePart/CartItem';
import Summery from './templatePart/Summery';
import SectionComp from '../../component/SectionComp'
import { useContext } from 'react';
//import { showCart, deleteCartApi } from '../../api/Apis';
//import { userContext } from '../../context/Auth'
import { userCartContext } from '../../context/CartContext';
import { Toaster } from 'react-hot-toast';

const Cart = () => {

  const{cartItems, deleteCart} =  useContext(userCartContext)

// const {currentuser} = useContext(userContext);
// const [cartItems, setCartItems] =  useState([]);

// useEffect( function(){
//    const fetchData = async ()=>{
//     try {
//       const crtdata = await showCart();
//       console.log("1111111111", crtdata);
// const filterCart = crtdata.filter( (item, index) => item.user == currentuser.email);

//       setCartItems(filterCart);
//     } catch (error) {
//       console.log(error.message);
//     }
//   } 
//   fetchData()
 
// },[])
// console.log("sdsdssd", cartItems);


// const deleteCart = (id)=>{
// deleteCartApi(id);
// console.log(id);
// }


const total = cartItems.reduce(((total, num)=> total + num.price * num.count ), 0 )


//console.log("toster data ........", cartItems);



  return (
    <>
     <Toaster position="top-center"/>
    <CommonBanner  pageName="Cart"/>
    <SectionComp>

<div className="flex gap-5 max-md:flex-col">

  <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">

    <div className="flex flex-col max-md:mt-8 max-md:max-w-full">

      <div className="flex justify-center items-center px-16 py-5 text-base font-medium text-black whitespace-nowrap bg-orange-50 max-md:px-5 max-md:max-w-full">

        <div className="flex gap-5 justify-between max-w-full w-[526px] max-md:flex-wrap">

          <div>Product</div>

          <div>Price</div>

          <div className="flex gap-5 justify-between">

            <div>Quantity</div>

            <div>Subtotal</div>

          </div>

        </div>

      </div>

     


      <div className="mt-14 max-md:mt-10 max-md:max-w-full">

        {
        cartItems.length == 0 ?
        "Continuing from where we left off:"
        :
        cartItems.map((item, index) => (

          <CartItem key={index} {...item} dltFunc={deleteCart}/>

        ))}

      </div>

    </div>
    </div>

<div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">

  <Summery subtotal={total}  total={total}   />

</div>

</div>

</SectionComp>
    

<FeatureSection/>

    
    </>
  )
}

export default Cart