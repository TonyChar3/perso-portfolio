import { motion } from "framer-motion";
import RevealAnimation from "./scroll_animate/RevealAnimate";

const SkillRectangle = ({ skill = "a skill" }) => {
  return (
    <>
      <motion.div
        className="w-[30%] lg:w-[30%] p-1 m-1 lg:p-3 lg:m-2 text-center text-[#F7DC6F] rounded-lg border-2 border-[#F7DC6F]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <h2 className="font-medium md:text-xl">{skill}</h2>
      </motion.div>
    </>
  );
};

export default SkillRectangle;
