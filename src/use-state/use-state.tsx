import { useEffect } from "react";

export const UseState: React.FC = () => {
    console.log("Inside UseState");

    useEffect(() => {
        console.log("UseState Mounted");


        return () => {
            console.log("UseState Unmounted");
        }


    }, []);

    return (<div>UseState</div>);
}