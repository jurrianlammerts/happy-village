import { useEffect } from 'react';
import { isMobile, MobileView } from 'react-device-detect';

import Cursor from '../utils/animatedCursor';

const Hero = () => {
  useEffect(() => {
    !isMobile && new Cursor(document.querySelector('.cursor'));
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-video">
            <div className="hero-video-inner">
              <video
                src="videos/websites_mobile.mp4"
                preload="auto"
                autoPlay
                muted
                loop
                id="websites"
              />
            </div>
          </div>
          <div className="hero-inner-banner">
            <div className="hero-inner-col">
              <div className="hero-inner-title">
                <h1>We make it happen</h1>
              </div>
              <div className="hero-inner-links">
                <div data-video-src="websites" className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/">
                    <span>Websites</span>
                  </a>
                </div>
                <div data-video-src="apps" className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/">
                    <span>Apps</span>
                  </a>
                </div>
                <div className="hero-inner-link-item" data-video-src="branding">
                  <div className="hero-inner-link-item-padding"></div>
                  <a href="/">
                    <span>Branding</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-inner-footer">
          <div className="hero-inner-footer-text">
            <p>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
