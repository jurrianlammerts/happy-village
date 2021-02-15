const Header = ({ handleMenu }) => (
  <header>
    <div className="header-inner">
      <div className="header-inner-col left">
        <div className="header-inner-logo">
          <h2>happy village.</h2>
        </div>
      </div>
      <div className="header-inner-col right">
        <div className="header-inner-nav">
          <span className="header-inner-nav-link">showreel</span>
          <button onClick={handleMenu} className="header-inner-nav-menu">
            <span className="header-inner-nav-link">menu</span>
            <div className="header-inner-nav-menu-hamburger">
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
