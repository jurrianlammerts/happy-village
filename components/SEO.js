import PropTypes from 'prop-types';
import Head from 'next/head';

const SEO = ({ pageTitle }) => (
  <Head>
    <title>lamb digital • Leading digital agency</title>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Leading digital agency focused on UI/UX design. We develop complex websites, iOS/Android mobile applications and elaborate online business services."
    />
  </Head>
);

export default SEO;

SEO.propTypes = {
  pageTitle: PropTypes.string,
};
