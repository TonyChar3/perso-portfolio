import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import RevealAnimation from "../scroll_animate/RevealAnimate";
import Image from "next/image";

const ScreenShotCarousel = ({ img_array }) => {
  const [count, setCount] = useState(0);
  const [max, setMax] = useState(0);

  const [direction, setDirection] = useState("");

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

  useEffect(() => {
    if (Array.isArray(img_array)) {
      setMax(img_array.length);
    }
  }, [img_array]);
  return (
    <>
      <div className="hidden z-0 w-[50%] h-full lg:flex flex-col justify-center items-center">
        <RevealAnimation className="relative flex w-full h-[50%] flex-row justify-around items-center">
          <button
            className="absolute z-10 left-5 w-[9%] 2xl:w-[7%] bg-[#252525] p-4 2xl:p-3 text-white rounded-full shadow-lg shadow-[#4B4B4B] active:scale-[0.90] ease transition-all duration-300"
            onClick={() => decrement()}
          >
            <i
              aria-hidden
              className="fa-solid fa-minus text-lg 2xl:text-2xl"
            ></i>
          </button>
          <div className="w-full flex flex-row justify-center items-center">
            <motion.div
              className="bg-gray-500 my-4 md:my-8 rounded-lg shadow-lg shadow-gray-400"
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: 1,
                x:
                  direction === "left"
                    ? [-10, -50, -500, -1000, 1000, 500, 50, 0]
                    : direction === "right"
                    ? [10, 50, 500, 1000, -1000, -500, -50, 0]
                    : 0,
              }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              style={{
                transform:
                  direction === "left" ? "translateX(-50%)" : "translateX(50)",
              }}
              onAnimationComplete={() => {
                if (setDirection != null) {
                  setDirection("");
                }
              }}
            >
              <Image
                src={img_array ? img_array[count].url : ""}
                width={600}
                height={600}
                alt="picture of the project"
                style={{ objectFit: "contain" }}
                className="hidden lg:block rounded-lg"
              />
            </motion.div>
          </div>
          <button
            className="absolute z-10 right-5 w-[9%] 2xl:w-[7%] bg-[#252525] p-4 2xl:p-3 text-white rounded-full shadow-lg shadow-[#4B4B4B] active:scale-[0.90] ease transition-all duration-300"
            onClick={() => increment()}
          >
            <i
              aria-hidden
              className="fa-solid fa-plus text-lg 2xl:text-2xl"
            ></i>
          </button>
        </RevealAnimation>
      </div>
    </>
  );
};

export default ScreenShotCarousel;
