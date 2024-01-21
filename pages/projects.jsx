import { motion } from "framer-motion";
import { sendNewEmail } from "@/lib/projectFunctions";
import ProjectCard from "./components/ProjectCard";
import { useState, useEffect } from "react";
import { sanitizeFieldsValue } from "@/lib/security";
import { useMyContext } from "../context/appContext";
import LoadingSpinner from "./components/LoadingSpinner";
import RevealAnimation from "./components/scroll_animate/RevealAnimate";
import Link from "next/link";

const projects = () => {
  const { state, dispatch } = useMyContext();

  const [mobile_open_stack, setOpenStack] = useState(null);
  const [active_details, setActiveDetails] = useState(null);
  const [submit_button_state, setButtonState] = useState(false);

  const [client_name, setClientName] = useState("");
  const [client_email, setClientEmail] = useState("");
  const [email_subject, setEmailSubject] = useState("");
  const [email_message, setEmailMessage] = useState("");

  const resetFields = () => {
    setClientEmail("");
    setClientName("");
    setEmailMessage("");
    setEmailSubject("");
  };

  const toggleProjectDetails = (id) => {
    if (active_details === id) {
      setActiveDetails(null);
    } else {
      setActiveDetails(id);
    }
  };

  const toggleProjectStack = (id) => {
    if (mobile_open_stack === id) {
      setOpenStack(null);
    } else {
      setOpenStack(id);
    }
  };

  const sendEmailHandler = async (e) => {
    e.preventDefault();
    setButtonState(true);
    // check if any of input are empty
    if (
      client_email.length === 0 ||
      client_name.length === 0 ||
      email_subject.length === 0 ||
      email_message === 0
    ) {
      // show error
      dispatch({
        type: "OPEN_ERROR_MODAL",
        payload: { message: "Be sure to fill in all the required fields" },
      });
      setButtonState(false);
      return;
    } else {
      // if everything is filled
      if (
        sessionStorage.getItem("email-sent") &&
        sessionStorage.getItem("email-sent") === "true"
      ) {
        setButtonState(false);
        resetFields();
        dispatch({
          type: "OPEN_MODAL",
          payload: {
            message: "Email already sent, please check your inbox or spam",
          },
        });
        return;
      }
      // sanitize every input values
      const sanitized_values = sanitizeFieldsValue(
        client_email,
        client_name,
        email_subject,
        email_message
      );
      // send the new email
      const sending = await sendNewEmail(
        sanitized_values.san_name,
        sanitized_values.san_email,
        sanitized_values.san_subject,
        sanitized_values.san_message
      );
      // set loading state of the button and fields
      if (sending) {
        setButtonState(false);
        // block the button, set new button state
        sessionStorage.setItem("email-sent", true);
        // notify the user
        dispatch({
          type: "OPEN_MODAL",
          payload: { message: `${sending.message} 🎉` },
        });
        resetFields();
        return;
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("email-sent")) {
      setButtonState(true);
    }
  }, []);

  useEffect(() => {
    if (state.project_list.length > 0) {
      dispatch({ type: "DATA_LOADING", payload: { isLoading: false } });
    }
  }, [state.project_list]);

  return (
    <>
      {/* Projects showcase section */}
      <div id="project"></div>
      <motion.section
        className="relative min-h-[100%] w-full flex flex-col items-center justify-center my-10 lg:my-24 2xl:my-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="471"
          height="483"
          viewBox="0 0 471 483"
          fill="none"
          className="hidden md:block absolute top-[-11.5%] left-0"
        >
          <path
            d="M470 0C470 266.201 259.574 482 0 482"
            stroke="#36456F"
            strokeWidth="2"
          />
        </svg>
        <RevealAnimation className="w-full flex flex-col items-center">
          {state.data_loading ? (
            <LoadingSpinner />
          ) : Array.isArray(state.project_list) && state.project_list.length ? (
            state.project_list.map((project, key) => (
              <ProjectCard
                key={key}
                active_details={active_details}
                mobile_open_stack={mobile_open_stack}
                toggleDetails={toggleProjectDetails}
                toggleStack={toggleProjectStack}
                project={project}
                desktop_bg_img={project.imgUrl[0].url}
                mobile_bg_img={project.imgUrl[1].url}
              />
            ))
          ) : (
            <>
              <div>
                <h2>No projects to display at the moment...</h2>
              </div>
            </>
          )}
        </RevealAnimation>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="529"
          height="927"
          viewBox="0 0 529 927"
          fill="none"
          className="hidden md:block absolute bottom-0 right-0 z-[0]"
        >
          <path
            d="M531.5 926C238.513 926 1 718.932 1 463.5C1 208.068 238.513 1 531.5 1"
            stroke="#36456F"
            strokeWidth="2"
          />
        </svg>
      </motion.section>

      {/* Footer contact form section */}
      <motion.footer
        className="relative h-[100%] w-full text-white flex flex-col justify-end items-center bg-[#36456F]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="242"
          height="250"
          viewBox="0 0 242 307"
          fill="none"
          className="hidden lg:block absolute top-0 left-[-2%]"
        >
          <path
            d="M156.783 0.999955C235.244 44.5706 263.527 143.496 219.956 221.956C176.386 300.416 77.4601 328.7 -1 285.129"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
        <RevealAnimation className="absolute w-[100%] top-[13%] lg:top-[16%] left-auto right-auto text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            - Let's work together -
          </h3>
        </RevealAnimation>
        <form
          onSubmit={(e) => sendEmailHandler(e)}
          className="absolute w-full md:w-[70%] md:h-[60%] lg:w-[50%] lg:top-[25%] lg:left-[10%] lg:h-[70%] top-[22%] h-[62%] flex flex-col items-center justify-center z-[1]"
        >
          <RevealAnimation className="w-full p-3 m-1 md:m-2 flex justify-center items-center">
            <input
              type="text"
              name="user_name"
              autoComplete="true"
              placeholder="Your name"
              disabled={submit_button_state}
              value={client_name}
              onChange={(e) => setClientName(e.target.value)}
              className={`p-4 lg:p-5 w-[90%] bg-[#ffffff] bg-opacity-[30%] focus:bg-opacity-[53%] text-black placeholder:text-[#36456F] md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-light outline-none focus:border-[1px] focus:border-white 
                        ${
                          state.modal_error_mode
                            ? "border-[1px] border-red-500"
                            : ""
                        }
                        ${submit_button_state ? "bg-opacity-[70%]" : ""}`}
            />
          </RevealAnimation>
          <RevealAnimation className="w-full p-3 m-1 md:m-2 flex justify-center items-center">
            <input
              type="email"
              name="user_email"
              autoComplete="true"
              placeholder="Your email"
              disabled={submit_button_state}
              value={client_email}
              onChange={(e) => setClientEmail(e.target.value)}
              className={`p-4 lg:p-5 w-[90%] bg-[#ffffff] bg-opacity-[30%] focus:bg-opacity-[53%] text-black placeholder:text-[#36456F] md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-light outline-none focus:border-[1px] focus:border-white 
                        ${
                          state.modal_error_mode
                            ? "border-[1px] border-red-500"
                            : ""
                        }
                        ${submit_button_state ? "bg-opacity-[70%]" : ""}`}
            />
          </RevealAnimation>
          <RevealAnimation className="w-full p-3 m-1 md:m-2 flex justify-center items-center">
            <input
              type="text"
              name="user_subject"
              autoComplete="true"
              placeholder="Subject"
              disabled={submit_button_state}
              value={email_subject}
              onChange={(e) => setEmailSubject(e.target.value)}
              className={`p-4 lg:p-5 w-[90%] bg-[#ffffff] bg-opacity-[30%] focus:bg-opacity-[53%] text-black placeholder:text-[#36456F] md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-light outline-none focus:border-[1px] focus:border-white 
                        ${
                          state.modal_error_mode
                            ? "border-[1px] border-red-500"
                            : ""
                        }
                        ${submit_button_state ? "bg-opacity-[70%]" : ""}`}
            />
          </RevealAnimation>
          <RevealAnimation className="w-full h-[50%] my-2 lg:my-4 flex justify-center items-center lg:justify-start">
            <textarea
              name="message"
              id="message_input"
              placeholder="Your message..."
              disabled={submit_button_state}
              value={email_message}
              onChange={(e) => setEmailMessage(e.target.value)}
              className={`resize-none w-[90%] h-full p-3 overflow-y-auto text-black bg-[#ffffff] bg-opacity-[30%] focus:bg-opacity-[53%] placeholder:text-[#36456F] md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-light outline-none focus:border-[1px] focus:border-white 
                        ${
                          state.modal_error_mode
                            ? "border-[1px] border-red-500"
                            : ""
                        }
                        ${submit_button_state ? "bg-opacity-[70%]" : ""}`}
            ></textarea>
          </RevealAnimation>

          <RevealAnimation className="w-full p-2">
            <div
              className={`relative ml-8 w-[45%] h-[2.5em] md:w-[30%] lg:w-[32%] transform -skew-x-[35deg] lg:text-xl font-regular py-4 px-4 active:scale-[0.90] transition ease duration-100 ${
                submit_button_state
                  ? "bg-gray-300 text-white"
                  : "bg-white text-[#36456F]"
              } `}
            >
              <button
                type="submit"
                disabled={submit_button_state}
                className={`w-full h-full absolute top-0 left-0 skew-x-[35deg] active:scale-[0.90] transform-all ease duration-100`}
              >
                {submit_button_state ? "..." : "Submit →"}
              </button>
            </div>
          </RevealAnimation>
        </form>
        <div
          id="contact-me"
          className="absolute bottom-[11%] left-[36%] md:left-[33%] md:bottom-[13%] lg:bottom-[1%] lg:left-[25%] h-[10%] w-[18.5%] md:w-[15%] lg:w-[9%] lg:h-[17%] bg-[#1E3050] rounded-full z-[0]"
        ></div>
        {/* Bg circle */}
        <RevealAnimation className="w-full flex flex-row items-center justify-center lg:justify-end p-4">
          <div className="text-xs text-right">
            <p>powered by TonyChar3</p>
            <p>All rights reserved</p>
          </div>
          <div className="w-[5px] h-[80%] bg-white mx-2 rounded-lg"></div>
          <div className="w-[42%] md:w-[16%] lg:w-[15%] flex flex-row justify-around items-center">
            <Link href="https://twitter.com/tonyc6731" target="_blank">
              <i
                aria-hidden
                className="fa-brands fa-x-twitter text-lg md:text-2xl mx-1"
              ></i>
            </Link>
            <Link href="https://www.instagram.com/tonydev.io" target="_blank">
              <i
                aria-hidden
                className="fa-brands fa-instagram text-2xl mx-1"
              ></i>
            </Link>
            <Link
              href="www.linkedin.com/in/anthony-charette-3b2655252"
              target="_blank"
            >
              <i
                aria-hidden
                className="fa-brands fa-linkedin text-2xl mx-1"
              ></i>
            </Link>
            <Link href="https://github.com/TonyChar3" target="_blank">
              <i aria-hidden className="fa-brands fa-github text-2xl mx-1"></i>
            </Link>
          </div>
        </RevealAnimation>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="437"
          height="632"
          viewBox="0 0 437 632"
          fill="none"
          className="hidden lg:block absolute right-0"
        >
          <path
            d="M215.557 631.839C46.8025 570.687 -40.4267 384.311 20.725 215.557C81.8768 46.8025 268.253 -40.4267 437.007 20.725"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </motion.footer>
    </>
  );
};

export default projects;
