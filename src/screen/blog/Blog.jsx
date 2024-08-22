//import React from 'react'
import { useState } from 'react'
import CommonBanner from '../../component/CommonBanner'
import FeatureSection from '../../component/FeatureSection'
import SectionComp from '../../component/SectionComp'
import BlogBox from './templatePart/BlogBox'
import { useEffect } from 'react'
import { blogApi } from '../../api/Apis'
const Blog = () => {
const [blogData, setBlogData] = useState([]);

 useEffect( function(){

async function blog(){
    try{
    const data= await blogApi();
    setBlogData(data);   
    } catch(error){
console.log('blog Error', error);
    }
 
}

blog();


 },[])
    
    


  return (
    <>
    <CommonBanner pageName="Blog"/>
    <SectionComp>
        <div className=' w-full flex justify-between'>
<div className=' w-[820px] '>
{
    blogData.map((data, index)=> <BlogBox dataprop={data} key={index} />)
}
</div>
<div className=' w-[393px] '>
<div>
    <input type='text' />
    <button></button>
</div>
<div className='catbox py-4'>
    <h2 className='text-black text-2xl py-2'>Categories</h2>
    <ul>
        <li className='text-[#9F9F9F] py-2 text-base flex justify-between'><span>Crafts</span>  <span>2</span></li>
        <li className='text-[#9F9F9F] py-2 text-base flex justify-between'><span>Crafts</span>  <span>2</span></li>
        <li className='text-[#9F9F9F] py-2 text-base flex justify-between'><span>Crafts</span>  <span>2</span></li>
        <li className='text-[#9F9F9F] py-2 text-base flex justify-between'><span>Crafts</span>  <span>2</span></li>

    </ul>
</div>

<div className='recentPost'>
    <h2  className='text-black text-2xl py-2'>Recent Post</h2>
    <ul className=''>
        <li className='flex py-2 justify-between'><img src='img/recent.png' alt='recent' className=' rounded-md' />  <span className=' w-2/5 text-black text-sm'>Going all-in with millennial design <span className=' block text-[#9F9F9F] text-xs'>03 Aug 2022</span></span></li>
        <li className='flex py-2 justify-between'><img src='img/recent.png' alt='recent' className=' rounded-md' />  <span className=' w-2/5 text-black text-sm'>Going all-in with millennial design <span className=' text-[#9F9F9F] text-xs'>03 Aug 2022</span></span></li>
        <li className='flex py-2 justify-between'><img src='img/recent.png' alt='recent' className=' rounded-md' />  <span className=' w-2/5 text-black text-sm'>Going all-in with millennial design <span className=' text-[#9F9F9F] text-xs'>03 Aug 2022</span></span></li>

    </ul>
</div>

</div>
</div>
</SectionComp>
<FeatureSection/>
        
    </>
  )
}

export default Blog