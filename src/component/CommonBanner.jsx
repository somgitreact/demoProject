
import PropTypes from 'prop-types'







const CommonBanner = ({pageName}) => {

    return (
  
      <section className="flex overflow-hidden relative z-10 flex-col justify-center items-center px-16 py-20 -mt-1.5 w-full text-black whitespace-nowrap  min-h-[328px] max-md:px-5 max-md:max-w-full">
  
        <img loading="lazy" src="/img/commBan.png" alt="" className="blur-[2px] object-cover absolute inset-0 size-full" />
  
        <div className="flex relative flex-col mb-1 max-w-full ">
  
  
          <h1 className="text-5xl font-medium max-md:text-4xl">{pageName}</h1>
  
          <div className="flex gap-1.5 items-center mt-6 text-base">
  
            <div className=" self-stretch my-auto font-medium">Home </div>
    
            <div className="self-stretch my-auto font-light">  {pageName}</div>
  
          </div>
  
        </div>
  
      </section>
  
    );
  
  };
  
  CommonBanner.propTypes = {
    pageName: PropTypes.string.isRequired
  }
  export default CommonBanner;