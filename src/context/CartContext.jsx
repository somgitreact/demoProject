//import React from 'react'

import { createContext, useContext, useEffect, useState } from "react"
import { addCartApi, deleteCartApi, showCart } from "../api/Apis";
import { userContext } from "./Auth";
import toast from "react-hot-toast";




export const userCartContext = createContext();


const CartContext = ({children}) => {

 const {currentuser} = useContext(userContext)
const notifyAddCart = ()=> toast(" Product Added To Cart");
const notifyDeleteCart = ()=> toast(" Product Deleted Form Cart");
    const [cartItems, setCartItems] =  useState([]);
    const [num, setNum] = useState(0);
//console.log("kkkkkkkkkkkkkkk", num);

const cartHandler = async ( proId, proCol, proImg, proPrice, proNam, proCont)=>{

    if(!currentuser.name){
    
      window.location.href= "/login"
    
    } else {
    
      const existItem = cartItems.find((item)=> item.ProductId == proId )
     // console.log("repet data log", existItem);
      
    if (existItem){

//console.log("increse number", existItem.id);

try {
  await fetch(`http://localhost:3000/cart/${existItem.id}`, {
  method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...existItem, count: existItem.count + 1 })
})

} catch (error) {

  console.error("Error updating item:", error);
}




    } else {
     // console.log("add normal");
      addCartApi(
        currentuser.email,
        proId, 
        proCol, 
        proImg, 
        proPrice, 
        proNam, 
        proCont  
      )
      setNum((prevNum) => prevNum + 1);
      notifyAddCart();
    }


      
      
    }



    }

   



    const deleteCart = (id)=>{
      deleteCartApi(id);
      //console.log(id);
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
   setNum((prevNum) => prevNum - 1);
   notifyDeleteCart()
      }

    // const deleteCart = useCallback((id) => {
    //   deleteCartApi(id);
    //   // setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    //   // setNum((prevNum) => prevNum - 1);
    // }, []);


    useEffect( function(){
       const fetchData = async ()=>{
        try {
          const crtdata = await showCart();
         // console.log("1111111111", crtdata);
    const filterCart = crtdata.filter( (item) => item.user == currentuser.email); //
    
          setCartItems(filterCart);
          setNum(filterCart.length);
        } catch (error) {
          console.log(error.message);
        }
      } 
      fetchData()
     
    },[currentuser.email ])// deleteCart, cartHandler
    //console.log("sdsdssd", cartItems);
    
    
   
    



  return (
   <userCartContext.Provider value={{cartItems, num, deleteCart, cartHandler}}>
    {children}
   </userCartContext.Provider>
  )
}

export default CartContext