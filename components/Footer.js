import Link from 'next/link';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import MagneticHover from '../utils/magneticHover';

const Footer = () => {
  useEffect(() => {
    if (!isMobile) {
      new MagneticHover(document.querySelector('.magentic-footer'), 0.5);
    }
  }, []);
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-inner-top">
          <h2>Have an idea?</h2>
          <h2 className="magentic-footer hover-link reversed">
            <Link href="/">Tell us about it</Link>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
