import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { Cross as Hamburger } from 'hamburger-react';

import Header from './Header';
import Menu from './Menu';
import Backdrop from './Backdrop';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const tl = gsap.timeline();

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
      tl.to('.menu', {
        x: '100%',
      });
    }
  };

  useEffect(() => {
    const body = document.querySelector('body');

    body.classList.remove('loading');
    gsap.from(body, {
      opacity: 0,
      duration: 1,
      ease: 'Power3.easeInOut',
    });
  }, []);

  return (
    <div className="page">
      <Header handleMenu={handleMenu} menuOpen={menuOpen} />
      <Menu handleMenu={handleMenu} menuOpen={menuOpen} />
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
