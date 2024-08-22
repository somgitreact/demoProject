//import React from 'react'
import FormInput from '../../component/formComponent/FormInput'
import SelectField from '../../component/formComponent/SelectField'
import TextArea from '../../component/formComponent/TextArea'
import OrderSummary from './templatePart/OrderSummary'
import PaymentOptions from './templatePart/PaymentOptions'
import CommonBanner from '../../component/CommonBanner'
import SectionComp from '../../component/SectionComp'

const BellingDetails = () => {
  return (
    <>
    <CommonBanner  pageName="Belling Details"/>
    <SectionComp>

    <div className="flex gap-5 max-md:flex-col">

      <section className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">

        <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">

          <h1 className="text-4xl font-semibold text-black">Billing details</h1>

          <div className="flex gap-5 max-md:flex-col">

            <FormInput  type="text" label="First Name" />

            <FormInput  type="text" label="Last Name" />

          </div>

          <FormInput  type="text" label="Company Name (Optional)" />

          <SelectField label="Country / Region" options={["Sri Lanka"]} />

          <FormInput  type="text" label="Street address" />

          <FormInput  type="text" label="Town / City" />

          <SelectField label="Province" options={["Western Province"]} />

          <FormInput  type="text" label="ZIP code" />

          <FormInput  type="text" label="Phone" />

          <FormInput  type="text" label="Email address" />

          <TextArea label="Additional information" />

        </div>

      </section>

      <section className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">

        <div className="flex flex-col px-10 py-20 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">

          <OrderSummary />
          

          <PaymentOptions />

          <p className="mt-8 text-base font-light text-justify text-black max-md:max-w-full">

            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}

            <span className="font-semibold">privacy policy.</span>

          </p>

          <button className="self-center px-16 py-6 mt-10 max-w-full text-xl text-black rounded-2xl border border-black border-solid w-[318px] max-md:px-5 max-md:mt-10">

            Place order

          </button>

        </div>

      </section>

    </div>

  </SectionComp>
  </>
  )
}

export default BellingDetails