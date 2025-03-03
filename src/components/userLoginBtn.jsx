import { Link, useLocation } from "react-router-dom";
import { useLogin } from "../hook/useLogin";

const UserLoginBtn = () => {
    const {pathname} = useLocation();
    const { user, signOut } = useLogin();

    if (user) {
        return (
            <button onClick={signOut}>LogOut</button>
        );
    }

    return (
        <Link 
            to="/login" 
            className="login-btn" 
            state={{from: pathname}}
        >
            LogIn
        </Link>
    );
}

export default UserLoginBtn;