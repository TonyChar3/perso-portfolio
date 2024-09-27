import RevealAnimation from "../scroll_animate/RevealAnimate";
import { useMyContext } from "@/context/appContext";

const StatusMessage = () => {
  const { state } = useMyContext();
  return (
    <>
      {/* Error message */}
      <RevealAnimation
        className={`w-full flex flex-row justify-center items-center p-1 my-2 md:mb-4 
            ${state.open_modal ? "" : "hidden"}
            ${
              state.modal_error_mode ? "text-red-400" : "text-white"
            } transition-all ease duration-300`}
      >
        <p
          className={`text-md md:text-lg font-bold ${
            state.modal_error_mode ? "underline" : ""
          }`}
        >
          {state.modal_msg || "Be sure to fill in all the required fields."}
        </p>
      </RevealAnimation>
    </>
  );
};

export default StatusMessage;
