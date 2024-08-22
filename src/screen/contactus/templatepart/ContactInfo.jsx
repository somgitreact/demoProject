
import PropTypes from 'prop-types'







const ContactInfo = ({ icon, title, content }) => (

  <div className="flex gap-5 justify-between items-start mt-12 max-md:mt-10">

    <img loading="lazy" src={icon} className="shrink-0 aspect-square w-[30px]" alt="" />

    <div className="flex flex-col">

      <div className="text-2xl font-medium">{title}</div>

      <div className="mt-2.5 text-base">{content}</div>

    </div>

  </div>

);

ContactInfo.propTypes = {
    icon: PropTypes.string.isRequired, 
    title:PropTypes.string.isRequired, 
    content: PropTypes.string.isRequired
}
export default ContactInfo;