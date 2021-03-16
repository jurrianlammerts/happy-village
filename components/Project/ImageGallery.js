import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

const ImageGallery = ({ images }) => (
  <section className="image-gallery">
    <div className="image-gallery-inner">
      {images.map((item, index) => (
        <Parallax
          className={`image-gallery-item -${index + 1}`}
          key={item.id}
          y={[-20, 20]}
        >
          <Image src={item.src} alt={item.alt} layout="fill" />
        </Parallax>
      ))}
    </div>
  </section>
);

export default ImageGallery;
