import { useEffect } from 'react';
import { gsap } from 'gsap';

import Hero from '../components/Hero';
import Cursor from '../components/Cursor';
import Chat from '../components/Chat';
import Header from '../components/Header';
import SEO from '../components/SEO';

export default function Home() {
  useEffect(() => {
    const body = document.querySelector('body');

    body.classList.remove('loading');
    gsap.from(body, {
      opacity: 0,
      duration: 1,
      ease: 'Power3.easeInOut',
    });
  }, []);

  return (
    <>
      <SEO />
      <Header />
      <Cursor />
      <Hero />
      <Chat />
    </>
  );
}
