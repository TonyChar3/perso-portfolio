import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <div className="text-center flex flex-col jusitfy-center items-center">
          <h2 className="text-3xl text-white font-bold">ERROR 404 NOT FOUND</h2>
          <Link
            href="/#welcome"
            className="bg-[#F7DC6F] text-[#252525] p-3 my-6 rounded-xl text-xl active:scale-[0.90] transform-all ease duration-300"
          >
            Return to safety
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
