import * as React from 'react';
import Link from '@/components/Link';
import AnimatedDiv from '@/components/framer-motion/AnimatedDiv';
import { FadeContainer } from '../lib/FramerMotionVariants';

const RecentImages = ({ MAX_IMAGES = 9 }) => {
  // Generate an array of image URLs, starting from 1 up to MAX_IMAGES
  const imagesList = [...new Array(MAX_IMAGES)].map((_, index) => `/static/images/galleryImages/image-${index + 1}.jpg`);

  return (
    <>
      <div className="divide-y divide-gray-700">
        <div className="my-4">
          <span className="font-poppins title-font text-3xl font-bold">Photography</span>
        </div>
        <div className="py-5">
          <AnimatedDiv
            variants={FadeContainer}
            className="mx-auto grid grid-cols-1 gap-4 md:ml-[20%] xl:ml-[24%]"
          >
            <ul className='images-collection-container'>
              {imagesList.map((imgUrl, index) => (
                <li key={index} className='item'>
                  <figure>
                    <img src={imgUrl} alt="collection" />
                  </figure>
                </li>
              ))}
            </ul>
          </AnimatedDiv>
        </div>
        <div className="mt-5 flex justify-end text-base font-medium leading-6">
          <Link href="/imageGallery" className="mt-5 hover:text-primary-400" aria-label="all images">
            All Images &rarr;
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecentImages;
