//import React from 'react'
import PropTypes from 'prop-types'

function SectionComp({children}) {
  return (
    <section className='lg:w-[1250px] mx-auto py-10'>
        {children}
    </section>
  )
}

SectionComp.propTypes = {
    children : PropTypes.node.isRequired,
}

export default SectionComp
