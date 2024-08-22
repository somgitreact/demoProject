//import React from 'react'
import PropTypes from 'prop-types'
const CartItem = ({ image, name, price, count,  id, dltFunc }) => { 
const subtotal = price * count;
    return (
  
      <div className="flex gap-5 max-md:flex-col">
 
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
  
          <div className="flex grow gap-5 justify-between text-base text-neutral-400 max-md:mt-10">
  
            <img loading="lazy" src={image} alt={name} className="shrink-0 max-w-full aspect-[1.03] w-[108px]" />
  
            <div className="my-auto">{name}</div>
  
          </div>
  
        </div>
  
        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
  
          <div className="flex gap-5 self-stretch px-5 my-auto text-base text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
  
            <div className="flex-auto my-auto text-neutral-400">{price}</div>
  
            <div className="px-3.5 py-2.5 whitespace-nowrap rounded-md border border-solid border-neutral-400">
  
              {count}
  
            </div>
  
            <div className="flex-auto my-auto">{subtotal}</div>
  
  <button onClick={()=>dltFunc(id)} ><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d80f01b0cdb1210a1c0aac3f437db9c22d7bbbe5b14bb4e8efdde8828e5edb?apiKey=726938d2862b4defb03430bff0a5f2a6&" alt="Remove item" className="shrink-0 self-start w-7 aspect-square" />
</button>
  
          </div>
  
        </div>
  
      </div>
  
    );
  
  };
  CartItem.propTypes = {

    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    subtotal: PropTypes.string.isRequired,


  }
export default CartItem