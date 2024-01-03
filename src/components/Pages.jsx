import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages2_3 from "./pages/pages2_3";
import Pages4_5 from "./pages/pages4_5";
import Page6 from "./pages/Page/Page6";
import PagesCover_1 from "./pages/pagesCover_1";
import Page7 from "./pages/Page/Page7";
import Pages6_7 from "./pages/pages6_7";
import Coverclose from "./pages/Page/Coverclose";

const Pages = () => {
    return (
        <div className="h-cov-h w-cov-w relative" data-aos="flip-left">
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/portofolio" element={<Pages1_2 />} />
                    <Route path="/portofolio/1" element={<Pages2_5 />} />
                </Routes>
            </BrowserRouter> */}
            <PagesCover_1 />
            <Pages2_3 />
            <Pages4_5 />
            <Pages6_7 />
            <Coverclose />
        </div>
    )
}

export default Pages;