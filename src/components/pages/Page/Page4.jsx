import project1 from "../../../assets/images/Screenshot_39.jpg";
import project1_a from "../../../assets/images/hijabshop.jpg";
import { FaAngleRight, FaReact } from "react-icons/fa";
import { SiBootstrap, SiExpress, SiHtml5, SiMongodb } from "react-icons/si";

const Page4 = ({ sendDataToParent }) => {
    const tools = [
        { name: "React Js", icon: <FaReact /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Express Js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
    ]

    return (
        <div className="absolute h-full w-full flex flex-col justify-center items-center px-3 bg-gradient-to-r from-gray-100 from-80% to-gray-300 page-front">
            <div className="text-center mt-7">
                <h3 className="text-4xl font-semibold mb-6">
                    Hijabs <span className="text-cyan-600">Store</span>
                </h3>
            </div>
            <div className="w-full px-6 mt-4">
                <img src={project1} alt="" className="rounded-lg border border-gray-400" />
                <img src={project1_a} alt="" className="absolute w-52 -mt-20 ml-44 rounded-sm border border-gray-400" />
                <p className="text-sm text-left my-3 mt-5">
                    E-Commerce to display hijabs for sale
                </p>
                <div className="text-sm text-left my-3">
                    <p>
                        <strong>Tools:</strong>
                    </p>
                    <div className="p-2 flex items-center">
                        {tools.map((tool, index) => (
                            <div key={index} className="flex items-center mr-4">
                                {tool.icon}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-3">
                    <a
                        href="https://github.com/ainuttaqimzawait/final-project-fe.git"
                        className="text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out flex items-center justify-center text-sm sm:text-base"
                    >
                        Source Code
                    </a>
                </div>
            </div>

            <button className="absolute right-2 text-gray-400 hover:cursor-pointer bottom-3" onClick={() => sendDataToParent('turn z-30')}>
                <FaAngleRight />
            </button>
            <div className="text-gray-400 absolute bottom-3">3</div>
        </div>
    )
}

export default Page4;