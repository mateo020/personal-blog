import * as React from 'react';

const ImagesCollection = () => {
    const ImagesList = [...new Array(9)].map((_, index) => `static/images/galleryImages/image-${index}.jpg`);
    
    return (
        <ul className='images-collection-container'>
            {ImagesList.map((imgUrl, index) => {
                return (
                    <li key={index} className='item'>
                        <figure>
                            <img src={imgUrl} alt="collection"/>
                        </figure>
                    </li>
                );
            })}
        </ul>
    );
};

export default ImagesCollection;
