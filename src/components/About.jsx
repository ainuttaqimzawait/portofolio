import React from "react";
import aboutImg from "../assets/images/photo.jpg";


const About = () => {
    return (
        <section id="about" className="items-center py-16 text-white">
            <div className="text-center mt-6">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>
                <div
                    data-aos="fade-up"
                    className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto"
                >
                    <div className="p-3">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                I have an interest in Frontend and Backend web development, through studying at Eduwork's MERN Bootcamp. I also have the ability to develop web applications and teamwork and have several portfolios. Eager to pursue a career in frontend and backend web development and contribute to creating the best technology solutions.
                            </p>
                            <br />
                            <a href="https://drive.google.com/file/d/1yc2QfH671-qIlY5AABzJar_-qupsQRyT/view?usp=sharing">
                                <button className="bg-cyan-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-cyan-500">
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                        <div className="lg:w-72 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
                            <img
                                src={aboutImg}
                                alt=""
                                className="w-full object-cover bg-cyan-600 rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;