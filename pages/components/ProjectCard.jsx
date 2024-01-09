import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ active_details, mobile_open_stack, toggleDetails, toggleStack, project, desktop_bg_img, mobile_bg_img }) => {

    return (
        <>
        {
            project ?
            <>
                <style jsx>{`
                    #project-${project._id || 0} {
                        background-image: url('${mobile_bg_img}');
                    }
                    @media (min-width: 1024px) {
                        #project-${project._id || 0} {
                            background-image: url('${desktop_bg_img}');
                        }
                    }
                `}</style>
                
                <div className={`relative h-[35em] w-[80%] my-6 md:h-[33em] md:w-[60%] lg:w-[70%] 2xl:w-[60%] flex flex-col justify-center items-center rounded-3xl shadow-[#00000066] shadow-2xl z-[1] lg:hover:scale-[1.03] transition-all ease duration-300 
                bg-cover
                bg-center 
                bg-no-repeat
                bg-blend-multiply 
                bg-black
                bg-opacity-[5%]
                lg:bg-[length:70%_100%]
                lg:bg-left`}
                id={`project-${project._id || 0}`}>
                    <motion.div 
                        layout
                        className={`absolute p-3 w-[90%] flex flex-col items-center bg-[#FFFFFF] rounded-xl text-[#36456F] transition-height ease duration-300 z-[0]
                        lg:static lg:ml-auto lg:right-0 lg:h-[100%] lg:w-[50%] lg:rounded-none lg:rounded-r-xl
                        ${active_details === project._id? 'h-[100%] bottom-0' : 'bottom-5 lg:bottom-0'}`}
                    >
                        <motion.div layout  className={`absolute right-5 lg:right-[21%] lg:top-[3%] ${active_details === project._id? "hidden" : ""}`}>
                            <Link href={project.repoUrl || "https://www.github.com"} target="_blank">
                                <i aria-hidden className="fa-brands fa-github text-3xl"></i>
                            </Link>
                        </motion.div>

                        <motion.div layout className="w-full pl-3 lg:pl-5">
                            <h3 className={`text-2xl lg:text-4xl font-bold ${active_details === project._id? "opacity-0 hidden" : "opacity-1 p-1 lg:p-2"}`}>{project.projectName || "Project Name"}</h3>
                            <div className={`bg-[#36456F] rounded-lg transition-height ease-out ${active_details === project._id? "hidden" : "w-[40%] h-[3px]"}`}></div>{/* Divider line */}
                        </motion.div>

                        <motion.div layout onClick={() => toggleDetails(project._id)} className={`lg:hidden flex flex-row items-center ${active_details === project._id? "justify-center w-[20%] self-start" : "mt-1 w-full"}`}>
                            <motion.i layout aria-hidden className={`fa-regular ${active_details === project._id? "fa-xmark rotate-180 font-bold text-3xl" : "fa-plus font-light text-lg"}`}></motion.i>
                            <p className={`text-lg ml-2 font-light ${active_details === project._id? "hidden" : ""}`}>See more</p>
                        </motion.div>

                        <Link href={project.projectUrl || "https://www.google.com" } target='_blank' className={`text-lg ml-2 font-light ${active_details === project._id? "absolute right-4 top-4" : "hidden lg:block lg:absolute lg:right-4 lg:top-4"}`}>see project →</Link>
                        <p className={`${active_details === project._id? "px-1 pt-2 max-h-[100%] overflow-y-auto" : "hidden lg:block lg:p-4 lg:text-xl"}`}>
                            { project.description }
                        </p>

                        <motion.div onClick={() => toggleStack(project._id)} className={`w-auto flex flex-col justify-center absolute bottom-1 left-2 z-[1] ${active_details === project._id? "" : "hidden"}`}>
                            <motion.div className="font-light text-3xl">
                                {
                                    mobile_open_stack === project._id? 
                                    <>
                                        <i aria-hidden className="fa-regular fa-chevron-down"></i>
                                    </>
                                    : 
                                    <>
                                        <i aria-hidden className="fa-regular fa-chevron-up"></i>   
                                        <span className="text-lg p-1 transition ease duration-100">stack</span>
                                    </>
                                }
                            </motion.div>
                        </motion.div>
                        <motion.div layout className={`w-[85%]
                        ${active_details === project._id? "" : "hidden lg:block"} 
                        ${mobile_open_stack === project._id? "h-[30%] flex flex-row flex-wrap gap-5 justify-center items-center p-2 bg-white border-t-2 border-[#36456F]" : "h-0"}
                        lg:h-[100%] lg:w-[90%] lg:flex lg:flex-row lg:items-center lg:justify-around`}
                        >
                            {
                                project.stack.map((icons, i) => (
                                    icons === null ?
                                    ''
                                    :
                                    <div key={i} className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                                    ${mobile_open_stack === project._id? "" : "hidden lg:block"}`}>
                                        <Image src={`/static/${icons.url}`} alt="icon test" width="60" height="60" className="w-[100%] h-[100%]" />
                                    </div>
                                ))
                            }
                        </motion.div>
                    </motion.div>
                </div> 
            </>
            :
            <div>
                Loading....
            </div>
        }
        </>
    )
}

export default ProjectCard;