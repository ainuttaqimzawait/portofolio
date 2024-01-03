import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
    return (
        <a href="https://wa.me/+6285158256355">
            <span class="absolute flex text-4xl text-green-600 right-3 top-96">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"><FaWhatsapp /></span>
                <span class="relative inline-flex rounded-full text-4xl"><FaWhatsapp /></span>
            </span>
        </a>
    )
}

export default Whatsapp;