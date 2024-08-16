import RevealAnimation from "../components/scroll_animate/RevealAnimate";
import SkillRectangle from "../components/skillRectangle";

const AboutMeSection = () => {
  return (
    <>
      <div id="about-me"></div>
      <div className="w-full lg:h-full p-6 flex flex-col lg:flex-row items-center justify-center lg:justify-around text-[#36456F]">
        {/* About me paragraph */}
        <RevealAnimation className="w-full lg:w-[55%] h-[100%] my-8 flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="md:w-[80%] lg:order-2 lg:w-[100%] text-white">
            <h2 className="text-3xl md:text-4xl md:p-2 font-bold lg:text-5xl lg:p-3">
              A bit
              <span className="ml-2 text-[#F7DC6F]">about me</span>.
            </h2>
            {/* Small about me paragraph */}
            <div className="p-2 text-left font-light text-lg lg:text-xl">
              <div className="my-2 lg:my-6">
                Born in Rouyn-Noranda, Quebec, and now calling the city of
                Gatineau my home, I'm a driven full-stack developer with 3 years
                of coding experience.
              </div>
              <div className="my-4 lg:my-6">
                When I'm not crafting high-performance apps, you can catch me
                binge-watching Netflix or pushing my limits at the gym. With a
                growth mindset and an insatiable hunger for knowledge, I strive
                daily to surpass my yesterday's self. Passionate about
                harnessing technology to drive business success and shape a
                better future, I'm dedicated everyday to deliver exceptional
                results. I'm excited to join forces with like-minded individuals
                who share my enthusiasm for innovation and excellence.
              </div>
            </div>
          </div>
        </RevealAnimation>

        {/* My Skills show case */}
        <div className="w-full md:w-[80%] lg:w-[30%] my-4">
          <div className="flex flex-row flex-wrap">
            <SkillRectangle skill={"React"} />
            <SkillRectangle skill={"HTML"} />
            <SkillRectangle skill={"CSS"} />
            <SkillRectangle skill={"JS"} />
            <SkillRectangle skill={"PHP"} />
            <SkillRectangle skill={"Laravel"} />
            <SkillRectangle skill={"ASP.NET"} />
          </div>
          <div className="flex flex-row flex-wrap my-4 lg:my-6">
            <SkillRectangle skill={"Kotlin"} />
            <SkillRectangle skill={"Swift"} />
          </div>
          <div className="flex flex-row flex-wrap">
            <SkillRectangle skill={"MongoDB"} />
            <SkillRectangle skill={"MySQL"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
