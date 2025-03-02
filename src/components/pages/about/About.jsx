import { Outlet } from "react-router-dom";
import { AboutNav } from "./components";

export const About = () => {
    return (
        <div className="page-content">
            <h1>About</h1>

            <div className="inner">

               <AboutNav />

               <Outlet />

            </div>    

        </div>
    );
}