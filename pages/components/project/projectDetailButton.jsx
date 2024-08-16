import Link from "next/link";

const ProjectDetailButton = ({ title = "", link = "" }) => {
  return (
    <>
      <Link
        href={link}
        className="w-40 text-center p-2 md:p-3 rounded-lg bg-[#F7DC6F] active:scale-[0.90] transition-all ease duration-300"
      >
        <p className="text-md md:text-lg font-bold">{title}</p>
      </Link>
    </>
  );
};

export default ProjectDetailButton;
