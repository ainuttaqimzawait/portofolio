import { FaLocationArrow, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Coverclose = () => {
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
        <div className="absolute h-box-h w-1/2 right-0 flex flex-col justify-center items-center -top-1 px-3 z-1 bg-cyan-600 rounded border-r-8 border-b-8 border-t-4 border-cyan-600">
            {/* <div className="text-center">
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
                                className="flex flex-row text-left gap-4 flex-wrap items-center"
                            >
                                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
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
            <div className="text-gray-400 absolute bottom-3">5</div> */}
        </div>
    )
}

export default Coverclose;