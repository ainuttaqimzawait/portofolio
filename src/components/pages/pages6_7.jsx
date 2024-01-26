import { useSelector } from "react-redux";
import Page6 from "./Page/Page6";
import Page7 from "./Page/Page7";

const Pages6_7 = () => {
    let { data } = useSelector(state => state.setStyle)
    return (
        <div className={`h-full w-full md:w-1/2 page-right ${data[6]}`}>
            <Page6 />
            <Page7 />
        </div>
    )
}
export default Pages6_7;