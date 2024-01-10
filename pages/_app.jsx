import Navbar from './components/navbar';
import { useState, useEffect, useRef} from 'react';
import { AnimatePresence } from 'framer-motion';
import { MyContextProvider } from '../context/appContext';
import Modal from './components/modal';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const [ui_state, setUIstate] = useState({
    open_mobile_nav: false,
    user_scroll: false
  });

  const outletRef = useRef(null);

  const handleScroll = () => {
      if (outletRef.current.scrollTop > 0) {
          setUIstate(prevValue => ({
              ...prevValue,
              user_scroll: true
          }));
      } else {
          setUIstate(prevValue => ({
              ...prevValue,
              user_scroll: false
          }));
      }
    };

  useEffect(() => {
    if (outletRef.current) {
      outletRef.current.addEventListener('scroll', handleScroll);
      return () => {
        if(outletRef.current){
            outletRef.current.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, [outletRef]);

  return (
    <>
      <Head>
        <title>tonydev.io</title>
      </Head>
      <MyContextProvider>
        <Modal />
        <Navbar isScrolling={ui_state.user_scroll} />
        <div ref={outletRef} className="w-full h-[100%] fixed overflow-y-auto overflow-x-hidden flex-grow">
          <AnimatePresence mode='wait' initial={false}>
            <Component key={pageProps.uniqueKey} {...pageProps} />
          </AnimatePresence>
        </div>
      </MyContextProvider>
    </>
  ) 
}
