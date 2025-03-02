import { Link } from "react-router-dom";

export const AboutNav = () => {
    return (
        <ul className="inner__nav">
            <li><Link to="teams">Teams</Link></li>
            <li><Link to="company-info">Company info</Link></li>
        </ul>
    );
}