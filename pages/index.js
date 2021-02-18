import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Chat from '../components/Chat';

const Home = () => (
  <Layout>
    <SEO />
    <Hero />
    <FeaturedProjects />
    <Chat />
  </Layout>
);

export default Home;
