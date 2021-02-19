import Link from 'next/link';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { Cross as Hamburger } from 'hamburger-react';
import MagneticHover from '../utils/magneticHover';

const Header = ({ handleMenu, menuOpen }) => {
  useEffect(() => {
    if (!isMobile) {
      new MagneticHover(document.querySelector('.magentic-hover'), 1.5);
    }
  }, []);
  return (
    <header>
      <div className="header-inner">
        <div className="header-inner-logo">
          <Link href="/">lamb digital</Link>
        </div>
        <div className="header-inner-menu">
          <span className="header-inner-menu-label">menu</span>
          <div className="header-inner-menu-burger hover-link no-border magentic-hover">
            <Hamburger
              toggled={menuOpen}
              toggle={handleMenu}
              size={24}
              duration={0.2}
              label="Show menu"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
