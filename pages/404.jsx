import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="471"
          height="483"
          viewBox="0 0 471 483"
          fill="none"
          className="hidden lg:block absolute top-[-11.5%] left-0"
        >
          <path
            d="M470 0C470 266.201 259.574 482 0 482"
            stroke="#36456F"
            strokeWidth="2"
          />
        </svg>
        <div className="text-center flex flex-col jusitfy-center items-center">
          <h2 className="text-3xl text-[#36456F] font-bold">
            ERROR 404 NOT FOUND
          </h2>
          <Link
            href="/#welcome"
            className="bg-[#36456F] text-white p-3 my-6 rounded-xl text-xl active:scale-[0.90] transform-all ease duration-300"
          >
            Return to safety
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="529"
          height="927"
          viewBox="0 0 529 927"
          fill="none"
          className="hidden lg:block absolute bottom-0 right-0 z-[0]"
        >
          <path
            d="M531.5 926C238.513 926 1 718.932 1 463.5C1 208.068 238.513 1 531.5 1"
            stroke="#36456F"
            strokeWidth="2"
          />
        </svg>
      </div>
    </>
  );
};

export default ErrorPage;
