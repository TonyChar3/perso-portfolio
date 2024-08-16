import RevealAnimation from "../components/scroll_animate/RevealAnimate";
import ProjectCard from "../components/project/projectCard";
import LoadingSpinner from "../components/LoadingSpinner";

const ProjectsSection = ({ loading, project_list }) => {
  project_list = [];
  return (
    <>
      <div id="projects"></div>
      <RevealAnimation className="w-full h-[100%] p-6 flex flex-col justify-center items-center">
        <div className="text-left md:w-[100%] lg:w-[90%]">
          <h3 className="text-3xl font-bold md:text-4xl md:p-4 lg:p-3 text-white">
            My best
            <span className="mx-2 text-[#F7DC6F]">projects</span>
            so far...
          </h3>
        </div>
        <div className="w-full my-4 md:my-8 flex flex-col lg:flex-row justify-center items-center">
          {loading ? (
            <LoadingSpinner />
          ) : Array.isArray(project_list) && project_list.length ? (
            project_list.map((project, key) => (
              <ProjectCard
                key={key}
                project_name={project.projectName}
                id={project._id}
              />
            ))
          ) : (
            <>
              <div className="w-full flex flex-row justify-center items-center text-white">
                <h2>Projects coming soon</h2>
              </div>
            </>
          )}
        </div>
      </RevealAnimation>
    </>
  );
};

export default ProjectsSection;
