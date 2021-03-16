import AutoplayVideo from '../../components/AutoplayVideo';

const Video = ({ id, src }) => (
  <div className="video">
    <AutoplayVideo id={id} src={src} />
  </div>
);

export default Video;
