import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { Cross as Hamburger } from 'hamburger-react';

import Header from './Header';
import Menu from './Menu';
import Backdrop from './Backdrop';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    const body = document.querySelector('body');
    !menuOpen && body.classList.add('fixed');
    menuOpen && body.classList.remove('fixed');
    setMenuOpen(!menuOpen);
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
    <>
      <Header handleMenu={handleMenu} menuOpen={menuOpen} />
      {menuOpen && <Menu open={menuOpen} handleMenu={handleMenu} />}
      {menuOpen && <Backdrop setMenuOpen={setMenuOpen} />}
      {children}
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
