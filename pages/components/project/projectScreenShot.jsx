import { motion } from "framer-motion";
import Image from "next/image";

const ScreenShot = ({ img_link, setDirection, direction }) => {
  return (
    <>
      <motion.div
        className="bg-gray-500 lg:w-[70%] 2xl:w-[60%] lg:h-80 2xl:h-[30em] my-4 md:my-8 rounded-lg shadow-lg shadow-gray-400"
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
          src={img_link}
          placeholder="empty"
          width={300}
          height={600}
          alt="Picture of the author"
          style={{ objectFit: "contain" }}
          className="md:hidden lg:hidden rounded-lg"
        />

        <Image
          src={img_link}
          placeholder="empty"
          width={600}
          height={600}
          alt="Picture of the author"
          style={{ objectFit: "contain" }}
          className="hidden md:block lg:hidden rounded-lg"
        />
      </motion.div>
    </>
  );
};

export default ScreenShot;
