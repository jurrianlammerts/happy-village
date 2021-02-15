import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

import Header from './Header';
import Menu from './Menu';
import Backdrop from './Backdrop';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log('menuOpen:', menuOpen);

  const handleMenu = () => {
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
      <Header handleMenu={handleMenu} />
      {menuOpen && <Menu open={menuOpen} handleMenu={handleMenu} />}
      {menuOpen && <Backdrop />}
      {children}
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
