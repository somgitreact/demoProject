//import React from 'react'
import PropTypes from 'prop-types'

const CatBox = ({catdtl}) => {
  return (
    <figure className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">

    <div className="flex flex-col grow text-2xl font-semibold text-center whitespace-nowrap text-zinc-800 max-md:mt-5">

      <img loading="lazy" src={catdtl.img} alt="Dining room furniture" className="w-full aspect-[0.79]" />

      <figcaption className="self-center mt-9">{catdtl.catTitle}</figcaption>

    </div>

  </figure>
  )
}

CatBox.propTypes = {
    catdtl: PropTypes.object.isRequired
}

export default CatBox