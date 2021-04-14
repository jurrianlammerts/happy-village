import { Parallax } from 'react-parallax';
import Image from '../Image';

const ImageGallery = ({ images }) => (
  <section className="image-gallery">
    <div className="image-gallery-inner">
      {images.map((item, index) => (
        <Parallax strength={300} className="parallax" key={item.id}>
          <Image src={item.src} alt={item.alt} layout="fill" />
        </Parallax>
      ))}
    </div>
  </section>
);

export default ImageGallery;
