//import React from "react";
import PropTypes from 'prop-types'

function TextArea({ label, name,  keypress  }) {

  return (

    <div className="flex flex-col mt-2 text-base max-md:mt-10 max-md:max-w-full">

      <label htmlFor={label.toLowerCase().replace(/\s+/g, '-')} className="font-medium text-black mb-4">

        {label}

      </label>

      <textarea
    name={name}
    onChange={keypress}
        id={label.toLowerCase().replace(/\s+/g, '-')}

        className="px-7 py-8 bg-white rounded-lg border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"

      />

    </div>

  );

}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  keypress: PropTypes.func
}

export default TextArea;