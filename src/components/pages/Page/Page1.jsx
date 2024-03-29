import { useDispatch } from "react-redux";
import { endPage, nextPage } from "../../../App/feature/pagination/action";
import Poto from "../../../assets/images/photo.png"
import { FaAngleRight, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
const Page1 = () => {
    const dispatch = useDispatch();
    const [paper, setPaper] = useState("");
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        if (mediaQuery.matches) {
            setPaper("page-front")
        } else {
            setPaper("border-l-8 border-b-8 border-t-4 border-cyan-600 page-back")
        }
    })
    const social_media = [
        { link: "https://www.instagram.com/z4w_t/", icon: <FaInstagram /> },
        {
            link: "https://www.facebook.com/profile.php?id=100081129099642&mibextid=nb1MFm3jZYALyyMy",
            icon: <FaFacebook />,
        },
        { link: "http://www.linkedin.com/in/ainuttaqim-zawait", icon: <FaLinkedin /> },
        { link: "https://github.com/ainuttaqimzawait", icon: <FaGithub /> },
    ];

    return (
        <div className={`absolute h-full md:h-box-h w-full md:w-[452px] outline-8 flex flex-col justify-center items-center px-3 bg-gradient-to-r from-gray-100 from-80% to-gray-300 rounded ${paper}`}>
            <img src={Poto} alt="" className="w-1/2 mx-auto mb-4 rounded-full" />
            <h1 className="md:text-3xl text-2xl md:leading-normal leading-10 text-black font-bold mx-auto">
                Ainuttaqim Zawait
            </h1>
            <h5 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600 mx-auto">
                Fullstack Web Developer
            </h5>
            <a
                className="mx-auto">
                <button className="bg-cyan-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-cyan-500 mt-8" onClick={() => dispatch(endPage(7))}>
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
            <button className="md:hidden absolute text-gray-400 right-2 hover:cursor-pointer bottom-3"
                onClick={() => { dispatch(nextPage(1)) }}
            >
                <FaAngleRight />
            </button>
            <div className="text-gray-400 absolute bottom-3">1</div>
        </div>
    )
}
export default Page1;