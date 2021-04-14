import Image from 'next/image';

const CustomImage = ({ src, noPlaceholder, borderRadius, ...props }) => {
  const image = src.startsWith('http')
    ? { src }
    : require(`../public${src}?lqip`);

  return (
    <div className={`image ${borderRadius ? '-border-radius' : ''}`}>
      {image.dataURI && !noPlaceholder && (
        <img
          src={image.dataURI}
          className="image-preloaded"
          aria-hidden="true"
          alt=""
        />
      )}
      <Image src={image?.src || image.default} {...props} />
    </div>
  );
};

export default CustomImage;
