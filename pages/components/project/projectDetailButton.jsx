import Link from "next/link";

const ProjectDetailButton = ({ title = "", link = "", isDisabled = false }) => {
  return (
    <>
      {isDisabled ? (
        <span className="w-40 text-center text-white p-2 md:p-3 rounded-lg bg-gray-300 active:scale-[0.90] transition-all ease duration-300 cursor-pointer">
          <p className="text-md md:text-lg font-bold">{title}</p>
        </span>
      ) : (
        <>
          <Link
            href={link}
            target="_blank"
            className="w-40 text-center p-2 md:p-3 rounded-lg bg-[#F7DC6F] active:scale-[0.90] transition-all ease duration-300"
          >
            <p className="text-md md:text-lg font-bold">{title}</p>
          </Link>
        </>
      )}
    </>
  );
};

export default ProjectDetailButton;
