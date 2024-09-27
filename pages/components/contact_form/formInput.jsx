import { useMyContext } from "@/context/appContext";
import RevealAnimation from "../scroll_animate/RevealAnimate";

const FormInput = ({
  name,
  placeholder,
  input_value,
  on_change,
  submit_button_state,
}) => {
  const { state } = useMyContext();
  return (
    <>
      <RevealAnimation className="w-full p-2 m-1 md:m-4 flex justify-center items-center">
        <input
          type="text"
          name={name}
          autoComplete="true"
          placeholder={placeholder}
          disabled={submit_button_state}
          value={input_value}
          onChange={(e) => on_change(e.target.value)}
          className={`p-4 lg:p-5 w-[90%] bg-transparent border focus:text-black focus:bg-white focus:bg-opacity-[53%] placeholder:text-white focus:placeholder:text-black md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-medium outline-none rounded-lg
                          ${
                            state.modal_error_mode
                              ? "border-red-400"
                              : "border-white"
                          }
                          ${submit_button_state ? "bg-opacity-[70%]" : ""}`}
        />
      </RevealAnimation>
    </>
  );
};

export default FormInput;
