import { useEffect, useState } from "react";
import { sendNewEmail } from "@/lib/projectFunctions";
import { motion } from "framer-motion";
import { sanitizeFieldsValue } from "@/lib/security";
import { useMyContext } from "@/context/appContext";
import RevealAnimation from "../components/scroll_animate/RevealAnimate";
import Link from "next/link";
import StatusMessage from "../components/contact_form/contactFormStatusMessage";
import FormInput from "../components/contact_form/formInput";
import FormTextArea from "../components/contact_form/formTextArea";

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
                <i aria-hidden className="fa-light fa-envelope text-2xl"></i>
              </div>
            </div>

            {/* Socials icons */}
            <RevealAnimation className="hidden lg:flex flex-row justify-center items-center my-10 w-[90%]">
              <div className="w-16 mx-4 flex flex-row justify-center bg-[#252525] p-3 rounded-full shadow-lg shadow-[#4B4B4B] hover:shadow-[#F7DC6F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100">
                <Link href="https://twitter.com/tonyc6731" target="_blank">
                  <i
                    aria-hidden
                    className="bi bi-twitter-x text-4xl text-white"
                  ></i>
                </Link>
              </div>

              <div className="w-16 mx-4 flex flex-row justify-center bg-[#252525] p-3 rounded-full shadow-lg shadow-[#4B4B4B] hover:shadow-[#F7DC6F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100">
                <Link href="#">
                  <i
                    aria-hidden
                    className="bi bi-instagram text-4xl text-white"
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
                    className="bi bi-linkedin text-4xl text-white"
                  ></i>
                </Link>
              </div>

              <div className="w-16 mx-4 flex flex-row justify-center bg-[#252525] p-3 rounded-full shadow-lg shadow-[#4B4B4B] hover:shadow-[#F7DC6F] active:scale-[0.90] hover:scale-[1.05] transform-all ease duration-100">
                <Link href="https://github.com/TonyChar3" target="_blank">
                  <i
                    aria-hidden
                    className="bi bi-github text-4xl text-white"
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
            <FormInput
              name="user_name"
              placeholder={"full name"}
              input_value={client_name}
              on_change={setClientName}
              submit_button_state={submit_button_state}
            />

            {/* Email */}
            <FormInput
              name="user_email"
              placeholder={"your@emailAddress.com"}
              input_value={client_email}
              on_change={setClientEmail}
              submit_button_state={submit_button_state}
            />

            {/* Subject */}
            <FormInput
              name="user_subject"
              placeholder={"subject"}
              input_value={email_subject}
              on_change={setEmailSubject}
              submit_button_state={submit_button_state}
            />

            {/* Message */}
            <FormTextArea
              name="message"
              placeholder={"your message..."}
              input_value={email_message}
              on_change={setEmailMessage}
              submit_button_state={submit_button_state}
            />

            <RevealAnimation className="w-full px-6 my-1">
              <StatusMessage />
              <button
                type="submit"
                disabled={submit_button_state}
                className={`w-[40%] p-2 my-4 md:p-3 md:text-2xl rounded-2xl active:scale-[0.90] transform-all ease duration-100
                ${
                  submit_button_state
                    ? "bg-gray-300 text-white"
                    : "bg-[#F7DC6F] text-black"
                } 
                `}
              >
                {submit_button_state ? "..." : "Submit"}
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
                className="bi bi-twitter-x text-lg md:text-2xl mx-1"
              ></i>
            </Link>
            <Link href="https://www.instagram.com/tonydev.io" target="_blank">
              <i className="bi bi-instagram text-2xl mx-1"></i>
            </Link>
            <Link
              href="www.linkedin.com/in/anthony-charette-3b2655252"
              target="_blank"
            >
              <i aria-hidden className="bi bi-linkedin text-2xl mx-1"></i>
            </Link>
            <Link href="https://github.com/TonyChar3" target="_blank">
              <i aria-hidden className="bi bi-github text-2xl mx-1"></i>
            </Link>
          </div>
        </RevealAnimation>
      </motion.footer>
    </>
  );
};

export default ContactForm;
