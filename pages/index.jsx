import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import RevealAnimation from "./components/scroll_animate/RevealAnimate";

export default function Home() {

  return (
    <>
      {/* Main hero section */}
      <div id="welcome"></div>
      <RevealAnimation 
        className="relative flex flex-col lg:justify-center items-center w-full h-[100%] z-60"

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        {/* Background white circle w/ shadow */}
        <RevealAnimation className="absolute bottom-[30%] bg-white h-[300px] w-[300px] rounded-full shadow-[rgba(54, 54, 54, 0.30)] shadow-xl z-[-1] md:h-[500px] md:w-[500px] lg:h-[700px] lg:w-[700px] lg:botttom-0 lg:top-[12%]"></RevealAnimation>

        {/* Welcome message */}
        <RevealAnimation className="w-full h-[50%] p-3 flex flex-col justify-center md:items-center lg:relative">
          <div className="flex flex-col w-[100%] md:w-[65%] lg:w-[40%] lg:absolute lg:left-[15%] lg:top-[5%] text-[#36456F]">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl lg:text-6xl my-8 font-bold">Welcome to my website.</motion.h2>
            <p className="w-[86%] text-2xl lg:text-4xl lg:w-[84%] font-light">
              Hi, my name is Anthony Charette.
              I am a full-stack developer & designer.
            </p>
          </div>
        </RevealAnimation>

        {/* Desktop greek statue head */}
        <Image priority src="https://ik.imagekit.io/bqofr3ncj/Portfolio/DALL_E_2024-01-02_22.18.35_-_A_classical_white_marble_bust_sculpture_of_a_mythical_figure_with_curly_hair_and_a_missing_nose_piece__resembling_ancient_Greek_or_Roman_art__on_a_pla-removebg-preview.png?updatedAt=1704252024319" alt="desktop greek statue head" width="600" height="600" className="hidden lg:block lg:absolute lg:bottom-[10%] lg:right-[7%]"/>
        
          
        {/* Mobile greek statue head */}
        <div className="w-full flex flex-row justify-center items-center lg:justify-end">
          <Image priority src="https://ik.imagekit.io/bqofr3ncj/Portfolio/DALL_E_2024-01-02_22.18.35_-_A_classical_white_marble_bust_sculpture_of_a_mythical_figure_with_curly_hair_and_a_missing_nose_piece__resembling_ancient_Greek_or_Roman_art__on_a_pla-removebg-preview.png?updatedAt=1704252024319" alt="greek statue head" width="275" height="291" className="lg:hidden mx-5 md:w-[400px]"/>
          <div className="absolute w-[50%] h-[3px] bg-[#36456F] bottom-[30%] left-[65%] transform rotate-[90deg] rounded-xl md:bottom-[35%] lg:hidden"></div>
        </div>

        {/* Desktop socials icons */}
        <RevealAnimation className="hidden lg:flex lg:absolute top-[58%] left-[-10%] flex-col justify-around items-center w-[26%]">
          <i aria-hidden className="fa-brands fa-x-twitter text-5xl text-[#36456F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100"></i>
          <div className="bg-[#36456F] w-[2.5px] h-[35px] mx-2 rounded-lg transform rotate-[90deg]"></div>{/* Divider line */}
          <i aria-hidden className="fa-brands fa-instagram text-5xl text-[#36456F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100"></i>
          <div className="bg-[#36456F] w-[2.5px] h-[35px] mx-2 rounded-lg transform rotate-[90deg]"></div>{/* Divider line */}
          <i aria-hidden className="fa-brands fa-linkedin text-5xl text-[#36456F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100"></i>
          <div className="bg-[#36456F] w-[2.5px] h-[35px] mx-2 rounded-lg transform rotate-[90deg]"></div>{/* Divider line */}
          <i aria-hidden className="fa-brands fa-github text-5xl text-[#36456F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100"></i>
        </RevealAnimation>

        {/* Blue line */}
        <RevealAnimation className="absolute w-[50%] h-[3px] bg-[#36456F] bottom-[8%] right-10 rounded-xl md:w-[50%] md:right-[8%] lg:w-[30%] lg:right-[10%]"></RevealAnimation>
        {/* Blue line */}
        <div className="absolute w-[50%] h-[3px] bg-[#36456F] bottom-8 left-5 rounded-xl md:w-[45%] md:left-10 lg:rotate-[90deg] lg:bottom-[38%] lg:left-[78%] lg:w-[30%]"></div>
          
        {/* Scroll down message */}
        <div className="hidden h-[7%] lg:block absolute bottom-0 p-2">
          <span className="text-xl font-light animate-pulse text-[#36456F]">scroll down for more</span>
          <div className="w-[40%] h-[3px] mx-auto bg-[#36456F] my-1"></div>
        </div>
      </RevealAnimation>

      {/* About me section */}
      <div 
      id="about-me"
      className="w-full h-[100%] p-6 flex flex-col items-center justify-center text-[#36456F]"
      >
        <RevealAnimation className="w-full h-[100%] lg:h-[90%] p-6 flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="text-center md:w-[80%] lg:order-2 lg:w-[40%] lg:mx-6">
            <h2 className="text-3xl font-bold lg:text-5xl lg:p-3">- Who am I ? -</h2>
            {/* Small about me paragraph */}
            <div className="text-center font-light text-xl lg:text-left md:text-2xl lg:text-3xl">
              <div className="my-4 lg:my-6">
                I’m a Canadian 🇨🇦 fullstack web developer.
              </div>
              <div className="my-4 lg:my-6">          
                With a passion for coding and problem-solving, 
                I thrive on creating innovative web solutions that bridge the gap between design and functionality.
              </div>
              <div className="my-4 lg:my-6">
                I am dedicated to turning ideas into functional, user-friendly solutions and this website is to showcase how good I am at doing it!
              </div>
            </div>
          </div>
          {/* Icons div */}
          <div 
          className="relative w-full h-full flex flex-row justify-center items-center lg:order-1 lg:w-[50%]">
            {/* Node js logo */}
            <div className="absolute top-[8%] left-[18%] lg:top-[20%] lg:left-[28%] flex justify-center items-center p-3 rounded-2xl bg-white shadow-[#00000066] shadow-xl w-[24%] h-[35%] md:w-[22%] md:h-[22%] md:flex md:justify-center md:items-center animate-pulsate-fwd">
              <i aria-hidden className="fa-brands fa-node-js text-6xl md:text-8xl"></i>
            </div>
            {/* Python logo */}
            <div className="absolute top-[12%] right-[20%] lg:right-[8%] flex justify-center items-center p-3 rounded-2xl bg-white shadow-[#00000066] shadow-xl w-[24%] h-[35%] md:w-[22%] md:h-[22%] md:flex md:justify-center md:items-center animate-pulsate-fwd">
              <i aria-hidden className="fa-brands fa-python text-6xl md:text-8xl"></i>
            </div>
            {/* Css logo */}
            <div className="absolute left-[3%] bottom-[5%] md:bottom-[28%] md:left-[5%] lg:left-[2%] lg:bottom-[25%] flex justify-center items-center p-3 rounded-2xl bg-white shadow-[#00000066] shadow-xl w-[24%] h-[35%] md:w-[22%] md:h-[22%] animate-pulsate-fwd">
              <i aria-hidden className="fa-brands fa-css3-alt text-6xl md:text-8xl"></i>
            </div>
            {/* Javascript logo */}
            <div className="absolute bottom-[-8%] md:bottom-[3%] lg:bottom-[3%] flex justify-center items-center p-3 rounded-2xl bg-white shadow-[#00000066] shadow-xl w-[24%] h-[35%] md:w-[22%] md:h-[22%] md:flex md:justify-center md:items-center animate-pulsate-fwd">
              <i aria-hidden className="fa-brands fa-js text-6xl md:text-8xl"></i>
            </div>
            {/* React logo */}
            <div className="absolute right-[1%] bottom-[8%] md:bottom-[20%] md:right-[8%] lg:bottom-[25%] lg:right-[3%] flex justify-center items-center p-3 rounded-2xl bg-white shadow-[#00000066] shadow-xl w-[24%] h-[35%] md:w-[22%] md:h-[22%] md:flex md:justify-center md:items-center animate-pulsate-fwd">
              <i aria-hidden className="fa-brands fa-react text-6xl md:text-8xl"></i>
            </div>
          </div>
        </RevealAnimation>
      </div>

      {/* Services section */}
      <div className="h-full md:h-[80%] xl:h-[60%] lg:h-full w-full flex flex-col items-center justify-center text-[#36456F]">
        <RevealAnimation className="w-full h-[100%] flex flex-col items-center">
          <div className="p-3 w-full mt-4">
            <div className="h-[3px] w-[20%] bg-[#36456F] mx-auto rounded-xl"></div>
          </div>
          <div className="h-full w-full lg:w-[100%] flex flex-col md:flex-row md:flex-wrap lg:p-6 justify-around items-center gap-8">
            <RevealAnimation className="w-[40%] h-[25%] md:w-[42%] md:h-[33%] lg:w-[25%] lg:h-[80%] flex justify-center items-end shadow-[#00000066] shadow-2xl rounded-3xl active:scale-[0.90] transform-all ease duration-300 animate-pulsate-fwd lg:animate-none">
              <div className="w-[90%] h-[80%] md:h-[70%] flex flex-col justify-between items-center">
                <i aria-hidden className="fa-sharp fa-light fa-pen-nib text-7xl md:text-8xl lg:text-9xl"></i>
                <div className="w-full text-center">
                  <p className="text-xl md:text-4xl md:p-2 lg:p-1 font-regular">web design</p>
                  <div className="h-[3px] w-[20%] bg-[#36456F] mx-auto rounded-xl mb-2 md:mb-4 lg:mb-6"></div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation className="w-[40%] h-[25%] md:w-[42%] md:h-[33%] lg:w-[25%] lg:h-[80%] flex justify-center items-end shadow-[#00000066] shadow-2xl rounded-3xl active:scale-[0.90] transform-all ease duration-300 animate-pulsate-fwd lg:animate-none">
              <div className="w-[90%] h-[80%] md:h-[70%] flex flex-col justify-between items-center">
                <i aria-hidden className="fa-regular fa-gear-complex-code text-7xl md:text-8xl lg:text-9xl"></i>
                <div className="w-full text-center">
                  <p className="text-xl md:text-4xl md:p-2 lg:p-1 font-regular">development</p>
                  <div className="h-[3px] w-[20%] bg-[#36456F] mx-auto rounded-xl mb-2 md:mb-4 lg:mb-6"></div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation className="w-[40%] h-[25%] md:w-[42%] md:h-[33%] lg:w-[25%] lg:h-[80%] flex justify-center items-end shadow-[#00000066] shadow-2xl rounded-3xl active:scale-[0.90] transform-all ease duration-300 animate-pulsate-fwd lg:animate-none">
              <div className="w-[90%] h-[80%] md:h-[70%] flex flex-col justify-between items-center">
                <i aria-hidden className="fa-regular fa-list-check text-7xl md:text-8xl lg:text-9xl"></i>
                <div className="w-full text-center">
                  <p className="text-xl md:text-4xl md:p-2 lg:p-1 font-regular">management</p>
                  <div className="h-[3px] w-[20%] bg-[#36456F] mx-auto rounded-xl mb-2 md:mb-4 lg:mb-6"></div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </RevealAnimation>
      </div>

      {/* Footer of the Home page */}
      <footer className="relative h-[60%] w-full flex flex-col items-center justify-center bg-[#36456F] text-white">
        <svg className="hidden lg:block absolute left-[-1%] bottom-0" xmlns="http://www.w3.org/2000/svg" width="471" height="450" viewBox="0 0 471 483" fill="none">
          <path d="M470 483C470 234.504 229.458 1.00003 0 1.00003" stroke="white" strokeWidth="2"/>
        </svg>
        <RevealAnimation className="w-full h-full flex flex-col items-center">
          <div className="relative w-full h-[80%] flex flex-col justify-center items-center">
            <h3 className="text-4xl lg:text-6xl font-regular">- Let's work together -</h3>
            <Link href="/projects#contact-me" className="my-4 text-xl lg:text-2xl font-light z-[2]">Get in touch →</Link>
            <div className="absolute bg-[#1E3050] w-[17%] h-[20%] top-[48%] left-[23%] lg:w-[8.5%] lg:h-[30%] lg:left-[40%] 2xl:w-[7%] 2xl:left-[42%] rounded-full z-[1]"></div>

          </div>
          <div className="relative mt-auto flex flex-row items-center justify-center w-full p-2 lg:w-[40%]">
            <div className="flex flex-col text-right text-xs">
              <span>powered by TonyChar3</span>
              <span>All rights reserved</span>
            </div>
            <div className="relative bg-white w-[8%] lg:w-[5%] h-[2px] mx-1 transform rotate-[90deg]"></div>
            <div className="w-[40%] lg:w-[32%] h-full flex flex-row justify-around items-center">
              <i aria-hidden className="fa-brands fa-x-twitter text-lg md:text-2xl"></i>
              <i aria-hidden className="fa-brands fa-instagram text-2xl"></i>
              <i aria-hidden className="fa-brands fa-linkedin text-2xl"></i>
              <i aria-hidden className="fa-brands fa-github text-2xl"></i>
            </div>
          </div>
        </RevealAnimation>
      </footer>
    </>
  )
}
