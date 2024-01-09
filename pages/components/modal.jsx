import { useMyContext } from "../../context/appContext";

const Modal = () => {

    const { state } = useMyContext();

    return (
        <>
            <div className={`absolute top-5 right-2 lg:top-[20%] max-w-[75%] z-10 bg-white p-3 rounded-2xl transition transform-all ease duration-300 
            ${state.open_modal? "translate-x-0 opacity-[100%]" : "-translate-x-[-200%] opacity-0"} 
            ${state.modal_error_mode? "border-2 border-red-500" : ""}`}>
                <h2 className={`font-regular ${state.modal_error_mode? "text-red-500" : "text-[#36456F]"} text-xl`}>
                    {state.modal_msg || "Be sure to fill in all the required fields."}
                </h2>
            </div>
        </>
    )
}

export default Modal;

// 