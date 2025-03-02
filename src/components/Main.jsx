import { Outlet } from "react-router-dom";
import NavBtns from "./NavBtns";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <NavBtns />
                <Outlet />
            </div>
        </main>
    );
}

export default Main;