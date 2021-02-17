import PropTypes from 'prop-types';
import Head from 'next/head';

const SEO = ({ pageTitle }) => (
  <Head>
    <title>happy village • Leading digital agency</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;

SEO.propTypes = {
  pageTitle: PropTypes.string,
};
