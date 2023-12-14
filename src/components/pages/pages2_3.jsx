import { useState } from "react";
import Page2 from "./Page/Page2";
import Page3 from "./Page/Page3";

const Pages2_3 = () => {
    const [className, setClassname] = useState('z-20');
    return (
        <div className={`h-full w-1/2 page-right ${className}`}>
            <Page2 sendDataToParent={(data) => setClassname(data)} />
            <Page3 sendDataToParent={(data) => setClassname(data)} />
            {console.log(className)}
        </div>
    )
}
export default Pages2_3;