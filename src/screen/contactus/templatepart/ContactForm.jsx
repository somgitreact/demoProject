import FormInput from "../../../component/formComponent/FormInput";






const ContactForm = () => (

  <form className="flex flex-col grow px-14 py-20 w-full text-base text-black bg-white max-md:px-5 max-md:mt-8 max-md:max-w-full">

    <FormInput label="Your name" type="text" placeholder="Abc" />

    <FormInput label="Email address" type="email" placeholder="Abc@def.com" />

    <FormInput label="Subject" type="text" placeholder="This is an optional" />

    

    <div className="mb-11 max-md:mb-10">

      <label className="block mb-2 font-medium" htmlFor="message">

        Message

      </label>

      <textarea

        id="message"

        className="w-full p-8 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5"

        placeholder="Hi! i'd like to ask about"

        rows="4"

      ></textarea>

    </div>

    

    <button type="submit" className="px-16 py-6 mt-12 max-w-full text-white whitespace-nowrap bg-yellow-600 rounded-md border border-yellow-600 border-solid w-[237px] max-md:px-5 max-md:mt-10">

      Submit

    </button>

  </form>

);


export default ContactForm;