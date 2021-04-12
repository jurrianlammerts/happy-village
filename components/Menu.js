import Link from 'next/link';
import { useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';

const Menu = ({ handleMenu, menuOpen }) => {
  const menuRef = useRef();

  useClickOutside(menuRef, () => {
    menuOpen && handleMenu();
  });

  return (
    <div className="menu" ref={menuRef}>
      <div className={`menu-logo ${menuOpen && 'open'}`}>
        <Link href="/">
          <a className="hover-link no-border">lamb digital</a>
        </Link>
      </div>
      <div className="menu-inner">
        <div className="menu-inner-row">
          <ul className="menu-list left">
            <li className="menu-list-label">Social</li>
            <li className="menu-list-item">
              <a
                className="hover-link small"
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="menu-list-item">
              <a
                className="hover-link small"
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </li>
            <li className="menu-list-item">
              <a
                className="hover-link small"
                href="http://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube
              </a>
            </li>
            <li className="menu-list-item">
              <a
                className="hover-link small"
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </li>
          </ul>
          <ul className="menu-list right">
            <li className="menu-list-label">Menu</li>
            <li className="menu-list-item">
              <Link href="/work">
                <a className="hover-link">Work</a>
              </Link>
            </li>
            <li className="menu-list-item">
              <Link href="/about">
                <a className="hover-link">About</a>
              </Link>
            </li>
            <li className="menu-list-item">
              <Link href="/services">
                <a className="hover-link">Services</a>
              </Link>
            </li>
            <li className="menu-list-item">
              <Link href="/contact">
                <a className="hover-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu-footer">
        <span className="menu-footer-label">Get in touch</span>
        <a className="hover-link small" href="mailto:info@lamb-digital.com">
          info@lamb-digital.com
        </a>
      </div>
    </div>
  );
};
export default Menu;
