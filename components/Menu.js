import Link from 'next/link';

const Menu = () => (
  <div className="menu">
    <div className="menu-inner">
      <div className="menu-inner-row">
        <ul className="menu-list left">
          <span className="menu-list-label">Social</span>
          <li>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </li>
          <li>
            <a
              href="http://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube
            </a>
          </li>
          <li>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </li>
        </ul>
        <ul className="menu-list right">
          <span className="menu-list-label">Menu</span>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="menu-footer">
      <span className="menu-footer-label">Get in touch</span>
      <a href="mailto:info@happy-village.com">info@happy-village.com</a>
    </div>
  </div>
);

export default Menu;
