import  { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StarComp = ({getratefun, ratedNum}) => {
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(0);
  const [fixedRating, setFixedRating] = useState(false);

  const imgstr = ["../img/strempty.svg", "../img/strfilled.svg"];

useEffect( function(){
  if(ratedNum){
setFixedRating(true);setRating(ratedNum-1);
}
},[])

  const handleMouseEvent = (index, event) => {
    switch (event.type) {
      case 'mouseenter':
        if (!fixedRating) setHover(index);
       // console.log(index);
        break;
      case 'mouseleave':
        if (!fixedRating) setHover(null);
        break;
      case 'click':
        if (!fixedRating) setRating(index); setFixedRating(true);  getratefun(index + 1);
        
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <button
          key={index}
          onClick={(e) => handleMouseEvent(index, e)}
          onMouseEnter={(e) => handleMouseEvent(index, e)}
          onMouseLeave={(e) => handleMouseEvent(index, e)}
        >
          <img 
            src={ (ratedNum ? rating < index : !fixedRating ?  hover < index : rating < index) ? imgstr[0] : imgstr[1]  } 
            alt="star" 
          />
        </button>
      ))}
    </div>
  );
};

StarComp.propTypes = {
  // Add prop types if needed
  getratefun: PropTypes.func,
  ratedNum: PropTypes.number
};

export default StarComp;
