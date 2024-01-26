import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages2_3 from "./pages/pages2_3";
import Pages4_5 from "./pages/pages4_5";
import PagesCover_1 from "./pages/pagesCover_1";
import Pages6_7 from "./pages/pages6_7";
import BackCover from "./pages/Page/BackCover";

const Pages = () => {
    return (
        <div className="hidden md:block h-cov-h w-cov-w relative" data-aos="flip-left">
            <PagesCover_1 />
            <Pages2_3 />
            <Pages4_5 />
            <Pages6_7 />
            <BackCover />
        </div>
    )
}

export default Pages;