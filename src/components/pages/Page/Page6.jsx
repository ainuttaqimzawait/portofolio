import { FaAngleLeft, FaAngleRight, FaHome, FaLocationArrow, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { backHome, backPage, nextPage } from "../../../App/feature/pagination/action";
import { useDispatch } from "react-redux";

const Page6 = () => {
    const dispatch = useDispatch();
    const contact_info = [
        {
            logo: <SiGmail />,
            link: "mailto:ainuttaqimzawait.jobs@gmail.com",
            text: "ainuttaqimzawait.jobs@gmail.com"
        },
        {
            logo: <FaWhatsapp />,
            link: "https://wa.me/+6285158256355",
            text: "085158256355"
        },
        {
            logo: <FaLocationArrow />,
            link: "",
            text: "Kudus, Indonesia",
        },
    ];
    return (
        <div className="absolute h-full w-full right-0 flex flex-col justify-center items-center px-3 bg-gradient-to-r from-gray-100 from-80% to-gray-300 page-front">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    Contact <span className="text-cyan-600">Me</span>
                </h3>

                <div
                    className="mt-10 flex md:flex-row flex-col
         gap-6 max-w-7xl md:p-6 p-2 rounded-lg mx-auto"
                >
                    <div className="flex flex-col gap-7">
                        {contact_info.map((contact, i) => (
                            <a href={contact.link}
                                key={i}
                                className="flex flex-row text-left gap-3 flex-wrap items-center"
                            >
                                <div className="min-w-[2rem] text-sm md:text-xl min-h-[2rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                    {contact.logo}
                                </div>
                                <p className="md:text-base text-sm  break-words">
                                    {contact.text}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <button className="md:hidden absolute left-2 text-gray-400 hover:cursor-pointer bottom-3" onClick={() => { dispatch(backPage(5)) }}>
                <FaAngleLeft />
            </button>
            <button className="absolute right-4 text-gray-400 hover:cursor-pointer bottom-3 text-2xl" onClick={() => { dispatch(backHome(0)) }}>
                <FaHome />
            </button>
            {/* <button className="absolute right-2 text-gray-400 hover:cursor-pointer bottom-3" onClick={() => { dispatch(nextPage(6)) }}>
                <FaAngleRight />
            </button> */}
            <div className="text-gray-400 absolute bottom-3">6</div>
        </div>
    )
}

export default Page6;