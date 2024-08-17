const ScrollDownMessage = ({ show, message, hidden = "" }) => {
  return (
    <>
      {/* Scroll down message */}
      <div
        className={`h-[7%] absolute bottom-0 
        ${show ? "opacity-0" : ""}
        ${hidden}
         transition-all ease duration-300`}
      >
        <p className="text-sm font-light animate-pulse text-[#F7DC6F]">
          {message}
        </p>
        <p className="text-center text-sm font-light animate-pulse text-white">
          <i aria-hidden className="fa-light fa-caret-down mx-auto"></i>
        </p>
      </div>
    </>
  );
};

export default ScrollDownMessage;
