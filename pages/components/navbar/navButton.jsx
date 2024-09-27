import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const NavBarButton = ({
  title = "",
  link = "",
  setMobileNav = null,
  open_mobile_nav = false,
  user_scroll = false,
}) => {
  const router = useRouter();

  const [active_path, setActivePath] = useState(router.pathname);
  const [active_style, setActiveStyle] = useState(false);

  useEffect(() => {
    if (router) {
      setActivePath(router.asPath);
    }
  }, [router]);

  useEffect(() => {
    if (active_path === link) {
      setActiveStyle(true);
    }
  }, [active_path]);

  useEffect(() => {
    if (user_scroll == false) {
      setActiveStyle(false);
    }
  }, [user_scroll]);

  return (
    <>
      <div
        className={`w-[65%] md:w-[90%] lg:w-auto px-4 my-4 md:my-6 lg:my-4 lg:h-0 flex flex-row justify-end items-center transform-all ease duration-300
                    md:mx-2
                    lg:mx-8
                    lg:border-none
                    ${
                      active_path === link && active_style
                        ? "border-b-4 border-[#F7DC6F]"
                        : "border-b border-white"
                    }
                    `}
      >
        <div
          className={`w-[65%] md:w-[50%] lg:w-auto p-3 flex flex-row justify-start items-center rounded-3xl ${
            user_scroll ? "lg:bg-[#252525] lg:bg-opacity-95" : ""
          } transform-all ease duration-300`}
        >
          <Link
            href={link}
            onClick={() => setMobileNav((open_mobile_nav) => !open_mobile_nav)}
            className={`text-3xl md:text-4xl lg:text-3xl text-white
            ${
              active_path === link && active_style
                ? "font-medium"
                : "font-light"
            }
            `}
          >
            {title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBarButton;
