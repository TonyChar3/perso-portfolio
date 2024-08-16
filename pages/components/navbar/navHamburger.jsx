import { useRouter } from "next/router";

const NavHamburger = ({ setMobileNav, open_mobile_nav, user_isScroll }) => {
  const router = useRouter();

  return (
    <>
      {/* Hamburger/fries menu */}
      <div
        className={`absolute w-[15%] lg:hidden p-3 flex flex-row justify-center items-center cursor-pointer z-30 transform-all ease duration-300
            md:p-3 md:w-[9%]
            ${router.pathname === "/projectDetail" ? "hidden" : ""}
            ${
              user_isScroll
                ? "bg-[#252525] color-white bg-opacity-[95%] rounded-full m-3"
                : ""
            }
            ${open_mobile_nav ? "bg-opacity-0" : ""}`}
        onClick={() => setMobileNav((open_mobile_nav) => !open_mobile_nav)}
      >
        <div className="w-[90%] md:w-[75%] mx-auto flex flex-col justify-center items-start group">
          <div
            className={`h-1 w-8 my-[.4em] rounded-full bg-[#F7DC6F] transition ease transform duration-300
                    md:h-[4.5px] md:w-10 md:my-[.6em]
                    ${
                      open_mobile_nav
                        ? "rotate-45 translate-y-2 md:translate-y-3"
                        : ""
                    }`}
          />

          <div
            className={`h-1 w-6 rounded-full bg-[#FFFFFF] transition ease transform duration-300 
                    md:h-[4.5px] md:w-8
                    ${open_mobile_nav ? "-translate-x-2 opacity-0" : ""}`}
          />

          <div
            className={`h-1 my-[.36em] rounded-full bg-[#FFFFFF] transition ease transform duration-300 
                    md:h-[4.5px] md:w-[100%] md:my-[.6em] 
                    ${
                      open_mobile_nav
                        ? "w-8 -rotate-45 -translate-y-3 md:-translate-y-4"
                        : "w-4 md:w-6"
                    }`}
          />
        </div>
      </div>
    </>
  );
};

export default NavHamburger;
