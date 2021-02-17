import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { Cross as Hamburger } from 'hamburger-react';
import { BrowserView, isMobile } from 'react-device-detect';

import Header from './Header';
import Menu from './Menu';
import Backdrop from './Backdrop';
import Footer from './Footer';
import CursorComponent from './Cursor';
import Cursor from '../utils/animatedCursor';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    !isMobile && new Cursor(document.querySelector('.cursor'));
  }, []);

  const handleMenu = () => {
    const body = document.querySelector('body');

    if (!menuOpen) {
      body.classList.add('fixed');
      setMenuOpen(true);
      gsap.to('.menu', {
        x: 0,
        ease: 'power2.inOut',
      });
    }

    if (menuOpen) {
      body.classList.remove('fixed');
      setMenuOpen(false);
      gsap.to('.menu', {
        x: '100%',
      });
    }
  };

  return (
    <div className="page">
      <Header handleMenu={handleMenu} menuOpen={menuOpen} />
      <Menu handleMenu={handleMenu} menuOpen={menuOpen} />
      <BrowserView>
        <CursorComponent />
      </BrowserView>

      {menuOpen && <Backdrop />}
      <section className="page-inner">{children}</section>
      {/* For the paralax footer */}
      <div className="page-placeholder" />
      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
