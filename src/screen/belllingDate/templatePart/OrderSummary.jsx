//import React from "react";


function OrderSummary() {

  return (

    <div className="mt-4 max-md:max-w-full">

      <div className="flex gap-5 max-md:flex-col">

        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">

          <div className="flex flex-col text-base font-medium text-black max-md:mt-10">

            <h2 className="text-2xl">Product</h2>

            <div className="flex gap-3 mt-8 text-xs">

              <div className="grow text-base text-neutral-400">Asgaard sofa</div>

              <div>X</div>

              <div>1</div>

            </div>

            <div className="mt-8">Subtotal</div>

            <div className="mt-9">Total</div>

          </div>

        </div>

        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">

          <div className="flex flex-col grow max-md:mt-10">

            <div className="flex flex-col items-start pl-16 text-base font-light text-black max-md:pl-5">

              <h2 className="text-2xl font-medium">Subtotal</h2>

              <div className="mt-8">Rs. 250,000.00</div>

              <div className="mt-8">Rs. 250,000.00</div>

            </div>

            <div className="mt-7 text-2xl font-bold text-yellow-600">Rs. 250,000.00</div>

          </div>

        </div>

      </div>

    </div>

  );

}


export default OrderSummary;