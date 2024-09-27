import { useMyContext } from "@/context/appContext";
import RevealAnimation from "../scroll_animate/RevealAnimate";

const FormTextArea = ({
  name,
  placeholder,
  input_value,
  on_change,
  submit_button_state,
}) => {
  const { state } = useMyContext();
  return (
    <>
      <RevealAnimation className="w-full h-[50%] my-2 md:my-4 flex justify-center items-center lg:justify-start">
        <textarea
          name={name}
          id="message_input"
          placeholder={placeholder}
          disabled={submit_button_state}
          value={input_value}
          onChange={(e) => on_change(e.target.value)}
          className={`resize-none w-[90%] h-full p-3 overflow-y-auto border focus:text-black bg-transparent border focus:bg-white focus:bg-opacity-[53%] placeholder:text-white focus:placeholder:text-black md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-medium outline-none focus:border-[1px] focus:border-white rounded-lg 
                          ${
                            state.modal_error_mode
                              ? "border-red-400"
                              : "border-white"
                          }
                          ${submit_button_state ? "bg-opacity-[70%]" : ""}`}
        ></textarea>
      </RevealAnimation>
    </>
  );
};

export default FormTextArea;
