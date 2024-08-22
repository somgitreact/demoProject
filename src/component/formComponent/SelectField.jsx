//import React from "react";
import PropTypes from 'prop-types'

function SelectField({ label, options }) {

  return (

    <div className="flex flex-col mb-4 max-md:mb-10 text-base font-medium text-black max-md:max-w-full">

      <label htmlFor={label.toLowerCase().replace(/\s+/g, '-')}>{label}</label>

      <div className="flex gap-5 justify-between px-2 py-2 mt-6 text-base bg-white rounded-lg border border-solid border-neutral-400 text-neutral-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">

        <select

          id={label.toLowerCase().replace(/\s+/g, '-')}

          className="flex-grow bg-transparent appearance-none"

        >

          {options.map((option, index) => (

            <option key={index} value={option}>

              {option}

            </option>

          ))}

        </select>

        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f1ac5ba21e65fda52836aee9325e8795969b7f85c738d0e19b9a31c7e2387db?apiKey=726938d2862b4defb03430bff0a5f2a6&&apiKey=726938d2862b4defb03430bff0a5f2a6" className="shrink-0 w-5 aspect-square" alt="" />

      </div>

    </div>

  );

}

SelectField.propTypes = {
  label: PropTypes.string.isRequired, 
  options:PropTypes.array.isRequired
}

export default SelectField;