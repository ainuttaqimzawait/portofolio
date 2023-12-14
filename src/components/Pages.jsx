import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Pages1_2 from "./pages1_3";
// import Pages2_5 from "./Pages2_5";
import Page1 from "./pages/Page/Page1";
import Pages2_3 from "./pages/pages2_3";
import Pages4_5 from "./pages/pages4_5";
import Page6 from "./pages/Page/Page6";

const Pages = () => {
    return (
        <div className="h-cov-h w-cov-w bg-blue-600 relative rounded border-x-8 border-b-8 border-t-4 border-cyan-400">
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/portofolio" element={<Pages1_2 />} />
                    <Route path="/portofolio/1" element={<Pages2_5 />} />
                </Routes>
            </BrowserRouter> */}
            <Page1 />
            <Pages2_3 />
            <Pages4_5 />
            <Page6 />
        </div>
    )
}

export default Pages;