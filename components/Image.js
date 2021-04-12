import * as React from 'react';
import Image from 'next/image';

const Image = ({ imgBase64, imgSrc }) => (
  <div style={{ position: 'relative', overflow: 'hidden' }}>
    {/* Our placeholder image */}
    <img
      aria-hidden="true"
      alt=""
      src={imgBase64}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        /* Adjust the content to fit */
        objectFit: 'cover',
        objectPosition: 'center',
        /* Blur the image and scale to avoid transparent corners */
        filter: 'blur(2rem)',
        transform: 'scale(1.2)',
      }}
    />
    {/* Your image, optimized by next/image */}
    <Image src={imgSrc} width={4032} height={3024} />
  </div>
);

export default Image;
