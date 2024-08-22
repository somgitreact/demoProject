
import PropTypes from 'prop-types'

const ProductCount = ({funcHandler, count}) => {
  return (
    <div className="flex gap-5 justify-between items-center px-4 py-4 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400">

              <button onClick={()=> funcHandler("-")} className="self-stretch my-auto" aria-label="Decrease quantity">-</button>

              <span className="self-stretch font-medium">{count}</span>

              <button onClick={()=> funcHandler("+")}  className="self-stretch my-auto" aria-label="Increase quantity">+</button>

            </div>
  )
}

ProductCount.propTypes = {
    funcHandler: PropTypes.func.isRequired,
     count: PropTypes.number.isRequired
}

export default ProductCount