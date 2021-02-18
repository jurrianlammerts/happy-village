import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-inner-top">
        <h2>Have an idea?</h2>
        <h2 className="hover-link reversed">
          <Link href="/">Tell us about it</Link>
        </h2>
      </div>
    </div>
  </footer>
);

export default Footer;
