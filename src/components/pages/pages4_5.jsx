import Page4 from "./Page/Page4";
import Page5 from "./Page/Page5"
import { useSelector } from "react-redux";

const Pages4_5 = () => {
    let { data } = useSelector(state => state.setStyle)
    return (
        <div className={`h-full w-1/2 page-right ${data[4]}`}>
            <Page4 />
            <Page5 />
        </div>
    )
}
export default Pages4_5;