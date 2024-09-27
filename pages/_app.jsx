import Navbar from "./components/navbar/navbar";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { MyContextProvider } from "../context/appContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [ui_state, setUIstate] = useState({
    open_mobile_nav: false,
    user_scroll: false,
  });

  const outletRef = useRef(null);

  const handleScroll = () => {
    // get if on of the div is visible
    if (outletRef.current.scrollTop > 0) {
      setUIstate((prevValue) => ({
        ...prevValue,
        user_scroll: true,
      }));
    } else {
      setUIstate((prevValue) => ({
        ...prevValue,
        user_scroll: false,
      }));
    }
  };

  useEffect(() => {
    if (outletRef.current) {
      outletRef.current.addEventListener("scroll", handleScroll);
      return () => {
        if (outletRef.current) {
          outletRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [outletRef, router]);

  return (
    <>
      <Head>
        <title>tonydev.io</title>
        <meta name="author" content='Anthony "Tony" Charette' />
        <meta
          name="description"
          content="Anthony Charette personal portfolio. See what im capable of and feel free to contact for any questions!"
        />
      </Head>
      <MyContextProvider>
        <Navbar
          isScrolling={ui_state.user_scroll}
          activeSection={ui_state.visible_div}
        />
        <div
          ref={outletRef}
          className="w-full h-[100%] fixed overflow-y-auto overflow-x-hidden flex-grow"
        >
          <AnimatePresence mode="wait" initial={false}>
            <Component key={pageProps.uniqueKey} {...pageProps} />
          </AnimatePresence>
        </div>
      </MyContextProvider>
    </>
  );
}
