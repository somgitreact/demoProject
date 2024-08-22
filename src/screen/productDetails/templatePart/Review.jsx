import  { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import StarComp from '../../../component/StarComp'
import TextArea from "../../../component/formComponent/TextArea"
import { reviewApi } from '../../../api/Apis'
import { useParams } from 'react-router-dom'
import { userContext } from '../../../context/Auth'
const Review = ({reviewData}) => {
  const {currentuser} = useContext(userContext);
  const {proid} = useParams();
  const [showReview, setShowReview] = useState([])
    const[getRate, setGetRate] = useState(0);
    const[text, setText] = useState();
    
    



useEffect( function(){
  setShowReview( reviewData);
},[]);

const showReviewData = showReview || [];
const ifComented = showReviewData?.find((item)=> item.user == currentuser.name);
    console.log(ifComented)

    const getRating = (rate)=> {
        console.log(rate);
        
        setGetRate(rate)
    }

    const reviewHandler = ()=>{
        reviewApi(proid, getRate,text, currentuser.name )
    }
const textHandler = (e)=>{
  const{value}= e.target;
  
  setText(value);
  console.log(text);
  
}


  return (

    <>
<div className='reviewBox'>
{ showReview && showReview?.map((revw, index)=> {
 return( <div key={index} className='  p-3'>
  {revw.reviewTxt}
   <StarComp getratefun={getRating} ratedNum={revw.userRating} />
  {revw.user}
  </div>)
})}
</div>

{


ifComented?.user != currentuser.name  &&
    <div>
   <div className='flex'> Please Rate Your Product : -- {getRate} --  <StarComp getratefun={getRating} /></div>
   <div > <TextArea keypress={textHandler} name="review" label='Please Wtite About Your Product : ' /> <button onClick={reviewHandler}>Save</button></div>
    </div>
    }
    </>
  )
}

Review.propTypes = {
  reviewData: PropTypes.array
}

export default Review