
import ContactInfo from './templatepart/ContactInfo';
import ContactForm from './templatepart/ContactForm';
import CommonBanner from '../../component/CommonBanner'
import SectionComp from '../../component/SectionComp'



const ContactUs = () => {

  const contactInfoData = [

    {

      icon: "/img/Vector.png",

      title: "Address",

      content: "236 5th SE Avenue, New York NY10000, United States"

    },

    {

      icon: "/img/bxs_phone.png",
      title: "Phone",

      content: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789"

    },

    {

      icon: "/img/bi_clock-fill.png",

      title: "Working Time",

      content: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00"

    }

  ];


  return (
<>
<CommonBanner  pageName="Contact Us"/>
    <SectionComp>

      <section className="flex flex-col items-center mt-8 w-full max-w-[1058px] max-md:max-w-full">

        <h1 className="text-4xl font-semibold text-black">

          Get In Touch With Us

        </h1>

        <p className="mt-7 text-base text-center text-neutral-400 w-[644px] max-md:max-w-full">

          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!

        </p>

        <div className="self-stretch mt-4 max-md:max-w-full">

          <div className="flex gap-5 max-md:flex-col">

            <aside className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">

              <div className="flex flex-col items-start px-12 pt-12 pb-20 mx-auto mt-16 w-full text-black bg-white max-md:px-5 max-md:mt-10">

                {contactInfoData.map((info, index) => (

                  <ContactInfo key={index} {...info}/>

                ))}

              </div>

            </aside>

            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">

             <ContactForm/>

            </div>

          </div>

        </div>

      </section>

    </SectionComp>
</>
  );

};


export default ContactUs;