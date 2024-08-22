import PropTypes from 'prop-types';
import { useState } from 'react';

const CatItem = ({ cname, func }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    func(checked ? undefined : cname, cname);
  };


  return (
    <div className='cursor-pointer mb-1 font-semibold text-base '>
      <input 
        id={cname} 
        type="checkbox" 
        checked={checked}
        onChange={handleChange} 
      /> 
      <label className=' pl-2' htmlFor={cname}>{cname}</label>
    </div>
  );
};

CatItem.propTypes = {
  cname: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default CatItem;
