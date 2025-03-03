import { NavLink } from "react-router-dom";
import { useLogin } from "../hook/useLogin";
import UserLoginBtn from "./userLoginBtn";

const Header = () => {
    const linkClassName = 'menu-item__link';
    const activeLinkClassName = `${linkClassName} ${linkClassName}--active`;
    const isActiveHandler = ({isActive}) => (
        isActive
            ? activeLinkClassName
            : linkClassName
    );

    const {user} = useLogin();

    return (
        <div className="container">
            <nav className="menu">
                <ul className="menu-list">
                    <li>
                        <NavLink to="/" className={isActiveHandler}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={isActiveHandler}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={isActiveHandler}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/post" className={isActiveHandler}>Post</NavLink>
                    </li>
                </ul>

                <UserLoginBtn />
            </nav>
        </div>
    );
}

export default Header;