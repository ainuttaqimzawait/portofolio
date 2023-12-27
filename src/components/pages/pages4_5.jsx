import { useState } from "react";
import Page4 from "./Page/Page4";
import Page5 from "./Page/Page5"

const Pages4_5 = () => {
    const [className, setClassname] = useState('z-10');
    return (
        <div className={`h-full w-1/2 page-right ${className}`}>
            <Page4 sendDataToParent={(data) => setClassname(data)} />
            <Page5 sendDataToParent={(data) => { setClassname(data); setTimeout(() => setClassname('z-10'), 1000) }} />
        </div>
    )
}
export default Pages4_5;