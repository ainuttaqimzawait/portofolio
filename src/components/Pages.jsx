import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Pages1_2 from "./pages/pages1_2";
import Pages3_4 from "./pages/pages3_4";
import Pages5 from "./pages/pages5";

const Pages = () => {
    return (
        <div className="h-cov-h w-cov-w bg-blue-600 relative border-x-4 border-b-4 border-cyan-400">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Pages1_2 />} />
                    {/* <Route path="/page2" element={} /> */}
                    <Route path="/pages3_4" element={<Pages3_4 />} />
                    <Route path="/pages5" element={<Pages5 />} />
                </Routes>
            </BrowserRouter>


            {/* <Page3 />
            <Page4 />
            <Page5 /> */}
        </div>
    )
}

export default Pages;