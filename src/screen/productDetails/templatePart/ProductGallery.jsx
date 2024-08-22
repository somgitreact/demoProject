
import PropTypes from 'prop-types'

import  { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
//import { PhotoService } from './service/PhotoService';

const ProductGallery = ({gallData}) => {
    const [images, setImages] = useState();
    const [activeIndex, setActiveIndex] = useState(0)

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

// const dataI = [
//     '<img src="img/sofa1.jpg" />',
//     '<img src="img/sofa2.jpg" />',
//     '<img src="img/sofa3.jpg" />',
//     '<img src="img/sofa4.jpg" />',
// ]
// const dataI = [
//     { itemImageSrc: 'img/sofa1.jpeg', thumbnailImageSrc: 'img/sofa1.jpeg', alt: 'Sofa 1' },
//     { itemImageSrc: 'img/sofa2.jpeg', thumbnailImageSrc: 'img/sofa2.jpeg', alt: 'Sofa 2' },
//     { itemImageSrc: 'img/sofa3.jpeg', thumbnailImageSrc: 'img/sofa3.jpeg', alt: 'Sofa 3' },
//     { itemImageSrc: 'img/sofa4.jpeg', thumbnailImageSrc: 'img/sofa4.jpeg', alt: 'Sofa 4' },
//     { itemImageSrc: 'img/sofa2.jpeg', thumbnailImageSrc: 'img/sofa2.jpeg', alt: 'Sofa 2' },
//     { itemImageSrc: 'img/sofa3.jpeg', thumbnailImageSrc: 'img/sofa3.jpeg', alt: 'Sofa 3' },
// ];



    // useEffect(() => {
    //     PhotoService.getImages().then(data => setImages(data));
    // }, [dataI]);

    useEffect(() => {
        setImages(gallData);
    }, [gallData]);
 console.log("gall data", gallData);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: 100, display: 'block' }} />;
    }

  return (
    <div>
        
        <Galleria
                value={images}
                activeIndex={activeIndex}
                onItemChange={(e) => setActiveIndex(e.index)}
                responsiveOptions={responsiveOptions}
                numVisible={4}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                thumbnailsPosition='left'
                style={{ maxWidth: '100%' }}
                verticalThumbnailViewPortHeight={"50%"}
            />

    </div>
  )
}
ProductGallery.propTypes = {
    gallData: PropTypes.array.isRequired
}
export default ProductGallery