//import React from 'react'
//import PropTypes from 'prop-types'
import Slider from './templatePart/Slider'
import CategorySec from './templatePart/CategorySec'
import ProductHome from './templatePart/ProductHome'
import InstaImage from './templatePart/InstaImage'
import Inspritation from './templatePart/Inspritation'


const Home = () => {
  return (
    <div>
      <Slider/>
      <CategorySec />
<ProductHome/>

<Inspritation/>
<InstaImage/>

    </div>
  )
}

//Home.propTypes = {}

export default Home