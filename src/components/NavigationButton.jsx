import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const NavigationButton = ({ name }) => {
    return (
        <button className="absolute left-2 bg-cyan-500 hover:cursor-pointer bottom-3" onClick={""}>
            {{ name } == 'next' ? <FaAngleRight /> : <FaAngleLeft />}
        </button>
    )
}
export default NavigationButton;