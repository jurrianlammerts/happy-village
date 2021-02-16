import { Cross as Hamburger } from 'hamburger-react';

const Header = ({ handleMenu, menuOpen }) => (
  <header>
    <div className="header-inner">
      <div className="header-inner-col left">
        <div className="header-inner-logo">
          <h2>happy village.</h2>
        </div>
      </div>
      <div className="header-inner-col right">
        <div className="header-inner-nav">
          {/* <span className="header-inner-nav-link">showreel</span> */}
          <div className="header-inner-nav-menu">
            <span className="header-inner-nav-link">menu</span>
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
    </div>
  </header>
);

export default Header;
