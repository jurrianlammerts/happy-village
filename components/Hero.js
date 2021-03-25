import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Tilt from 'react-tilt';
import { isMobile, MobileView } from 'react-device-detect';

import AutoplayVideo from './AutoplayVideo';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      '.hero-video-inner',
      { opacity: 0 },
      { opacity: 1, ease: 'bounce.out', duration: 0.25 },
    );
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="hero-video">
            <div className="hero-video-inner">
              <Tilt className="Tilt" options={{ max: 50 }}>
                <AutoplayVideo
                  id="mobile-video"
                  src="videos/websites_mobile.mp4"
                />
              </Tilt>
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
                  <Link href="/">Websites</Link>
                </div>
                <div data-video-src="apps" className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding"></div>
                  <Link href="/">Apps</Link>
                </div>
                <div className="hero-inner-link-item" data-video-src="branding">
                  <div className="hero-inner-link-item-padding"></div>
                  <Link href="/">Strategy</Link>
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
