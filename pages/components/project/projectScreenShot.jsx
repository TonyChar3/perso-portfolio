import { motion } from "framer-motion";

const ScreenShot = ({ img_link, setDirection = null, direction = "" }) => {
  return (
    <>
      <motion.div
        className="bg-gray-500 w-[70%] md:w-[60%] lg:w-[70%] 2xl:w-[60%] lg:h-80 2xl:h-[30em] h-60 my-4 md:my-8 p-1 rounded-lg shadow-lg shadow-gray-400"
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
        <p>Project Screen shot</p>
      </motion.div>
    </>
  );
};

export default ScreenShot;
