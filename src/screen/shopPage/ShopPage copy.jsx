

import { useEffect, useState } from 'react';
import { productApi } from '../../api/Apis';
import ProductBoxComp from '../../component/ProductBoxComp';
import CommonBanner from '../../component/CommonBanner'
import SectionComp from '../../component/SectionComp'
import CatItem from './templatepart/CatItem';


const ShopPage = () => {
    const [data, setData] = useState([]);
    const [tagItem, setTagItem] = useState([]);
    const [ filterItem, setFilterItem] = useState([]);
    const [arrtochk, setArrtochk] = useState([]);

    useEffect(  function(){
     const fetchProducts = async () => {
       try {
         const prodata = await productApi();
         console.log(prodata);
         setData(prodata);
         setTagItem(prodata)
       } catch (error) {
         console.log(error.message);
       }
     };
   
     fetchProducts();
 
   },[filterItem]);

const allRelItem = tagItem.map((item)=> item.relation );

var myNewArray = allRelItem.reduce(function(prev, curr) {
  return prev.concat(curr);
},[]);

const reletedItem = [ ...new Set(myNewArray)]





const filterHandle = (relItem, remove)=> {

  

 


  
  // var updateCheck;
  // setArrtochk( (state)=>{
  //   if( relItem !== undefined){
      
      
  //     updateCheck =  [...state, relItem]
    
  //   } else {
  //     const removeItem = state.filter((item)=> item !== remove)
  //     updateCheck = removeItem
   
  //   }
  //    return updateCheck
  // })


  if (relItem !== undefined) {
    // Adding the item to the array
    setArrtochk((prevArr) => [...prevArr, relItem]);
  } else {
    // Removing the item from the array
    setArrtochk((prevArr) => prevArr.filter((item) => item !== remove));
  }
  



  
//  if( relItem !== undefined){
//   // console.log("show checked value", relItem , "-----" , remove) ;
//   setArrtochk([...arrtochk, relItem]);
//  } else {
//   const removeItem = arrtochk.filter((item)=> item !== remove)
//   setArrtochk(removeItem)
// //console.log(arrtochk.indexOf(remove));

//  }
 

  
  console.log("arrItm arrItm arrItm", arrtochk);
  
  //const showItem = data.filter((item)=> item.relation.includes(relItem))
  const showItem = data.filter((item)=> item.relation.some((elem)=> arrtochk.includes(elem) ))
  //arrItm.some(((element)=> ))
  console.log(showItem);
  setFilterItem(showItem)
}



  return (
    <>
     <CommonBanner  pageName="Shop Page"/>
     <div className=' bg-[#F9F1E7]'>
     <SectionComp></SectionComp>
     </div>
    <SectionComp>
      <div className=" grid grid-cols-4 ">
      <div className=' border-2 border-double border-yellow-700 mr-3 p-5 flex flex-col'> {reletedItem.map((item, index)=> <CatItem func={filterHandle} cname={item} key={index} /> )} </div>
      {/* <span onClick={()=> filterHandle(item)} className=" p-3" key={index} id={index}>{item}</span> */}
    <div className='flex row flex-wrap gap-6 justify-between col-span-3'>  { (filterItem.length == 0 ? data : filterItem).map((prodata, index)=> <ProductBoxComp key={index} fulldata={prodata}/> )}</div>
</div>
    </SectionComp>
    </>
  )
}

export default ShopPage