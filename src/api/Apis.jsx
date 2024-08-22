//import React from 'react'


export const productApi = async () => {
    try {
      const resdata = await fetch('http://localhost:3000/product');
      const response = await resdata.json();
      return response;
    } catch (error) {
      console.log("product error", error);
      throw new Error('Failed to fetch product data'); 
    }
  };
  

  export const blogApi = async () => {
    try {
      const resdata = await fetch('../../public/data/blogData.json');
      const response = await resdata.json();
      return response;
    } catch (error) {
      console.log("product error", error);
       
    }
  };


//   export const addCartApi = async ( id, color, image, price, name, count ) =>{

//     const formData = new FormData();
//     formData.append('ProductId', id);
//     formData.append('color', color);
//     formData.append('image', image);
//     formData.append('price', price);
//     formData.append('name', name);
//     formData.append('count', count);

// try {
   
//   const fectchCart = await fetch('http://localhost:3000/cart', {
//     method: 'POST',
//     body: formData,
//   })


// } catch (error) {
//   console.log("post data saved", error);
// }


//   }





export const addCartApi = async (usertocart, id, color, image, price, name, count) => {
  const cartItem = {
    user:usertocart,
    ProductId: id,
    color: color,
    image: image,
    price: price,
    name: name,
    count: count
  };

  try {
    const fetchCart = await fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItem)
    });

    if (!fetchCart.ok) {
      
      throw new Error(`HTTP error! status: ${fetchCart.status}`);
    }

    //const data = await fetchCart.json();
     // console.log("Data saved successfully:", data , '++++', cartItem);

  } catch (error) {
    console.log("Error saving data:", error);
  }
}


export async function  showCart(){

  try {
    const cartApi = await fetch('http://localhost:3000/cart');
 const cartData = await cartApi.json();
 return cartData


  } catch (error) {
     console.log(error);
  } 

}


export const deleteCartApi = async (idcrt)=>{

await fetch(`http://localhost:3000/cart/${idcrt}`,{
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },

})

}





export const registration = async (userData) => {
//  console.log("registration data", userData);

  
  try {
    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

 await response.json();
   // console.log("success user", successData);
  } catch (error) {
    console.log("Error during registration:", error);
  }
};


export const loginList = async ()=>{

  try {
   const userdata =  await fetch('http://localhost:3000/user');
    const userlist = await userdata.json();
    // console.log("log list api", userlist);
    return userlist;
    
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch product data'); 
  }

}

export async function reviewApi(proid, rate, review, user) {
 // console.log("userrrrrrrrrrrrr", user);
  
  try {
    const responseProduct = await fetch(`http://localhost:3000/product/${proid}`);
    
    if (!responseProduct.ok) {
      throw new Error(`Failed to fetch product with ID ${proid}`);
    }
    
    const productData = await responseProduct.json();
   // console.log(productData);

    await fetch(`http://localhost:3000/product/${proid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...productData,
        rating: productData.rating + rate, 
        review: [...productData.review, {reviewTxt: review, userRating:rate, user:user}] ,
      }),
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

export const allUser = async ()=>{
  try {
    const userApi = await fetch('http://localhost:3000/user');
 const userData = await userApi.json();

 
 return userData.length


  } catch (error) {
     console.log(error);
  } 

}