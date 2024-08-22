
import PropTypes from 'prop-types'








const FormInput = ({ label, type, placeholder, val, keypress, name }) => (

  <div className="mb-4 max-md:mb-10">

    <label className="block mb-2 font-medium" htmlFor={label.toLowerCase().replace(' ', '-')}>

      {label}

    </label>

    <input
    name={name}
onChange={keypress}
      type={type}

      id={label.toLowerCase().replace(' ', '-')}

      className="w-full p-2 bg-white rounded-lg border border-solid border-neutral-400 text-neutral-400 max-md:px-5"

      placeholder={placeholder}
value={val}
    />

  </div>

);
FormInput.propTypes = {
    label: PropTypes.string.isRequired, 
    type:PropTypes.string.isRequired, 
    placeholder: PropTypes.string.isRequired,
    val:PropTypes.string.isRequired, 
    keypress:PropTypes.func.isRequired,
    name:PropTypes.string.isRequired
}

export default FormInput;

