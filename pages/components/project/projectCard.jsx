import Link from "next/link";

const ProjectCard = ({ project_name, id }) => {
  return (
    <>
      {project_name !== null > 0 ? (
        <>
          <Link
            href={{ pathname: "/projectDetail", query: { id: id } }}
            className="w-[45%] md:w-[35%] lg:w-[25%] 2xl:w-[20%] h-40 md:h-[15em] lg:h-80 m-4 lg:m-8 p-1 flex flex-row justify-center items-center bg-[#F7DC6F] rounded-md shadow-xl shadow-[#4B4B4B]"
          >
            <h3 className="text-xl md:text-2xl lg:text-4xl font-medium">
              {project_name}
            </h3>
          </Link>
        </>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};

export default ProjectCard;
