import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMyContext } from "@/context/appContext";
import { motion } from "framer-motion";
import ProjectDetailButton from "./components/project/projectDetailButton";
import ScreenShot from "./components/project/projectScreenShot";
import { useRouter } from "next/router";
import ScrollDownMessage from "./components/scrollDownMessage";
import RevealAnimation from "./components/scroll_animate/RevealAnimate";

const ProjectDetail = ({ id }) => {
  const { state, dispatch } = useMyContext();
  const [max, setMax] = useState(0);
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState("");

  const array = [
    <ScreenShot direction={direction} setDirection={setDirection} />,
    <ScreenShot direction={direction} setDirection={setDirection} />,
    <ScreenShot direction={direction} setDirection={setDirection} />,
  ];

  const router = useRouter();
  const topRef = useRef();

  useEffect(() => {
    if (router.pathname === "/projectDetail") {
      topRef.current.scrollIntoView();
    }
  }, []);

  useEffect(() => {}, [id]);

  useEffect(() => {
    setMax(array.length);
  }, [array]);

  const increment = () => {
    setDirection("right");
    let val = count;
    if (val == max - 1) {
      setCount(0);
    } else {
      setCount((val += 1));
    }
  };

  const decrement = () => {
    setDirection("left");
    let val = count;
    if (val == 0) {
      setCount(max - 1);
    } else {
      setCount(val - 1);
    }
  };

  return (
    <>
      <motion.div
        ref={topRef}
        className="relative h-full w-full lg:flex lg:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        {/* Return button */}
        <div className="absolute top-5 w-full flex justify-center items-center">
          <Link
            href="/#projects"
            className="lg:z-20 md:text-xl text-white border-b border-[#F7DC6F]"
          >
            <p>Go back</p>
          </Link>
        </div>

        <div className="w-full z-10 lg:w-[60%] lg:bg-[#252525] h-full flex flex-col justify-center items-center">
          {/* Title */}
          <RevealAnimation className="w-full md:w-[70%] px-4 my-8 md:my-10 flex flex-row justify-start items-center text-white">
            <h3 className="text-4xl md:text-5xl font-bold">ChatBudy.io 💬</h3>
          </RevealAnimation>

          {/* Description */}
          <RevealAnimation className="w-full md:w-[70%] px-6 text-white">
            <p className="text-md md:text-lg font-light">
              A embedded live chat widget that enables user to install it on
              their websites and provide a live support service to their
              customers. Made using the MERN stack with vanilla javascript to
              create the widget, I really pushed my limits and learned new ways
              to organize a large code base or optimize a large app to have the
              best UX possible.
            </p>
          </RevealAnimation>

          {/* Buttons */}
          <RevealAnimation className="w-full md:w-[80%] my-10 md:my-16 flex flex-row justify-around items-center">
            <ProjectDetailButton title="Live demo" link="#" />
            <ProjectDetailButton title="GitHub" link="#" />
          </RevealAnimation>

          {/* Scroll down message */}
          <ScrollDownMessage
            show={state.user_scrolling}
            message={"scroll for more"}
            hidden="lg:hidden"
          />
        </div>

        {/* Project screenshots */}
        <div className="w-full my-16 lg:hidden lg:my-0 flex flex-col justify-center items-center">
          <ScreenShot />
          <ScreenShot />
          <ScreenShot />
        </div>

        {/* Desktop screenshots carousel */}
        <div className="hidden z-0 w-[50%] h-full lg:flex flex-col justify-center items-center">
          <RevealAnimation className="relative flex w-full h-[50%] flex-row justify-around items-center">
            <button
              className="absolute z-10 left-5 w-[9%] 2xl:w-[7%] bg-[#252525] p-4 2xl:p-3 text-white rounded-full shadow-lg shadow-[#4B4B4B] active:scale-[0.90] ease transition-all duration-300"
              onClick={() => decrement()}
            >
              <i className="fa-solid fa-minus text-lg 2xl:text-2xl"></i>
            </button>
            <div className="w-full flex flex-row justify-center items-center">
              {array[count]}
            </div>
            <button
              className="absolute z-10 right-5 w-[9%] 2xl:w-[7%] bg-[#252525] p-4 2xl:p-3 text-white rounded-full shadow-lg shadow-[#4B4B4B] active:scale-[0.90] ease transition-all duration-300"
              onClick={() => increment()}
            >
              <i className="fa-solid fa-plus text-lg 2xl:text-2xl"></i>
            </button>
          </RevealAnimation>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetail;
