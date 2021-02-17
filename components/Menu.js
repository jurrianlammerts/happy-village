import Link from 'next/link';

const Menu = () => (
  <div className="menu">
    <div className="menu-inner">
      <div className="menu-inner-row">
        <ul className="menu-list left">
          <li className="menu-list-label">Social</li>
          <li className="menu-list-item">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li className="menu-list-item">
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </li>
          <li className="menu-list-item">
            <a
              href="http://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube
            </a>
          </li>
          <li className="menu-list-item">
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
          <li className="menu-list-label">Menu</li>
          <li className="menu-list-item">
            <Link href="/">Work</Link>
          </li>
          <li className="menu-list-item">
            <Link href="/">About</Link>
          </li>
          <li className="menu-list-item">
            <Link href="/">Services</Link>
          </li>
          <li className="menu-list-item">
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
