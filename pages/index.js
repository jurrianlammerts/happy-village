import { useEffect } from 'react';
import { gsap } from 'gsap';

import Hero from '../components/Hero';
import Cursor from '../components/Cursor';
import Chat from '../components/Chat';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <SEO />
    <Cursor />
    <Hero />
    <Chat />
  </Layout>
);

export default Home;
