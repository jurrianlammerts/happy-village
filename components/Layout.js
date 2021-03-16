import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { Cross as Hamburger } from 'hamburger-react';
import { BrowserView, isMobile } from 'react-device-detect';

import Nav from './Nav';
import Menu from './Menu';
import Backdrop from './Backdrop';
import Footer from './Footer';
import CursorComponent from './Cursor';
import Cursor from '../utils/cursor';
import Button from '../utils/cursor';

const Layout = ({ home = false, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      new Cursor(document.querySelector('.cursor'));
    }
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
      <Nav handleMenu={handleMenu} menuOpen={menuOpen} />
      <Menu handleMenu={handleMenu} menuOpen={menuOpen} />
      <BrowserView>
        <CursorComponent home={home} />
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
