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
      <div className="menu-inner">
        <div className="menu-inner-row">
          <ul className="menu-list left">
            <li className="menu-list-label">Social</li>
            <li className="menu-list-item">
              <a
                id="hover-link"
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="menu-list-item">
              <a
                id="hover-link"
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </li>
            <li className="menu-list-item">
              <a
                id="hover-link"
                href="http://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube
              </a>
            </li>
            <li className="menu-list-item">
              <a
                id="hover-link"
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
              <Link href="/">
                <a id="hover-link">Work</a>
              </Link>
            </li>
            <li className="menu-list-item">
              <Link href="/">
                <a id="hover-link">About</a>
              </Link>
            </li>
            <li className="menu-list-item">
              <Link href="/">
                <a id="hover-link">Services</a>
              </Link>
            </li>
            <li className="menu-list-item">
              <Link href="/">
                <a id="hover-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu-footer">
        <span className="menu-footer-label">Get in touch</span>
        <a id="hover-link" href="mailto:info@lamb-digital.com">
          info@lamb-digital.com
        </a>
      </div>
    </div>
  );
};
export default Menu;
