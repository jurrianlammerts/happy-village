import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
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
    const body = document.querySelector('body');
    menuOpen ? body.classList.add('fixed') : body.classList.remove('fixed');
    if (!isMobile) {
      const cursor = document.querySelector('.cursor');
      new Cursor(cursor);
      cursor.style.setProperty('--scale', 0.2);
    }
  }, []);

  const handleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      gsap.to('.menu', {
        x: 0,
        ease: 'power2.inOut',
      });
    }

    if (menuOpen) {
      setMenuOpen(false);
      gsap.to('.menu', {
        x: '100%',
      });
    }
  };

  return (
    <motion.div className="page">
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
    </motion.div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
