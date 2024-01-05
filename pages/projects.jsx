import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsPage = () => {

    const [ mobile_open_details, setOpenDetails] = useState(false);
    const [mobile_open_stack, setOpenStack] = useState(false);

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
                <svg xmlns="http://www.w3.org/2000/svg" width="471" height="483" viewBox="0 0 471 483" fill="none" className="hidden lg:block absolute top-[-6%] left-0">
                    <path d="M470 0C470 266.201 259.574 482 0 482" stroke="#36456F" strokeWidth="2"/>
                </svg>
                <div className="w-full flex flex-col items-center">
                    {/* Projects cards */}
                    <div className="relative h-[35em] w-[80%] my-6 md:h-[33em] md:w-[60%] lg:w-[70%] 2xl:w-[60%] flex flex-col justify-center items-center rounded-3xl shadow-[#00000066] shadow-2xl z-[1] lg:hover:scale-[1.03] transition-all ease duration-300
                    bg-[url('https://ik.imagekit.io/bqofr3ncj/Portfolio/Re%CC%81seau%20(2).png?updatedAt=1704295302816')] 
                    bg-cover 
                    bg-right 
                    bg-no-repeat
                    bg-blend-multiply 
                    bg-black
                    bg-opacity-[5%]
                    lg:bg-[length:50%_100%]
                    lg:bg-left">
                        <motion.div 
                            layout
                            className={`absolute p-3 w-[90%] flex flex-col items-center bg-[#FFFFFF] rounded-xl text-[#36456F] transition-height ease duration-300 z-[0]
                            lg:static lg:ml-auto lg:right-0 lg:h-[100%] lg:w-[50%] lg:rounded-none lg:rounded-r-xl
                            ${mobile_open_details? 'h-[100%] bottom-0' : 'bottom-5 lg:bottom-0'}`}
                        >

                            <motion.div layout className="w-full pl-3 lg:pl-5">
                                <h3 className={`text-2xl lg:text-4xl font-bold ${mobile_open_details? "opacity-0 hidden" : "opacity-1 p-1 lg:p-2"}`}>Project Name</h3>
                                <div className={`bg-[#36456F] rounded-lg transition-height ease-out ${mobile_open_details? "hidden" : "w-[40%] h-[3px]"}`}></div>{/* Divider line */}
                            </motion.div>

                            <motion.div layout onClick={() => setOpenDetails(mobile_open_details => !mobile_open_details)} className={`lg:hidden flex flex-row items-center ${mobile_open_details? "justify-center w-[20%] self-start" : "mt-1 w-full"}`}>
                                <motion.i layout aria-hidden className={`fa-regular ${mobile_open_details? "fa-xmark rotate-180 font-bold text-3xl" : "fa-plus font-light text-lg"}`}></motion.i>
                                <p className={`text-lg ml-2 font-light ${mobile_open_details? "hidden" : ""}`}>See more</p>
                            </motion.div>

                            <Link href="https://www.chatbudy.io" target='_blank' className={`text-lg ml-2 font-light ${mobile_open_details? "absolute right-4 top-4" : "hidden lg:block lg:absolute lg:right-4 lg:top-4"}`}>see project →</Link>
                            <p className={`${mobile_open_details? "px-1 pt-2 max-h-[100%] overflow-y-auto" : "hidden lg:block lg:p-4 lg:text-xl"}`}>
                                ChatBudy.io is a full-stack application crafted with React, Node.js, Redis, and MongoDB. 
                                It empowers website owners to enhance user experience by enabling live chat support through a customizable widget embedded on their website. 
                                With a sleek and intuitive interface, ChatBudy.io ensures seamless communication between businesses and their website visitors, 
                                making customer interactions effortless and efficient. 
                                User’s can elevate their website's user engagement and support capabilities with ChatBudy.io.
                            </p>

                            <motion.div onClick={() => setOpenStack(mobile_open_stack => !mobile_open_stack)} className={`w-auto flex flex-col justify-center absolute bottom-1 left-2 z-[1] ${mobile_open_details? "" : "hidden"}`}>
                            <motion.div className="font-light text-3xl">
                                {
                                mobile_open_stack? 
                                <>
                                    <i aria-hidden className="fa-regular fa-chevron-down"></i>
                                </>
                                : 
                                <>
                                    <i aria-hidden className="fa-regular fa-chevron-up"></i>   
                                </>}
                            </motion.div>
                        </motion.div>
                        <motion.div layout className={`w-[85%]
                        ${mobile_open_details? "" : "hidden lg:block"} 
                        ${mobile_open_stack? "h-[30%] flex flex-row flex-wrap gap-5 justify-center items-center p-2 bg-white border-t-2 border-[#36456F]" : "h-0"}
                        lg:h-[100%] lg:w-[90%] lg:flex lg:flex-row lg:items-center lg:justify-around`}
                        >
                            {/* Stack icons */}
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/react.svg" alt="icon test" width="60" height="60" className="w-[100%] h-[100%]" />
                            </div>
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/node.svg" alt="icon test" width="60" height="60" className="w-[100%] h-[100%]" />
                            </div>
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/mongodb.svg" alt="stack image" width="60" height="60" className="w-[100%] h-[100%]"/>
                            </div>
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/redis.svg" alt="stack image" width="60" height="60" className="w-[100%] h-[100%]"/>
                            </div>
                        </motion.div>
                    </motion.div>
                    </div>  
                    <div className="relative h-[35em] w-[80%] md:h-[33em] md:w-[60%] my-6 lg:w-[70%] 2xl:w-[60%] flex flex-col justify-center items-center rounded-3xl shadow-[#00000066] shadow-2xl z-[1] lg:hover:scale-[1.03] transition-all ease duration-300 
                    bg-[url('https://ik.imagekit.io/bqofr3ncj/Portfolio/Re%CC%81seau%20(2).png?updatedAt=1704295302816')] 
                    bg-cover 
                    bg-right 
                    bg-no-repeat
                    bg-blend-multiply 
                    bg-black
                    bg-opacity-[5%]
                    lg:bg-[length:50%_100%]
                    lg:bg-left">
                        <motion.div 
                            layout
                            className={`absolute p-3 w-[90%] flex flex-col items-center bg-[#FFFFFF] rounded-xl text-[#36456F] transition-height ease duration-300 z-[0]
                            lg:static lg:ml-auto lg:right-0 lg:h-[100%] lg:w-[50%] lg:rounded-none lg:rounded-r-xl
                            ${mobile_open_details? 'h-[100%] bottom-0' : 'bottom-5 lg:bottom-0'}`}
                        >

                            <motion.div layout className="w-full pl-3 lg:pl-5">
                                <h3 className={`text-2xl lg:text-4xl font-bold ${mobile_open_details? "opacity-0 hidden" : "opacity-1 p-1 lg:p-2"}`}>Project Name</h3>
                                <div className={`bg-[#36456F] rounded-lg transition-height ease-out ${mobile_open_details? "hidden" : "w-[40%] h-[3px]"}`}></div>{/* Divider line */}
                            </motion.div>

                            <motion.div layout onClick={() => setOpenDetails(mobile_open_details => !mobile_open_details)} className={`lg:hidden flex flex-row items-center ${mobile_open_details? "justify-center w-[20%] self-start" : "mt-1 w-full"}`}>
                                <motion.i layout aria-hidden className={`fa-regular ${mobile_open_details? "fa-xmark rotate-180 font-bold text-3xl" : "fa-plus font-light text-lg"}`}></motion.i>
                                <p className={`text-lg ml-2 font-light ${mobile_open_details? "hidden" : ""}`}>See more</p>
                            </motion.div>

                            <Link href="https://www.chatbudy.io" target='_blank' className={`text-lg ml-2 font-light ${mobile_open_details? "absolute right-4 top-4" : "hidden lg:block lg:absolute lg:right-4 lg:top-4"}`}>see project →</Link>
                            <p className={`${mobile_open_details? "px-1 pt-2 max-h-[100%] overflow-y-auto" : "hidden lg:block lg:p-4 lg:text-xl"}`}>
                                ChatBudy.io is a full-stack application crafted with React, Node.js, Redis, and MongoDB. 
                                It empowers website owners to enhance user experience by enabling live chat support through a customizable widget embedded on their website. 
                                With a sleek and intuitive interface, ChatBudy.io ensures seamless communication between businesses and their website visitors, 
                                making customer interactions effortless and efficient. 
                                User’s can elevate their website's user engagement and support capabilities with ChatBudy.io.
                            </p>

                            <motion.div onClick={() => setOpenStack(mobile_open_stack => !mobile_open_stack)} className={`w-auto flex flex-col justify-center absolute bottom-1 left-2 z-[1] ${mobile_open_details? "" : "hidden"}`}>
                            <motion.div className="font-light text-3xl">
                                {
                                mobile_open_stack? 
                                <>
                                    <i aria-hidden className="fa-regular fa-chevron-down"></i>
                                </>
                                : 
                                <>
                                    <i aria-hidden className="fa-regular fa-chevron-up"></i>   
                                </>}
                            </motion.div>
                        </motion.div>
                        <motion.div layout className={`w-[85%]
                        ${mobile_open_details? "" : "hidden lg:block"} 
                        ${mobile_open_stack? "h-[30%] flex flex-row flex-wrap gap-5 justify-center items-center p-2 bg-white border-t-2 border-[#36456F]" : "h-0"}
                        lg:h-[100%] lg:w-[90%] lg:flex lg:flex-row lg:items-center lg:justify-around`}
                        >
                            {/* Stack icons */}
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/react.svg" alt="icon test" width="60" height="60" className="w-[100%] h-[100%]" />
                            </div>
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/node.svg" alt="icon test" width="60" height="60" className="w-[100%] h-[100%]" />
                            </div>
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/mongodb.svg" alt="stack image" width="60" height="60" className="w-[100%] h-[100%]"/>
                            </div>
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/redis.svg" alt="stack image" width="60" height="60" className="w-[100%] h-[100%]"/>
                            </div>
                        </motion.div>
                    </motion.div>
                    </div>  
                    <div className="relative h-[35em] w-[80%] md:h-[33em] md:w-[60%] my-6 lg:w-[70%] 2xl:w-[60%] flex flex-col justify-center items-center rounded-3xl shadow-[#00000066] shadow-2xl z-[1] lg:hover:scale-[1.03] transition-all ease duration-300 
                    bg-[url('https://ik.imagekit.io/bqofr3ncj/Portfolio/Re%CC%81seau%20(2).png?updatedAt=1704295302816')] 
                    bg-cover 
                    bg-right 
                    bg-no-repeat
                    bg-blend-multiply 
                    bg-black
                    bg-opacity-[5%]
                    lg:bg-[length:50%_100%]
                    lg:bg-left">
                        <motion.div 
                            layout
                            className={`absolute p-3 w-[90%] flex flex-col items-center bg-[#FFFFFF] rounded-xl text-[#36456F] transition-height ease duration-300 z-[0]
                            lg:static lg:ml-auto lg:right-0 lg:h-[100%] lg:w-[50%] lg:rounded-none lg:rounded-r-xl
                            ${mobile_open_details? 'h-[100%] bottom-0' : 'bottom-5 lg:bottom-0'}`}
                        >

                            <motion.div layout className="w-full pl-3 lg:pl-5">
                                <h3 className={`text-2xl lg:text-4xl font-bold ${mobile_open_details? "opacity-0 hidden" : "opacity-1 p-1 lg:p-2"}`}>Project Name</h3>
                                <div className={`bg-[#36456F] rounded-lg transition-height ease-out ${mobile_open_details? "hidden" : "w-[40%] h-[3px]"}`}></div>{/* Divider line */}
                            </motion.div>

                            <motion.div layout onClick={() => setOpenDetails(mobile_open_details => !mobile_open_details)} className={`lg:hidden flex flex-row items-center ${mobile_open_details? "justify-center w-[20%] self-start" : "mt-1 w-full"}`}>
                                <motion.i layout aria-hidden className={`fa-regular ${mobile_open_details? "fa-xmark rotate-180 font-bold text-3xl" : "fa-plus font-light text-lg"}`}></motion.i>
                                <p className={`text-lg ml-2 font-light ${mobile_open_details? "hidden" : ""}`}>See more</p>
                            </motion.div>

                            <Link href="https://www.chatbudy.io" target='_blank' className={`text-lg ml-2 font-light ${mobile_open_details? "absolute right-4 top-4" : "hidden lg:block lg:absolute lg:right-4 lg:top-4"}`}>see project →</Link>
                            <p className={`${mobile_open_details? "px-1 pt-2 max-h-[100%] overflow-y-auto" : "hidden lg:block lg:p-4 lg:text-xl"}`}>
                                ChatBudy.io is a full-stack application crafted with React, Node.js, Redis, and MongoDB. 
                                It empowers website owners to enhance user experience by enabling live chat support through a customizable widget embedded on their website. 
                                With a sleek and intuitive interface, ChatBudy.io ensures seamless communication between businesses and their website visitors, 
                                making customer interactions effortless and efficient. 
                                User’s can elevate their website's user engagement and support capabilities with ChatBudy.io.
                            </p>

                            <motion.div onClick={() => setOpenStack(mobile_open_stack => !mobile_open_stack)} className={`w-auto flex flex-col justify-center absolute bottom-1 left-2 z-[1] ${mobile_open_details? "" : "hidden"}`}>
                            <motion.div className="font-light text-3xl">
                                {
                                mobile_open_stack? 
                                <>
                                    <i aria-hidden className="fa-regular fa-chevron-down"></i>
                                </>
                                : 
                                <>
                                    <i aria-hidden className="fa-regular fa-chevron-up"></i>   
                                </>}
                            </motion.div>
                        </motion.div>
                        <motion.div layout className={`w-[85%]
                        ${mobile_open_details? "" : "hidden lg:block"} 
                        ${mobile_open_stack? "h-[30%] flex flex-row flex-wrap gap-5 justify-center items-center p-2 bg-white border-t-2 border-[#36456F]" : "h-0"}
                        lg:h-[100%] lg:w-[90%] lg:flex lg:flex-row lg:items-center lg:justify-around`}
                        >
                            {/* Stack icons */}
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/react.svg" alt="icon test" width="60" height="60" className="w-[100%] h-[100%]" />
                            </div>
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/node.svg" alt="icon test" width="60" height="60" className="w-[100%] h-[100%]" />
                            </div>
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/mongodb.svg" alt="stack image" width="60" height="60" className="w-[100%] h-[100%]"/>
                            </div>
                            <div className={`w-[60px] h-[60px] p-2 rounded-xl shadow-[#00000066] shadow-lg lg:shadow-[2px_2px_18px_3px_#00000040] animate-pulsate-fwd 
                            ${mobile_open_stack? "" : "hidden lg:block"}`}>
                                <Image src="/static/redis.svg" alt="stack image" width="60" height="60" className="w-[100%] h-[100%]"/>
                            </div>
                        </motion.div>
                    </motion.div>
                    </div> 
                </div> 
                <svg xmlns="http://www.w3.org/2000/svg" width="529" height="927" viewBox="0 0 529 927" fill="none" className="hidden lg:block absolute bottom-0 right-0 z-[0]">
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
                            <button type="button" className="w-full h-full absolute top-0 left-0 skew-x-[35deg]">
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