import { BrowserView } from 'react-device-detect';

import Hero from '../components/Hero';
import Cursor from '../components/Cursor';
import Chat from '../components/Chat';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <SEO />
    <BrowserView>
      <Cursor />
    </BrowserView>
    {/* TODO: make a mobile friendly hero */}
    <Hero />
    <Chat />
  </Layout>
);

export default Home;
