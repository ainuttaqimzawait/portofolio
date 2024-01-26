import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { backHome, backPage } from "../../../App/feature/pagination/action";
import { FaAngleLeft, FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Page7 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const [paper, setPaper] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = 'service_5fsx715';
        const templateId = 'template_llat2vb';
        const publicKey = 'bhAivWTgPdTbNqfhx';
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Zaw',
            message: message,
        };
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((result) => {
                console.log('berhasil', result);
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
            });
    }
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        if (mediaQuery.matches) {
            setPaper("page-front")
        } else {
            setPaper("page-back")
        }
    })
    return (
        <div className={`absolute left-0 h-full w-full flex flex-col justify-center items-center px-3 bg-gradient-to-r from-gray-100 from-80% to-gray-300 ${paper}`}>
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    Contact <span className="text-cyan-600">Form</span>
                </h3>
                <form onSubmit={handleSubmit} className="mt-7 pt-2 flex flex-col w-full h-80 bg-white rounded-lg mx-auto">
                    <label>
                        <input
                            type="name"
                            placeholder="Name"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            className="h-8 w-80 bg-gray-100 pl-2 mx-5 my-2 border"
                        />
                    </label>
                    <label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-8 w-80 bg-gray-100 mx-5 my-2 pl-2 border"
                        />
                    </label>
                    <label>
                        <textarea
                            value={message}
                            placeholder="Message"
                            required
                            onChange={(e) => setMessage(e.target.value)}
                            className="h-32 w-80 bg-gray-100 mx-5 my-2 pl-2 border"
                        />
                    </label>
                    <button type="submit" className="bg-green-600 w-32 py-2 text-white rounded-lg mx-auto">Send</button>
                </form>
            </div>
            <button className="absolute right-4 text-gray-400 hover:cursor-pointer bottom-3 text-2xl" onClick={() => { dispatch(backHome(0)) }}>
                <FaHome />
            </button>
            <button className="absolute left-2 text-gray-400 hover:cursor-pointer bottom-3" onClick={() => { dispatch(backPage(6)) }}>
                <FaAngleLeft />
            </button>
            <div className="text-gray-400 absolute bottom-3">7</div>
        </div>
    )
}

export default Page7;