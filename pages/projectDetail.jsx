import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMyContext } from "@/context/appContext";
import { motion } from "framer-motion";
import ProjectDetailButton from "./components/project/projectDetailButton";
import ScreenShot from "./components/project/projectScreenShot";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import ScrollDownMessage from "./components/scrollDownMessage";
import RevealAnimation from "./components/scroll_animate/RevealAnimate";
import ScreenShotCarousel from "./components/project/screenShotCarousel";

const ProjectDetail = () => {
  const { state, dispatch } = useMyContext();
  const [project, setProject] = useState(null);
  const [img_array, setImgArray] = useState(null);

  const router = useRouter();
  const search = useSearchParams();
  const topRef = useRef();

  useEffect(() => {
    if (router.pathname === "/projectDetail") {
      topRef.current.scrollIntoView();
    }
  }, []);

  useEffect(() => {
    const id = search.get("id");

    if (id == null) {
      router.push("/#projects");
    } else {
      state.project_list.forEach((el) => {
        if (el._id == id) {
          setProject(el);
          setImgArray(el.imgUrl);
        }
      });
    }
  }, []);

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
            <h3 className="text-4xl md:text-5xl font-bold">
              {project ? project.projectName : "No Name"}
            </h3>
          </RevealAnimation>

          {/* Description */}
          <RevealAnimation className="w-full md:w-[70%] px-6 text-white">
            <p className="text-md md:text-lg font-light">
              {project ? project.description : "a brief description...."}
            </p>
          </RevealAnimation>

          {/* Buttons */}
          <RevealAnimation className="w-full md:w-[80%] my-10 md:my-16 flex flex-row justify-around items-center">
            <ProjectDetailButton
              title="GitHub"
              link={project ? project.repoUrl : "#"}
            />
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
          {Array.isArray(img_array)
            ? img_array.map((img, key) => (
                <ScreenShot key={key} img_link={img.url} />
              ))
            : "No screenshots available"}
        </div>

        {/* Desktop screenshots carousel */}
        <ScreenShotCarousel img_array={img_array} />
      </motion.div>
    </>
  );
};

export default ProjectDetail;
