import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        className="h-full w-full flex flex-row justify-center items-center"
      >
        <ClipLoader color={"#36456F"} size={150} />
      </motion.div>
    </>
  );
};

export default LoadingSpinner;
