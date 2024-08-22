//import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


const BlogBox = ({dataprop}) => {
  return (
    <article>
       <img src={dataprop.img} alt={dataprop.alt}  className=' w-full flex' />
       <div className='flex py-4 '>
        <span className=' flex text-[#9F9F9F] text-base pr-3'><img className='pr-2' src="img/dashicons_admin-users.png"/> {dataprop.author} </span>
        <span className=' flex text-[#9F9F9F] text-base pr-3'><img className='pr-2' src="img/tag.png"/> {dataprop.date}</span>
        <span className=' flex text-[#9F9F9F] text-base pr-3'><img className='pr-2' src="img/uis_calender.png"/> {dataprop.tag} </span>
        </div> 
<header><h2 className=' text-black text-3xl font-medium'>{dataprop.heading}</h2></header>
<p className=' text-[#9F9F9F] text-base py-4'>
{dataprop.content}</p>
{/* <Link to="/blog">Read More</Link> */}
    </article>
  )
}

BlogBox.propTypes = {
    dataprop: PropTypes.shape({
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired
};

export default BlogBox