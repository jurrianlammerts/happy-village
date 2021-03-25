import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-inner-top">
        <h2>Have an idea?</h2>
        <h2>
          <Link href="/" scroll={false}>
            <a className="hover-link reversed">Tell us about it</a>
          </Link>
        </h2>
      </div>
    </div>
  </footer>
);

export default Footer;
