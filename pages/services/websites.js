import { Parallax, Background } from 'react-parallax';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Chat from '../../components/Chat';
import AutoplayVideo from '../../components/AutoplayVideo';
import Header from '../../components/Project/Header';
import IntroText from '../../components/Project/IntroText';
import Video from '../../components/Project/Video';
import ImageGallery from '../../components/Project/ImageGallery';
import Image from '../../components/Image';

const Websites = () => {
  return (
    <Layout>
      <SEO pageTitle="Websites • lamb digital" />
      <Header brand="Websites" title="Build the future" />

      <Parallax strength={300} className="parallax -large">
        <Background className="custom-bg">
          <Image src="/images/bank.webp" height={750} width={1000} />
        </Background>
      </Parallax>

      <IntroText
        href="https://lamb-digital.com"
        title="We are here to help"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis."
      />
      <Video id="groof" src="/videos/Groof.mp4" />
      <Header title="Careful rebranding" />

      <Parallax strength={300} className="parallax -large">
        <Background className="custom-bg">
          <Image src="/images/coworking.webp" height={750} width={1000} />
        </Background>
      </Parallax>

      <Header
        title="The design will not leave you cold"
        body="Plenty of illustrations and icons, bright hues, and micro animated functional elements all come together to really set a creative mood and submerge the user in the app’s special atmosphere."
      />
      <Chat />
    </Layout>
  );
};

export default Websites;
