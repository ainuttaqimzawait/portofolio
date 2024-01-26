import { useEffect } from "react";
import Cover from "./Page/Cover"
import Page1 from "./Page/Page1";
import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "../../App/feature/pagination/action";

const PagesCover_1 = () => {
    const dispatch = useDispatch();
    let { data } = useSelector(state => state.setStyle)
    useEffect(() => {
        setTimeout(() => dispatch(nextPage(0)), 3000);
    }, [])
    return (
        <div className={`h-full w-1/2 -top-1 page-right ${data[0]}`}>
            <Cover />
            <Page1 />
        </div>
    )
}

export default PagesCover_1;