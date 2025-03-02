import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext(null);

const LoginProvider = (props) => {
    const {children} = props;
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const signIn = (newUser, callback) => {
        setUser(newUser);
        callback();
    }

    const signOut = (callback) => {
        setUser(null);
        typeof callback === 'function' ? callback() : navigate('/');
    }

    const value = {user, signIn, signOut};

    return (
        <LoginContext.Provider value={value}>
            {
                children
            }
        </LoginContext.Provider>
    );
}

export default LoginProvider;