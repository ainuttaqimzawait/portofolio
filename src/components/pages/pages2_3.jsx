import Page2 from "./Page/Page2";
import Page3 from "./Page/Page3";
import { useSelector } from "react-redux";

const Pages2_3 = () => {
    let { data } = useSelector(state => state.setStyle)
    return (
        <div className={`h-full w-1/2 page-right ${data[0]}`}>
            <Page2 />
            <Page3 />
            {console.log({ data })}
        </div>
    )
}
export default Pages2_3;