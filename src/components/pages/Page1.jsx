import Poto from "../../assets/images/foto.jpg"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Page1 = () => {
    const social_media = [
        { link: "https://www.instagram.com/agungrifai10/", icon: <FaInstagram /> },
        {
            link: "https://web.facebook.com/rifaithebluessejati.rifaithebluessejati",
            icon: <FaFacebook />,
        },
        { link: "https://www.linkedin.com/in/agung-rifai", icon: <FaLinkedin /> },
        { link: "https://gitlab.com/agungfay10", icon: <FaGithub /> },
    ];

    return (
        <div className="absolute h-full w-1/2 bg-gradient-to-r from-gray-100 to-gray-300 to-5% origin-right flex flex-col justify-center">
            <img src={Poto} alt="" className="h-60 w-60 mx-auto mb-4 rounded-full" />
            <h1 className="md:text-3xl text-2xl md:leading-normal leading-10 text-black font-bold mx-auto">
                Ainuttaqim Zawait
            </h1>
            <h5 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600 mx-auto">
                Fullstack Web Developer
            </h5>
            <a href="#contact" className="mx-auto">
                <button className="bg-cyan-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-cyan-500 mt-8">
                    Contact Me
                </button>
            </a>

            <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 mx-auto">
                {social_media?.map((social_info, i) => (
                    <div
                        key={i}
                        className="text-gray-600 hover:text-black cursor-pointer "
                    >
                        <a href={social_info.link}>
                            {social_info.icon}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Page1;