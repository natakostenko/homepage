import { Link } from "react-router-dom";

export const NotFound404 = () => {
    return (
        <>
            <h1>404 Page not found !!!</h1>
            <Link to="/">Press link for go to the homepage</Link>
        </>
    );
}