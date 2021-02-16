import { useEffect } from 'react';
import { gsap } from 'gsap';
import { MobileView } from 'react-device-detect';

import Hero from '../components/Hero';
import Cursor from '../components/Cursor';
import Chat from '../components/Chat';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <SEO />
    <MobileView>
      <Cursor />
    </MobileView>
    {/* TODO: make a mobile friendly hero */}
    <Hero />
    <Chat />
  </Layout>
);

export default Home;
