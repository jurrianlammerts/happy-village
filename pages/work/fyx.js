import { Parallax, Background } from 'react-parallax';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Chat from '../../components/Chat';
import AutoplayVideo from '../../components/AutoplayVideo';
import Header from '../../components/Project/Header';
import IntroText from '../../components/Project/IntroText';
import Video from '../../components/Project/Video';
import ImageGallery from '../../components/Project/ImageGallery';
import NextProject from '../../components/Project/NextProject';
import Image from '../../components/Image';

const images = [
  {
    id: 1,
    src: '/images/e-commerce.webp',
    alt: 'fyx logo',
    description:
      'Our first task was to give a makeover to FYX logotype and corporate identity.',
    width: 500,
    height: 600,
  },
  {
    id: 2,
    src: '/images/bank.webp',
    alt: 'fyx logo',
    description:
      'Our first task was to give a makeover to FYX logotype and corporate identity.',
    width: 500,
    height: 600,
  },
  {
    id: 3,
    src: '/images/coworking.webp',
    alt: 'fyx logo',
    description:
      'Our first task was to give a makeover to FYX logotype and corporate identity.',
    width: 500,
    height: 600,
  },
  {
    id: 4,
    src: '/images/fyx.webp',
    alt: 'fyx logo',
    description:
      'Our first task was to give a makeover to FYX logotype and corporate identity.',
    width: 500,
    height: 600,
  },
];

const fyx = () => {
  return (
    <Layout>
      <SEO pageTitle="FYX • lamb digital" />
      <Header brand="FYX" title="Be distinctive, not different" />

      <Parallax strength={300} className="parallax -large">
        <Background className="custom-bg">
          <Image src="/images/fyx-4.jpg" height={750} width={1000} />
        </Background>
      </Parallax>

      <IntroText
        href="https://fyx.nl"
        title="For Your Xperience"
        body="FYX is a creative marketing & event agency based in Rotterdam. The three letters of their brand name stand for For Your Xperience. Loosely translated blood, sweat and an absolute motivation overload to create the ultimate experience with their work for their target group, their customers and their visitors."
      />
      <Video id="groof" src="/videos/Groof.mp4" />
      <Header title="Careful rebranding" />

      <Parallax strength={300} className="parallax -large">
        <Background className="custom-bg">
          <Image src="/images/fyx-3.jpg" height={750} width={1000} />
        </Background>
      </Parallax>

      <Header
        title="The design will not leave you cold"
        body="Plenty of illustrations and icons, bright hues, and micro animated functional elements all come together to really set a creative mood and submerge the user in the app’s special atmosphere."
      />
      <ImageGallery images={images} />
      <NextProject href="/projects/" />
      <Chat />
    </Layout>
  );
};

export default fyx;
