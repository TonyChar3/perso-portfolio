import { motion } from 'framer-motion';
import { fetchProjects } from '@/lib/projectPage';
import ProjectCard from './components/projectCard';
import { useState, useEffect } from 'react';

export async function getServerSideProps() {
    try{
        const project_list = await fetchProjects();
        return {
            props: {
                project_list: project_list || []
            }
        }
    } catch(err){
        console.log(err)
    }
}

const ProjectsPage = ({ project_list }) => {

    const [mobile_open_stack, setOpenStack] = useState(null);
    const [active_details, setActiveDetails] = useState(null);

    const toggleProjectDetails = (id) => {
        if(active_details === id){
            setActiveDetails(null);
        } else {
            setActiveDetails(id);
        }
    }

    const toggleProjectStack = (id) => {
        if(mobile_open_stack === id) {
            setOpenStack(null);
        } else {
            setOpenStack(id);
        }
    }

    return (
        <>
            {/* Projects showcase section */}
            <div id="project"></div>
            <motion.section 
            className="relative min-h-[100%] w-full flex flex-col items-center justify-center my-10 lg:my-24 2xl:my-28"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="471" height="483" viewBox="0 0 471 483" fill="none" className="hidden md:block absolute top-[-11.5%] left-0">
                    <path d="M470 0C470 266.201 259.574 482 0 482" stroke="#36456F" strokeWidth="2"/>
                </svg>
                <div className="w-full flex flex-col items-center">
                    {
                        Array.isArray(project_list) && project_list.length ?
                        project_list.map((project, key) => (
                            <ProjectCard
                                key={key}
                                active_details={active_details}
                                mobile_open_stack={mobile_open_stack}
                                toggleDetails={toggleProjectDetails}
                                toggleStack={toggleProjectStack}
                                project={project}
                                desktop_bg_img={project.imgUrl[0].url} 
                                mobile_bg_img={project.imgUrl[1].url}
                            />
                        ))
                        :
                        <>
                            <div>
                                <h2>No projects to display at the moment...</h2>
                            </div>
                        </>
                    } 
                </div> 
                <svg xmlns="http://www.w3.org/2000/svg" width="529" height="927" viewBox="0 0 529 927" fill="none" className="hidden md:block absolute bottom-0 right-0 z-[0]">
                    <path d="M531.5 926C238.513 926 1 718.932 1 463.5C1 208.068 238.513 1 531.5 1" stroke="#36456F" strokeWidth="2"/>
                </svg>
            </motion.section>

            {/* Footer contact form section */}
            <motion.footer
                className="relative h-[100%] w-full text-white flex flex-col justify-end items-center bg-[#36456F]"

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
                <div className="absolute w-[100%] top-[13%] lg:top-[16%] left-auto right-auto text-center">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">- Let's work together -</h3>
                </div>
                <form className="absolute w-full md:w-[70%] md:h-[60%] lg:w-[50%] lg:top-[25%] lg:left-[10%] lg:h-[70%] top-[22%] h-[62%] flex flex-col items-center justify-center z-[1]">
                    <div className="w-full p-3 m-1 md:m-2 flex justify-center items-center">
                        <input type="text" name="user_name" autoComplete='true' placeholder="Your name" className="p-4 lg:p-5 w-[90%] bg-[#ffffff] bg-opacity-[30%] focus:bg-opacity-[53%] text-black placeholder:text-[#36456F] md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-light outline-none focus:border-[1px] focus:border-white" />
                    </div>
                    <div className="w-full p-3 m-1 md:m-2 flex justify-center items-center">
                        <input type="email" name="user_email" autoComplete='true' placeholder="Your email" className="p-4 lg:p-5 w-[90%] bg-[#ffffff] bg-opacity-[30%] focus:bg-opacity-[53%] text-black placeholder:text-[#36456F] md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-light outline-none focus:border-[1px] focus:border-white"/>
                    </div>
                    <div className="w-full p-3 m-1 md:m-2 flex justify-center items-center">
                        <input type="text" name="user_subject" autoComplete='true' placeholder="Subject" className="p-4 lg:p-5 w-[90%] bg-[#ffffff] bg-opacity-[30%] focus:bg-opacity-[53%] text-black placeholder:text-[#36456F] md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-light outline-none focus:border-[1px] focus:border-white"/>
                    </div>
                    <textarea name="message" id="message_input" placeholder="Your message..." className="resize-none w-[90%] h-[50%] p-3 my-2 lg:my-4 overflow-y-auto text-black bg-[#ffffff] bg-opacity-[30%] focus:bg-opacity-[53%] placeholder:text-[#36456F] md:placeholder:text-lg lg:placeholder:text-xl placeholder:font-light outline-none focus:border-[1px] focus:border-white"></textarea>
                    <div className="w-full p-2">
                        <div className="relative ml-8 w-[45%] h-[2.5em] md:w-[30%] lg:w-[32%] transform -skew-x-[35deg] bg-white text-[#36456F] lg:text-xl font-regular py-4 px-4 active:scale-[0.90] transition ease duration-100">
                            <button onClick={() => handleGetProject()} type="button" className="w-full h-full absolute top-0 left-0 skew-x-[35deg]">
                                Submit →
                            </button>
                        </div>
                    </div>
                </form>
                <div id="contact-me" className="absolute bottom-[11%] left-[36%] md:left-[33%] md:bottom-[13%] lg:bottom-[5%] lg:left-[25%] h-[10%] w-[18.5%] md:w-[15%] lg:w-[10%] lg:h-[17%] bg-[#1E3050] rounded-full z-[0]"></div>{/* Bg circle */}
                <div className="w-full flex flex-row items-center justify-center lg:justify-end p-2">
                    <div className="text-xs text-right">
                        <p>powered by TonyChar3</p>
                        <p>All rights reserved</p>
                    </div>
                    <div className="w-[5px] h-[80%] bg-white mx-2 rounded-lg"></div>
                    <div className="w-[30%] md:w-[16%] lg:w-[20%] flex flex-row justify-around items-center">
                        <i aria-hidden className="fa-brands fa-instagram text-2xl mx-1"></i>
                        <i aria-hidden className="fa-brands fa-linkedin text-2xl mx-1"></i>
                        <i aria-hidden className="fa-brands fa-github text-2xl mx-1"></i>
                    </div>
                </div>
            </motion.footer>
        </>
    )
}

export default ProjectsPage