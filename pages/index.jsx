import { motion } from "framer-motion";
import { useEffect } from "react";
import { useMyContext } from "@/context/appContext";
import Link from "next/link";
import RevealAnimation from "./components/scroll_animate/RevealAnimate";
import AboutMeSection from "./sections/aboutMe";
import ProjectsSection from "./sections/projects";
import ContactForm from "./sections/contactMe";
import ScrollDownMessage from "./components/scrollDownMessage";

export default function Home() {
  const { state, dispatch } = useMyContext();

  useEffect(() => {
    if (state.project_list.length > 0) {
      dispatch({ type: "DATA_LOADING", payload: { isLoading: false } });
    }
  }, [state.project_list]);

  return (
    <>
      {/* Main hero section */}
      <RevealAnimation
        className="relative flex flex-col justify-center items-center w-full h-[100%] z-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <div className="w-full lg:h-full lg:flex lg:flex-row justify-center items-center">
          {/* Welcome message */}
          <RevealAnimation className="w-full lg:w-[70%] lg:h-full flex flex-col justify-center">
            <div className="w-full px-16 lg:px-0 lg:w-[90%] flex flex-col justify-center md:items-center">
              <motion.h1
                className="text-xl md:text-4xl lg:text-3xl font-light text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Hello there 🖖,
              </motion.h1>
            </div>

            <div className="w-full flex flex-row justify-center items-center lg:w-[90%] lg:flex lg:flex-row lg:justify-end lg:items-center">
              <div className="w-full flex flex-col justify-center items-center md:w-[50%] lg:w-[75%] text-[#36456F]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-4xl md:text-6xl lg:text-5xl my-6 font-light text-white"
                >
                  <span>I'm</span>
                  <span className="mx-2 font-bold">Anthony</span>
                  <span className="font-bold text-[#F7DC6F]">Charette</span>
                </motion.div>
                <div className="w-full px-10 text-xl md:text-2xl md:px-0 md:my-4 md:w-[100%] lg:my-0 lg:px-0 lg:w-[45%] lg:text-2xl text-white mb-4 flex flex-row justify-start lg:justify-center items-center">
                  <span>Full-</span>
                  <span className="mr-2 text-[#F7DC6F]">Stack</span>
                  <span className="mx-1 font-bold">developer</span>
                </div>
              </div>
            </div>

            {/* Socials icons */}
            <RevealAnimation className="w-full flex flex-row justify-center items-center my-10">
              <div className="w-16 mx-4 flex flex-row justify-center bg-[#252525] p-3 rounded-full shadow-lg shadow-[#4B4B4B] hover:shadow-[#F7DC6F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100">
                <Link href="https://twitter.com/tonyc6731" target="_blank">
                  <i className="bi bi-twitter-x text-4xl text-white"></i>
                </Link>
              </div>

              <div className="w-16 mx-4 flex flex-row justify-center bg-[#252525] p-3 rounded-full shadow-lg shadow-[#4B4B4B] hover:shadow-[#F7DC6F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100">
                <Link href="#">
                  <i className="bi bi-instagram text-4xl text-white"></i>
                </Link>
              </div>

              <div className="w-16 mx-4 flex flex-row justify-center bg-[#252525] p-3 rounded-full shadow-lg shadow-[#4B4B4B] hover:shadow-[#F7DC6F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100">
                <Link
                  href="https://www.linkedin.com/in/anthony-charette-3b2655252"
                  target="_blank"
                >
                  <i className="bi bi-linkedin text-4xl text-white"></i>
                </Link>
              </div>

              <div className="w-16 mx-4 flex flex-row justify-center bg-[#252525] p-3 rounded-full shadow-lg shadow-[#4B4B4B] hover:shadow-[#F7DC6F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100">
                <Link href="https://github.com/TonyChar3" target="_blank">
                  <i class="bi bi-github text-4xl text-white"></i>
                </Link>
              </div>
            </RevealAnimation>
          </RevealAnimation>

          {/* Decorative cubes desktop */}
          <RevealAnimation className="hidden lg:flex w-[50%] h-[55%] mr-16 flex-row flex-wrap justify-center items-center">
            {/* Cube #1 */}
            <RevealAnimation className="w-[38%] h-[50%] m-3 bg-white rounded-lg animate-[pulse_1s_ease-in-out]"></RevealAnimation>

            {/* X cube */}
            <div className="relative w-[38%] h-[50%] flex flex-row justify-center items-center m-3 animate-[spin_1s_ease-in-out]">
              <div className="absolute w-[100%] rotate-45 h-[5%] border-2 border-white"></div>
              <div className="w-[100%] -rotate-45 h-[5%] border-2 border-[#F7DC6F]"></div>
            </div>

            {/* Cube #3 */}
            <RevealAnimation className="w-[38%] h-[50%] m-3 border-2 border-white rounded-lg animate-[spin_1s_ease-in-out]"></RevealAnimation>

            {/* Cube #4 */}
            <div className="w-[38%] h-[50%] m-3 bg-[#F7DC6F] rounded-lg"></div>
          </RevealAnimation>
        </div>

        {/* Decorative vertical line */}
        <div className="hidden lg:block absolute z-[30] left-[5%] top-0 bg-[#F7DC6F] w-1 h-[70%]"></div>

        {/* Scroll down message */}
        <ScrollDownMessage
          show={state.user_scrolling}
          message={"scroll down"}
        />
      </RevealAnimation>

      {/* About me section */}
      <AboutMeSection />

      {/* Projects section */}
      <ProjectsSection
        loading={state.data_loading}
        project_list={state.project_list}
      />

      {/* Contact form footer */}
      <ContactForm />
    </>
  );
}
