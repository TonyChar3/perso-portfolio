import '@/styles/globals.css'
import Navbar from './components/navbar';
import { useState, useEffect, useRef} from 'react';


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
      <Navbar isScrolling={ui_state.user_scroll} />
      <div ref={outletRef} className="w-full h-full overflow-y-auto flex-grow">
        <Component {...pageProps} />
      </div>
    </>
  ) 
}
