import { FaAngleLeft } from "react-icons/fa";
import mongoLogo from "../../assets/images/mongo.png";
import expressLogo from "../../assets/images/express.png";
import reactLogo from "../../assets/images/react.png";
import nodeLogo from "../../assets/images/node.png";
import htmlLogo from "../../assets/images/html.png";
import cssLogo from "../../assets/images/css.png";
import bootstrapLogo from "../../assets/images/bootstrap.png";
import tailwindLogo from "../../assets/images/tailwind.png";
import jsLogo from "../../assets/images/js.png";
import mysqlLogo from "../../assets/images/mysql.png";
import gitLogo from "../../assets/images/git.png";
import apiLogo from "../../assets/images/api.png";
import { useNavigate } from "react-router-dom";


const Page3 = () => {
    const skillsData = [
        { name: "MongoDB", image: mongoLogo },
        { name: "ExpressJS", image: expressLogo },
        { name: "ReactJs", image: reactLogo },
        { name: "NodeJs", image: nodeLogo },
        { name: "HTML5", image: htmlLogo },
        { name: "CSS3", image: cssLogo },
        { name: "Bootstrap", image: bootstrapLogo },
        { name: "Tailwind Css", image: tailwindLogo },
        { name: "Javascript", image: jsLogo },
        { name: "MySQL", image: mysqlLogo },
        { name: "Git", image: gitLogo },
        { name: "Rest Api", image: apiLogo },
    ];
    const navigate = useNavigate();
    return (
        <div className="absolute h-full w-1/2 flex flex-col justify-center items-center px-3 bg-gradient-to-r from-gray-100 to-gray-300 to-5%">
            <h3 className="mb-8 text-4xl font-semibold">
                My <span className="text-cyan-600">Skills</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {skillsData.map((skill, index) => (
                    <div className="text-white p-4 rounded-lg shadow-md mb-4 mt-4 flex items-center">
                        <img src={skill.image} alt={`${skill.name} logo`} className="w-8 h-8" />
                        {/* <div>{skill.name}</div> */}
                    </div>
                ))}
            </div>
            <button className="absolute left-2 bg-cyan-500 hover:cursor-pointer bottom-3" onClick={_ => navigate('/')}>
                <FaAngleLeft />
            </button>
            <div className="text-gray-400 absolute bottom-3">2</div>
        </div>
    )
}

export default Page3;