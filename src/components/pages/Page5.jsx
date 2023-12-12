import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Page5 = () => {
    const contact_info = [
        { logo: "mail", text: "agungrifai.jobs@gmail.com" },
        { logo: "logo-whatsapp", text: "085603494379" },
        {
            logo: "location",
            text: "Jakarta, Indonesia",
        },
    ];
    const navigate = useNavigate();
    return (
        <div className="absolute animate-slide-right h-full w-1/2 flex flex-col justify-center items-center px-3 bg-gradient-to-r from-gray-100 to-gray-300 to-5%">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    Contact <span className="text-cyan-600">Me</span>
                </h3>

                <div
                    className="mt-10 flex md:flex-row flex-col
         gap-6 max-w-7xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
                >
                    <div className="flex flex-col gap-7">
                        {contact_info.map((contact, i) => (
                            <div
                                key={i}
                                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
                            >
                                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                    <ion-icon name={contact.logo}></ion-icon>
                                </div>
                                <p className="md:text-base text-sm  break-words">
                                    {contact.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className="absolute left-2 bg-cyan-500 hover:cursor-pointer bottom-3" onClick={_ => navigate('/pages3_4')}>
                <FaAngleLeft />
            </button>
            <div className="text-gray-400 absolute bottom-3">4</div>
        </div>
    )
}

export default Page5;