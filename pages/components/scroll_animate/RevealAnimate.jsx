import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from 'react';

const RevealAnimation = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
  
    useEffect(() => {
      if(isInView){
        mainControls.start("start")
      }
    },[isInView])

    return (
        <>
            <motion.div
            ref={ref}
            style={{
              transform: isInView? "none" : "translateX(200px)",
              opacity: isInView? 1 : 0
            }}
            className={`${className} transition-all ease duration-1000`}
            >
              {children}
            </motion.div>
        </>
    )
}

export default RevealAnimation;