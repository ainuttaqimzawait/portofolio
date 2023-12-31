import { useEffect, useState } from "react";
import Cover from "./Page/Cover"
import Page1 from "./Page/Page1";

const PagesCover_1 = () => {
    const [className, setClassname] = useState('z-5');
    useEffect(() => {
        setTimeout(() => setClassname('z-5 turn'), 3000);
        setTimeout(() => setClassname('z-1 turn'), 5000);
    }, [])
    return (
        <div className={`h-full w-1/2 -top-1 page-right ${className}`}>
            <Cover />
            <Page1 />
        </div>
    )
}

export default PagesCover_1;