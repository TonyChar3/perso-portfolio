import { useState, useEffect } from "react";
import { useMyContext } from "@/context/appContext";
import { useRouter } from "next/router";

import NavHamburger from "./navHamburger";
import NavBarButton from "./navButton";
import RevealAnimation from "../scroll_animate/RevealAnimate";

const Navbar = (props) => {
  const { state, dispatch } = useMyContext();
  const [open_mobile_nav, setMobileNav] = useState(false);
  const [user_isScroll, setUserScroll] = useState(null);
  const [active_section, setActiveSection] = useState(null);

  const router = useRouter();

  useEffect(() => {
    setUserScroll(props.isScrolling);
    if (props.isScrolling) {
      dispatch({
        type: "USER_IS_SCROLLING",
      });
    } else {
      dispatch({
        type: "USER_IS_NOT_SCROLLING",
      });
    }
  }, [props.isScrolling]);

  useEffect(() => {
    setActiveSection(props.activeSection);
  }, [props.activeSection]);

  return (
    <>
      <NavHamburger
        user_isScroll={user_isScroll}
        setMobileNav={setMobileNav}
        open_mobile_nav={open_mobile_nav}
        setUserScroll={setUserScroll}
      />

      {/* Navigation menu */}
      <nav
        className={`absolute top-0 left-0 right-0 bg-[#252525] bg-opacity-[93%] w-full h-full flex flex-col justify-center transform-all ease duration-700 z-[20]
        lg:w-[100%] lg:flex-row lg:justify-center lg:bg-transparent lg:h-auto
            ${router.pathname === "/projectDetail" ? "hidden" : ""}
        ${
          open_mobile_nav
            ? "-translate-x-0 z-[20]"
            : "-translate-x-[200%] lg:-translate-x-0"
        }`}
      >
        {/* Mobile decorative vertical line */}
        <div className="absolute top-0 right-5 h-[90%] w-[2%] bg-[#F7DC6F] lg:hidden"></div>

        {/* Desktop decorative horizontal line */}
        <RevealAnimation
          className={`
        hidden lg:block absolute bottom-0 left-0 bg-white w-[80%] h-1
        `}
        ></RevealAnimation>

        <div
          className={`flex flex-col w-80 lg:w-[35%] h-[85%] py-6 text-[#36456F] transform-all ease duration-300
                lg:p-6 lg:justify-center lg:flex-row lg:w-[55%] lg:mx-auto lg:h-auto lg:items-center lg:rounded-3xl
                `}
        >
          {/* About section button */}
          <NavBarButton
            title="About"
            link="/#about-me"
            setMobileNav={setMobileNav}
            open_mobile_nav={open_mobile_nav}
            active_section={active_section}
            user_scroll={user_isScroll}
          />

          {/* Projects page button */}
          <NavBarButton
            title="Projects"
            link="/#projects"
            setMobileNav={setMobileNav}
            open_mobile_nav={open_mobile_nav}
            active_section={active_section}
            user_scroll={user_isScroll}
          />

          {/* Contact form section button */}
          <NavBarButton
            title="Contact"
            link="/#contact-me"
            setMobileNav={setMobileNav}
            open_mobile_nav={open_mobile_nav}
            active_section={active_section}
            user_scroll={user_isScroll}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
