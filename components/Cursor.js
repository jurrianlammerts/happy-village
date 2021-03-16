const Cursor = ({ home = false }) => (
  <div className="cursor">
    {home && (
      <div className="cursor-media">
        <video
          src="videos/websites.mp4"
          preload="auto"
          autoPlay
          muted
          loop
          id="websites"
        ></video>
        <video
          src="videos/apps.mp4"
          preload="auto"
          autoPlay
          muted
          loop
          id="apps"
        ></video>
        <video
          src="videos/branding.mp4"
          preload="auto"
          autoPlay
          muted
          loop
          id="branding"
        ></video>
      </div>
    )}
  </div>
);

export default Cursor;
