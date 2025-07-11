import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.css'; 
import '../styles/indexmain.css'; 
import '../app/prime.css';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import Header from '@/components/header';
import Footer from '@/components/footer';
import NextStep from '@/components/next-step';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isSitemapPage, setIsSitemapPage] = useState(false);
  const stickySectionRef = useRef(null);

  useEffect(() => {
    setIsSitemapPage(router.pathname === '/sitemap');
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const el = stickySectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If the section is entering the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const visibleRatio = 1 - rect.top / windowHeight;

        // Clamp and smooth the value
        const opacity = Math.min(Math.max(visibleRatio, 0), 0.8912);
        el.style.opacity = opacity.toFixed(4);
        el.style.transform = `translateY(${40 * (1 - visibleRatio)}px)`;
      } else {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
       <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192.png" />
          <meta name="theme-color" content="#ffffff" />
        <title>Memate</title>
      </Head>

      <Header />

      <div className="apply-container">
        <div className="children-wrapper children-wrapper-main">
          <div className="children">
            <Component {...pageProps} />
          </div>
        </div>
      </div>

      {!isSitemapPage && (
        <div ref={stickySectionRef} className="sticky-section-scroll-fade">
          <div className="apply-content">
            <div className="get-started-wrapper">
              <div className="intro-sticky">
                <NextStep text="Book a Demo" />
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </Provider>
  );
}

export default MyApp;
