import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Chat from '../../components/Chat';
import AutoplayVideo from '../../components/AutoplayVideo';
import Header from '../../components/Project/Header';
import IntroText from '../../components/Project/IntroText';

const fyx = () => {
  return (
    <Layout>
      <SEO />
      <Header brand="FYX" title="Be distinctive, not different" />
      <Parallax
        styleInner={{
          height: '100%',
          overflow: 'hidden',
        }}
        styleOuter={{
          height: '100vh',
        }}
      >
        <AutoplayVideo
          id="groof"
          src="/videos/Groof.mp4"
          style={{
            height: '100%',
            position: 'absolute',
            transform: 'translate3d(-50%, 50%,0)',
            top: '-50%',
            left: '50%',
          }}
        />
      </Parallax>
      <IntroText
        href="https://fyx.nl"
        title="For Your Xperience"
        body="FYX is a creative marketing & event agency based in Rotterdam. The three letters of their brand name stand for For Your Xperience. Loosely translated blood, sweat and an absolute motivation overload to create the ultimate experience with their work for their target group, their customers and their visitors."
      />
      <ParallaxBanner
        layers={[
          {
            image: '/images/fyx-3.jpg',
            amount: 0.4,
          },
        ]}
        style={{
          height: '100vh',
        }}
      />
      <Chat />
    </Layout>
  );
};

export default fyx;
