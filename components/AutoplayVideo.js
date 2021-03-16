import PropTypes from 'prop-types';

const AutoplayVideo = ({ src, id, style }) => (
  <div
    id={id}
    style={style}
    dangerouslySetInnerHTML={{
      __html: `
        <video
          loop
          muted
          autoPlay
          playsinline
        >
          <source src=${src} type="video/mp4" /> 
        </video>
      `,
    }}
  />
);

export default AutoplayVideo;

AutoplayVideo.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
