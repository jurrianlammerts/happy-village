import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Tilt from 'react-tilt';
import { isMobile, MobileView } from 'react-device-detect';
import { AnimatePresence, motion } from 'framer-motion';

import SplitText from './SplitText';
import AutoplayVideo from './AutoplayVideo';

const Hero = () => {
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.hero-video-inner',
      { opacity: 0 },
      { opacity: 1, ease: 'bounce.out', duration: 0.75 },
    );

    setVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="hero-video">
            <div className="hero-video-inner">
              <Tilt>
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
                <h1>
                  <AnimatePresence>
                    {visible && (
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <SplitText
                          initial={{ y: '100%' }}
                          animate="visible"
                          variants={{
                            visible: (i) => ({
                              y: 0,
                              transition: {
                                delay: i * 0.1,
                              },
                            }),
                          }}
                        >
                          We make it happen
                        </SplitText>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </h1>
              </div>
              <AnimatePresence>
                <div className="hero-inner-links">
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.5,
                      },
                    }}
                    data-video-src="websites"
                    className="hero-inner-link-item"
                  >
                    <div className="hero-inner-link-item-padding"></div>
                    <Link href="/">Websites</Link>
                  </motion.div>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.6,
                      },
                    }}
                    data-video-src="apps"
                    className="hero-inner-link-item"
                  >
                    <div className="hero-inner-link-item-padding"></div>
                    <Link href="/">Apps</Link>
                  </motion.div>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.7,
                      },
                    }}
                    className="hero-inner-link-item"
                    data-video-src="branding"
                  >
                    <div className="hero-inner-link-item-padding"></div>
                    <Link href="/">Strategy</Link>
                  </motion.div>
                </div>
              </AnimatePresence>
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
