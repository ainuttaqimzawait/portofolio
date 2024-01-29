import Cover from "./pages/Page/Cover";
import Page1 from "./pages/Page/Page1";
import Page2 from "./pages/Page/Page2";
import Page3 from "./pages/Page/Page3";
import Page4 from "./pages/Page/Page4";
import Page5 from "./pages/Page/Page5";
import Page6 from "./pages/Page/Page6";
import Page7 from "./pages/Page/Page7";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackCover from "./pages/Page/BackCover";
import { nextPage } from "../App/feature/pagination/action";

const PagesOnPhone = () => {
    const dispatch = useDispatch();
    let { data } = useSelector(state => state.setStyle)
    useEffect(() => {
        setTimeout(() => dispatch(nextPage(0)), 3000);
    }, [])
    return (
        <div className="h-[500px] w-[350px] md:hidden relative" data-aos="flip-left">
            <div className={`h-[515px] w-full -top-1 page-right ${data[0]}`}>
                <Cover />
                <div className="h-full bg-cyan-600 page-back"></div>
            </div>
            <div className={`h-full w-full page-right ${data[1]}`}>
                <Page1 />
                <div className="h-full w-full bg-gray-300 page-back"></div>
            </div>
            <div className={`h-full w-full page-right ${data[2]}`}>
                <Page2 />
                <div className="h-full w-full bg-gray-300 page-back"></div>
            </div>
            <div className={`h-full w-full page-right ${data[3]}`}>
                <Page3 />
                <div className="h-full w-full bg-gray-300 page-back"></div>
            </div>
            <div className={`h-full w-full page-right ${data[4]}`}>
                <Page4 />
                <div className="h-full w-full bg-gray-300 page-back"></div>
            </div>
            <div className={`h-full w-full page-right ${data[5]}`}>
                <Page5 />
                <div className="h-full w-full bg-gray-300 page-back"></div>
            </div>
            <div className={`h-full w-full page-right ${data[6]}`}>
                <Page6 />
                <div className="h-full w-full bg-gray-300 page-back"></div>
            </div>
            <div className={`h-full w-full page-right ${data[7]}`}>
                <Page7 />
                <div className="h-full w-full bg-gray-300 page-back"></div>
            </div>
            <BackCover />
        </div>
    )
}

export default PagesOnPhone;