import Link from 'next/link';
import { Cross as Hamburger } from 'hamburger-react';

const Header = ({ handleMenu, menuOpen }) => (
  <header>
    <div className="header-inner">
      <div className="header-inner-logo">
        <Link href="/">lamb digital</Link>
      </div>
      <div className="header-inner-menu">
        <span className="header-inner-menu-label">menu</span>
        <div className="header-inner-menu-burger" id="hover-link">
          <Hamburger
            id="hover-link"
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

export default Header;
