import { useEffect, useState } from "react";
import { sendNewEmail } from "@/lib/projectFunctions";
import { motion } from "framer-motion";
import { sanitizeFieldsValue } from "@/lib/security";
import { useMyContext } from "@/context/appContext";
import RevealAnimation from "../components/scroll_animate/RevealAnimate";
import Link from "next/link";

const ContactForm = () => {
  const { state, dispatch } = useMyContext();
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

  return (
    <>
      {/* Footer contact form section */}
      <div id="contact-me"></div>
      <motion.footer
        className="relative h-[100%] w-full text-white flex flex-col justify-end items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <div className="w-full h-[80%] flex flex-row justify-center items-center">
          <div className="hidden w-[40%] h-[80%] lg:flex flex-col items-center">
            {/* Email container */}
            <div className="w-[70%] h-[20%] my-8 p-3 flex justify-center items-center rounded-lg border-2 border-[#F7DC6F]">
              <div className="w-[70%] flex flex-row justify-around items-center">
                <p className="text-xl underline font-light">
                  tonyc6731@gmail.com
                </p>
                <i className="fa-light fa-envelope text-2xl"></i>
              </div>
            </div>

            {/* Socials icons */}
            <RevealAnimation className="hidden lg:flex flex-row justify-center items-center my-10 w-[90%]">
              <div className="w-16 mx-4 flex flex-row justify-center bg-[#252525] p-3 rounded-full shadow-lg shadow-[#4B4B4B] hover:shadow-[#F7DC6F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100">
                <Link href="https://twitter.com/tonyc6731" target="_blank">
                  <i
                    aria-hidden
                    className="fa-brands fa-x-twitter text-4xl text-white"
                  ></i>
                </Link>
              </div>

              <div className="w-16 mx-4 flex flex-row justify-center bg-[#252525] p-3 rounded-full shadow-lg shadow-[#4B4B4B] hover:shadow-[#F7DC6F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100">
                <Link href="#">
                  <i
                    aria-hidden
                    className="fa-brands fa-instagram text-4xl text-white"
                  ></i>
                </Link>
              </div>

              <div className="w-16 mx-4 flex flex-row justify-center bg-[#252525] p-3 rounded-full shadow-lg shadow-[#4B4B4B] hover:shadow-[#F7DC6F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100">
                <Link
                  href="https://www.linkedin.com/in/anthony-charette-3b2655252"
                  target="_blank"
                >
                  <i
                    aria-hidden
                    className="fa-brands fa-linkedin text-4xl text-white"
                  ></i>
                </Link>
              </div>

              <div className="w-16 mx-4 flex flex-row justify-center bg-[#252525] p-3 rounded-full shadow-lg shadow-[#4B4B4B] hover:shadow-[#F7DC6F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100">
                <Link href="https://github.com/TonyChar3" target="_blank">
                  <i
                    aria-hidden
                    className="fa-brands fa-github text-4xl text-white"
                  ></i>
                </Link>
              </div>
            </RevealAnimation>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => sendEmailHandler(e)}
            className="w-full md:w-[70%] md:h-[90%] lg:w-[50%] lg:h-[90%] 2xl:w-[40%] h-[62%] flex flex-col items-center justify-center"
          >
            {/* Name */}
            <RevealAnimation className="w-full p-3 m-1 md:m-4 flex justify-center items-center">
              <input
                type="text"
                name="user_name"
                autoComplete="true"
                placeholder="Your name"
                disabled={submit_button_state}
                value={client_name}
                onChange={(e) => setClientName(e.target.value)}
                className={`p-4 lg:p-5 w-[90%] bg-transparent border focus:bg-white focus:bg-opacity-[53%] text-black placeholder:text-white md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-medium outline-none
                          ${
                            state.modal_error_mode
                              ? "border-red-500"
                              : "border-white"
                          }
                          ${submit_button_state ? "bg-opacity-[70%]" : ""}`}
              />
            </RevealAnimation>

            {/* Email */}
            <RevealAnimation className="w-full p-3 m-1 md:m-4 flex justify-center items-center">
              <input
                type="email"
                name="user_email"
                autoComplete="true"
                placeholder="Your email"
                disabled={submit_button_state}
                value={client_email}
                onChange={(e) => setClientEmail(e.target.value)}
                className={`p-4 lg:p-5 w-[90%] bg-transparent border focus:bg-white focus:bg-opacity-[53%] border focus:bg-opacity-[53%] text-black placeholder:text-white md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-medium outline-none
                          ${
                            state.modal_error_mode
                              ? "border-red-500"
                              : "border-white"
                          }
                          ${submit_button_state ? "bg-opacity-[70%]" : ""}`}
              />
            </RevealAnimation>

            {/* Subject */}
            <RevealAnimation className="w-full p-3 m-1 md:m-4 flex justify-center items-center">
              <input
                type="text"
                name="user_subject"
                autoComplete="true"
                placeholder="Subject"
                disabled={submit_button_state}
                value={email_subject}
                onChange={(e) => setEmailSubject(e.target.value)}
                className={`p-4 lg:p-5 w-[90%] bg-transparent border focus:bg-white focus:bg-opacity-[53%] border focus:bg-opacity-[53%] text-black placeholder:text-white md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-medium outline-none 
                          ${
                            state.modal_error_mode
                              ? "border-red-500"
                              : "border-white"
                          }
                          ${submit_button_state ? "bg-opacity-[70%]" : ""}`}
              />
            </RevealAnimation>

            {/* Message */}
            <RevealAnimation className="w-full h-[50%] my-2 md:my-4 flex justify-center items-center lg:justify-start">
              <textarea
                name="message"
                id="message_input"
                placeholder="Your message..."
                disabled={submit_button_state}
                value={email_message}
                onChange={(e) => setEmailMessage(e.target.value)}
                className={`resize-none w-[90%] h-full p-3 overflow-y-auto border text-black bg-transparent border focus:bg-white focus:bg-opacity-[53%] placeholder:text-white md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-medium outline-none focus:border-[1px] focus:border-white 
                          ${
                            state.modal_error_mode
                              ? "border-red-500"
                              : "border-white"
                          }
                          ${submit_button_state ? "bg-opacity-[70%]" : ""}`}
              ></textarea>
            </RevealAnimation>

            <RevealAnimation className="w-full px-6 my-4">
              <button
                type="submit"
                disabled={submit_button_state}
                className={`w-[40%] p-2 md:p-3 md:text-2xl rounded-3xl active:scale-[0.90] transform-all ease duration-100
                ${
                  submit_button_state
                    ? "bg-gray-300 text-white"
                    : "bg-[#F7DC6F] text-black"
                } 
                `}
              >
                {submit_button_state ? "..." : "Send"}
              </button>
            </RevealAnimation>
          </form>
        </div>

        {/* Copyright w/ socials icons */}
        <RevealAnimation className="w-full flex flex-row items-center justify-center p-4">
          <div className="text-xs text-right">
            <p>powered by TonyChar3</p>
            <p>All rights reserved</p>
          </div>
          <div className="w-[5px] h-[80%] bg-white mx-2 rounded-lg"></div>
          <div className="w-[42%] md:w-[35%] lg:hidden flex flex-row justify-around items-center">
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
      </motion.footer>
    </>
  );
};

export default ContactForm;
