import '../sass/styles.scss';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps, router }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} key={router.route} />
    </ParallaxProvider>
  );
}

export default MyApp;
