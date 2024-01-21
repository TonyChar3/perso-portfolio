import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const router = useRouter();

  const [open_mobile_nav, setMobileNav] = useState(false);
  const [active_path, setActivePath] = useState(router.pathname);
  const [user_isScroll, setUserScroll] = useState(null);

  useEffect(() => {
    if (router) {
      setActivePath(router.asPath);
    }
  }, [router]);

  useEffect(() => {
    setUserScroll(props.isScrolling);
  }, [props.isScrolling]);

  return (
    <>
      {/* Hamburger/fries menu */}
      <div
        className={`absolute lg:hidden p-5 flex flex-col justify-center items-start group cursor-pointer z-30 transform-all ease duration-300
            md:p-8
            ${
              user_isScroll
                ? "bg-[#F9F9F9] bg-opacity-[95%] rounded-full m-2"
                : ""
            }
            ${open_mobile_nav ? "bg-opacity-0" : ""}`}
        onClick={() => setMobileNav((open_mobile_nav) => !open_mobile_nav)}
      >
        <div
          className={`h-1 w-8 my-[.4em] rounded-full bg-[#36456F] transition ease transform duration-300
                    md:h-[4.5px] md:w-10 md:my-[.6em]
                    ${
                      open_mobile_nav
                        ? "rotate-45 translate-y-2 md:translate-y-3"
                        : ""
                    }`}
        />
        <div
          className={`h-1 w-8 ml-1 rounded-full bg-[#36456F] transition ease transform duration-300 
                    md:h-[4.5px] md:w-10
                    ${open_mobile_nav ? "-translate-x-2 opacity-0" : ""}`}
        />
        <div
          className={`h-1 w-8 my-[.4em] rounded-full bg-[#36456F] transition ease transform duration-300 
                    md:h-[4.5px] md:w-10 md:my-[.6em] 
                    ${
                      open_mobile_nav
                        ? "-rotate-45 -translate-y-3 md:-translate-y-4"
                        : ""
                    }`}
        />
      </div>

      {/* Navigation menu */}
      <nav
        className={`absolute top-0 left-0 right-0 bg-[#F9F9F9] bg-opacity-[93%] w-full h-full flex flex-col justify-center transform-all ease duration-700 z-[20]
            lg:flex-row lg:justify-end lg:h-auto lg:bg-transparent lg:m-3
            ${
              open_mobile_nav
                ? "-translate-x-0 z-[20]"
                : "-translate-x-[200%] lg:-translate-x-0"
            }`}
      >
        <div
          className={`flex flex-col w-80 h-[85%] p-6 text-[#36456F] transform-all ease duration-300
                lg:p-2  lg:flex-row lg:w-[55%] lg:h-auto lg:items-center
                ${
                  user_isScroll
                    ? "lg:bg-[#F9F9F9] lg:bg-opacity-[85%] rounded-full m-2"
                    : ""
                }`}
        >
          {/* Welcome page button */}
          <div
            className={`w-[56%] transform-all ease duration-300
                    md:mx-2
                    lg:mx-4 lg:flex lg:flex-row lg:justify-center lg:items-center
                    ${
                      active_path === "/#welcome" ||
                      (active_path === "/" && router.pathname === "/")
                        ? "lg:h-[20%] lg:py-5 p-2 text-center rounded-2xl bg-[#FFFFFF] shadow-[rgba(0, 0, 0, 0.25)] shadow-md relative"
                        : "my-4 md:my-6 lg:my-4 lg:h-0"
                    }`}
          >
            <Link
              href="/#welcome"
              onClick={() =>
                setMobileNav((open_mobile_nav) => !open_mobile_nav)
              }
              className={`text-3xl font-light`}
            >
              Welcome
            </Link>
            <div
              className={`${
                active_path === "/#welcome" ||
                (active_path === "/" && router.pathname === "/")
                  ? "absolute top-[45%] right-[-20%] lg:top-[110%] lg:right-[50%] w-[10px] h-[10px] bg-[#36456F] rounded-full"
                  : "hidden"
              }`}
            ></div>
          </div>

          {/* About section button */}
          <div
            className={`w-[56%] transform-all ease duration-300
                    md:mx-2
                    lg:mx-4 lg:flex lg:flex-row lg:justify-center lg:items-center
                    ${
                      active_path === "/#about-me"
                        ? "lg:h-[20%] lg:py-5 p-2 text-center rounded-2xl bg-white shadow-[rgba(0, 0, 0, 0.25)] shadow-md relative"
                        : "my-4 md:my-6 lg:my-4  lg:h-0"
                    }`}
          >
            <Link
              href="/#about-me"
              onClick={() =>
                setMobileNav((open_mobile_nav) => !open_mobile_nav)
              }
              className={`text-3xl font-light`}
            >
              About
            </Link>
            <div
              className={`${
                active_path === "/#about-me"
                  ? "absolute top-[45%] right-[-20%] lg:top-[110%] lg:right-[50%] w-[10px] h-[10px] bg-[#36456F] rounded-full"
                  : "hidden"
              }`}
            ></div>
          </div>

          {/* Projects page button */}
          <div
            className={`w-[56%] transform-all ease duration-300
                    md:mx-2
                    lg:mx-4 lg:flex lg:flex-row lg:justify-center lg:items-center
                    ${
                      active_path === "/projects#project"
                        ? "lg:h-[20%] lg:py-5 p-2 text-center rounded-2xl bg-white shadow-[rgba(0, 0, 0, 0.25)] shadow-md relative"
                        : "my-4 md:my-6 lg:my-4  lg:h-0"
                    }`}
          >
            <Link
              href="/projects#project"
              onClick={() =>
                setMobileNav((open_mobile_nav) => !open_mobile_nav)
              }
              className={`text-3xl font-light`}
            >
              Projects
            </Link>
            <div
              className={`${
                active_path === "/projects#project"
                  ? "absolute top-[45%] right-[-20%] lg:top-[110%] lg:right-[50%] w-[10px] h-[10px] bg-[#36456F] rounded-full"
                  : "hidden"
              }`}
            ></div>
          </div>

          {/* Contact form section button */}
          <div
            className={`w-[56%] transform-all ease duration-300
                    md:mx-2
                    lg:mx-4 lg:flex lg:flex-row lg:justify-center lg:items-center
                    ${
                      active_path === "/projects#contact-me"
                        ? "lg:h-[20%] lg:py-5 p-2 text-center rounded-2xl bg-white shadow-[rgba(0, 0, 0, 0.25)] shadow-md relative"
                        : "my-4 md:my-6 lg:my-4  lg:h-0"
                    }`}
          >
            <Link
              href="/projects#contact-me"
              onClick={() =>
                setMobileNav((open_mobile_nav) => !open_mobile_nav)
              }
              className={`text-3xl font-light`}
            >
              Contact
            </Link>
            <div
              className={`${
                active_path === "/projects#contact-me"
                  ? "absolute top-[45%] right-[-20%] lg:top-[110%] lg:right-[50%] w-[10px] h-[10px] bg-[#36456F] rounded-full"
                  : "hidden"
              }`}
            ></div>
          </div>

          <div className="lg:hidden flex flex-row justify-around items-center w-full mt-8">
            <Link href="https://twitter.com/tonyc6731" target="_blank">
              <i
                aria-hidden
                className="fa-brands fa-x-twitter text-5xl text-[#36456F] active:scale-[0.90] transform-all ease duration-100"
              ></i>
            </Link>
            <div className="bg-[#36456F] w-[2.5px] h-[35px] mx-2 rounded-lg transform rotate-[30deg]"></div>
            <Link href="https://www.instagram.com/tonydev.io/" target="_blank">
              <i
                aria-hidden
                className="fa-brands fa-instagram text-5xl text-[#36456F] active:scale-[0.90] transform-all ease duration-100"
              ></i>
            </Link>
            <div className="bg-[#36456F] w-[2.5px] h-[35px] mx-2 rounded-lg transform rotate-[30deg]"></div>
            <Link
              href="https://www.linkedin.com/in/anthony-charette-3b2655252"
              target="_blank"
            >
              <i
                aria-hidden
                className="fa-brands fa-linkedin text-5xl text-[#36456F] active:scale-[0.90] transform-all ease duration-100"
              ></i>
            </Link>
            <div className="bg-[#36456F] w-[2.5px] h-[35px] mx-2 rounded-lg transform rotate-[30deg]"></div>
            <Link href="https://github.com/TonyChar3" target="_blank">
              <i
                aria-hidden
                className="fa-brands fa-github text-5xl text-[#36456F] active:scale-[0.90] transform-all ease duration-100"
              ></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
