import { FaAngleRight } from "react-icons/fa";

const Page2 = ({ sendDataToParent }) => {
    return (
        <div className="absolute h-full w-full flex flex-col justify-center items-center px-4 bg-gradient-to-r from-gray-100 from-80% to-gray-300 page-front">
            <h3 className="text-4xl font-semibold">
                About <span className="text-cyan-600">Me</span>
            </h3>
            <p className="text-gray-400 my-3 text-lg">My introduction</p>
            <p className="text-justify leading-7 w-11/12 mx-auto text-gray-600">
                I have an interest in Frontend and Backend web development, through studying at Eduwork's MERN Bootcamp. I also have the ability to develop web applications and teamwork and have several portfolios. Eager to pursue a career in frontend and backend web development and contribute to creating the best technology solutions.
            </p>
            <a href="https://docs.google.com/document/d/1hajeBQzUdkyRneX-HCD2NjA-M7NroYp4J4ywofxmKl8/edit">
                <button className="bg-cyan-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-cyan-500">
                    Download CV
                </button>
            </a>
            <button className="absolute text-gray-400 right-2 hover:cursor-pointer bottom-3" onClick={() => { sendDataToParent(['turn z-20']); }}>
                <FaAngleRight />
            </button>
            <div className="text-gray-400 absolute bottom-3">1</div>
        </div>
    )
}

export default Page2;