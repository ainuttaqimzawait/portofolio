import Page1 from "./pages/Page1";
import Page2 from "./pages/Pages2";

const Pages = () => {
    return (
        <div className="h-cov-h w-cov-w bg-blue-600 relative from-gray-950 border-x-4 border-b-4 border-cyan-400">
            <Page1 />
            <Page2 />
        </div>
    )
}

export default Pages;