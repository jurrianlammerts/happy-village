import Link from 'next/link';
import { Cross as Hamburger } from 'hamburger-react';

const Header = ({ handleMenu, menuOpen }) => (
  <header className="header">
    <div className="header-inner">
      <div className="header-inner-logo">
        <Link href="/">
          <a className="hover-link no-border">lamb digital</a>
        </Link>
      </div>
      <div className="header-inner-menu">
        <span className="header-inner-menu-label">menu</span>
        <div className="header-inner-menu-burger hover-link no-border">
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

export default Header;
