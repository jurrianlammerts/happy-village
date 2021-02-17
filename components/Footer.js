import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-inner-top">
        <h2>Have an idea?</h2>
        <h2>
          <Link href="/">Tell us about it</Link>
        </h2>
      </div>
      <div className="footer-inner-bottom">
        <a href="mailto:info@happy-village.com">happy-village.com</a>
      </div>
    </div>
  </footer>
);

export default Footer;
