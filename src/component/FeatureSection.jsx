import PropTypes from 'prop-types'
const FeatureItem = ({ icon, title, description }) => (

    <div className="flex gap-2.5">
  
      <img loading="lazy" src={icon} alt="" className="shrink-0 my-auto aspect-square w-[60px]" />
  
      <div className="flex flex-col">
  
        <div className="text-2xl font-semibold text-neutral-800">{title}</div>
  
        <div className="text-xl font-medium text-zinc-500">{description}</div>
  
      </div>
  
    </div>
  
  );
  
  
  const FeatureSection = () => {
  
    const features = [
  
      { icon: "/img/trophy 1.png", title: "High Quality", description: "crafted from top materials" },
  
      { icon: "/img/guarantee.png", title: "Warranty Protection", description: "Over 2 years" },
  
      { icon: "/img/shipping.png", title: "Free Shipping", description: "Order over 150 $" },
  
      { icon: "/img/customer-support.png", title: "24 / 7 Support", description: "Dedicated support" }
  
    ];
  
  
    return (
  
      <section className="flex flex-col justify-center px-14 py-20 mt-20 w-full bg-orange-50 leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
  
        <div className="flex gap-5 justify-between my-5 w-full max-md:flex-wrap max-md:max-w-full">
  
          {features.map((feature, index) => (
  
            <FeatureItem key={index} {...feature} />
  
          ))}
  
        </div>
  
      </section>
  
    );
  
  };
  
  FeatureItem.propTypes = {

    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

  }
  export default FeatureSection;