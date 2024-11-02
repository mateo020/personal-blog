import * as React from 'react';

const ImagesCollection = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const imagesList = [...new Array(22)].map((_, index) => `static/images/galleryImages/image-${index + 1}.jpg`);

    const openModal = (imgUrl) => {
        setSelectedImage(imgUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <ul className='images-collection-container'>
                {imagesList.map((imgUrl, index) => {
                    return (
                        <li key={index} className='item' onClick={() => openModal(imgUrl)}>
                            <figure>
                                <img src={imgUrl} alt="collection" className="cursor-pointer"/>
                            </figure>
                        </li>
                    );
                })}
            </ul>

            {/* Modal */}
            {selectedImage && (
                <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative max-w-3xl w-full p-8 bg-white rounded-lg">
                        {/* Close Button */}
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 text-gray-800 text-3xl font-bold bg-white rounded-full p-2 hover:bg-gray-200 z-50"
                        >
                            &times;
                        </button>
                        <div className="p-4">
                            <img 
                                src={selectedImage} 
                                alt="Expanded" 
                                className="w-full max-h-[80vh] max-w-full object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImagesCollection;
