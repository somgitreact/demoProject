import { useEffect, useState } from 'react';
import { productApi } from '../../api/Apis';
import ProductBoxComp from '../../component/ProductBoxComp';
import CommonBanner from '../../component/CommonBanner';
import SectionComp from '../../component/SectionComp';
import CatItem from './templatepart/CatItem';

const ShopPage = () => {
  const [data, setData] = useState([]);
  const [tagItem, setTagItem] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const [arrtochk, setArrtochk] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prodata = await productApi();
        console.log(prodata);
        setData(prodata);
        setTagItem(prodata);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const allRelItem = tagItem.map(item => item.relation);
  const myNewArray = allRelItem.reduce((prev, curr) => prev.concat(curr), []);
  const reletedItem = [...new Set(myNewArray)];










  const filterHandle = (relItem, remove) => {
    console.log("show checked value", relItem, "-----", remove, arrtochk);


    
    setArrtochk(prevArrtochk => {
      let updatedArrtochk;
      if (relItem !== undefined) {
        updatedArrtochk = [...prevArrtochk, relItem];
      } else {
        updatedArrtochk = prevArrtochk.filter(item => item !== remove);
      }

      console.log("Updated arrtochk", updatedArrtochk);

      const showItem = data.filter(item =>
        item.relation.some(elem => updatedArrtochk.includes(elem))
      );
      console.log("Filtered items:", showItem);

      setFilterItem(showItem);

      return updatedArrtochk;
    });



  };



















  return (
    <>
      <CommonBanner pageName="Shop Page" />
      <div className='bg-[#F9F1E7]'>
        <SectionComp></SectionComp>
      </div>
      <SectionComp>
        <div className="grid grid-cols-4">
          <div className='border-2 border-double border-yellow-700 mr-3 p-5 flex flex-col'>
            {reletedItem.map((item, index) => (
              <CatItem func={filterHandle} cname={item} key={index} />
            ))}
          </div>
          <div className='flex row flex-wrap gap-6 justify-between col-span-3'>
            {(filterItem.length === 0 ? data : filterItem).map((prodata, index) => (
              <ProductBoxComp key={index} fulldata={prodata} />
            ))}
          </div>
        </div>
      </SectionComp>
    </>
  );
}

export default ShopPage;
