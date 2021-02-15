import { useEffect } from 'react';
import Cursor from '../utils/animatedCursor';

const Hero = () => {
  useEffect(() => {
    new Cursor(document.querySelector('.cursor'));
  }, []);

  return (
    <section class="hero">
      <div class="container">
        <div class="hero-inner">
          <div class="hero-inner-banner">
            <div class="hero-inner-col">
              <div class="hero-inner-title">
                <h1>We make it happen</h1>
              </div>
              <div class="hero-inner-links">
                <div data-video-src="websites" class="hero-inner-link-item">
                  <div class="hero-inner-link-item-padding"></div>
                  <a href="/">
                    <span>Websites</span>
                  </a>
                </div>
                <div data-video-src="apps" class="hero-inner-link-item">
                  <div class="hero-inner-link-item-padding"></div>
                  <a href="/">
                    <span>Apps</span>
                  </a>
                </div>
                <div class="hero-inner-link-item" data-video-src="branding">
                  <div class="hero-inner-link-item-padding"></div>
                  <a href="/">
                    <span>Branding</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-inner-footer">
          <div class="hero-inner-footer-text">
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
