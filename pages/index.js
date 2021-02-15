import { useEffect } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';

import Hero from '../components/Hero';
import Cursor from '../components/Cursor';
import Chat from '../components/Chat';
import Header from '../components/Header';

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
    <div>
      <Head>
        <title>happy village.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Cursor />
      <Hero />
      <Chat />
    </div>
  );
}
