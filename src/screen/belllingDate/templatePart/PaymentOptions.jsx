//import React from "react";


function PaymentOptions() {

  const options = [

    { id: "bank-transfer", label: "Direct Bank Transfer", checked: true },

    { id: "check-payment", label: "Check Payment", checked: false },

    { id: "cash-on-delivery", label: "Cash On Delivery", checked: false },

  ];


  return (

    <div>

      <hr className="shrink-0 mt-10 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />

      {options.map((option) => (

        <div key={option.id} className="flex gap-4 self-start mt-7 text-base">

          <input

            type="radio"

            id={option.id}

            name="payment-option"

            className="shrink-0 w-3.5 h-3.5 rounded-full"

            defaultChecked={option.checked}

          />

          <label htmlFor={option.id} className={option.checked ? "text-black" : "text-neutral-400 font-medium"}>

            {option.label}

          </label>

        </div>

      ))}

      <p className="mt-6 text-base font-light text-justify text-neutral-400 max-md:max-w-full">

        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.

      </p>

    </div>

  );

}


export default PaymentOptions;