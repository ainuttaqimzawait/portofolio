import { FaLocationArrow, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const BackCover = () => {
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
        </div>
    )
}

export default BackCover;