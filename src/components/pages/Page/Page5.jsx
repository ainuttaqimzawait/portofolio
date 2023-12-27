import project3 from "../../../assets/images/berita.png";
import { FaAngleLeft, FaAngleRight, FaReact } from "react-icons/fa";
import { SiBootstrap, SiExpress, SiHtml5, SiMongodb } from "react-icons/si";

const Page5 = ({ sendDataToParent }) => {
    const projects = [
        {
            img: project3,
            name: "News App",
            description: "A system that displays news updates from the NEWS API",
            tools: [
                { name: "React Js", icon: <FaReact /> },
                { name: "Bootstrap", icon: <SiBootstrap /> },
            ],
            github_link: "https://github.com/ainuttaqimzawait/portal-berita.git",
        }
    ];

    return (
        <div className="absolute left-0 h-full w-full flex flex-col justify-center items-center px-3 bg-gradient-to-r from-gray-100 from-80% to-gray-300 page-back">
            <div className="text-center mt-7">
                <h3 className="text-4xl font-semibold">
                    News <span className="text-cyan-600">App</span>
                </h3>
            </div>
            <div className="w-full px-6">
                <div
                    className="grid grid-cols-1 gap-6"
                >
                    {projects.map((project_info, i) => (
                        <div key={i} className="rounded-xl p-6 text-center">
                            <img src={project_info.img} alt="" className="rounded-lg" />
                            <p className="text-sm text-left my-3">
                                {project_info.description}
                            </p>
                            <div className="text-sm text-left my-3">
                                <p>
                                    <strong>Tools:</strong>
                                </p>
                                <div className="p-2 flex items-center">
                                    {project_info.tools.map((tool, index) => (
                                        <div key={index} className="flex items-center mr-4">
                                            {tool.icon}
                                            {/* <span className="ml-2">{tool.name}</span> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={project_info.github_link}
                                    // target="_blank"
                                    className="text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out flex items-center justify-center text-sm sm:text-base"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="absolute left-2 text-gray-400 hover:cursor-pointer bottom-3" onClick={() => sendDataToParent('z-30')}>
                <FaAngleLeft />
            </button>
            <div className="text-gray-400 absolute bottom-3">4</div>
        </div>
    )
}

export default Page5;