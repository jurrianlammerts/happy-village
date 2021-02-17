import Hero from '../components/Hero';
import Chat from '../components/Chat';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <SEO />
    <Hero />
    <Chat />
  </Layout>
);

export default Home;
