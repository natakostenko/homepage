import { useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../../hook/useLogin";

export const Login = () => {
    const {state} = useLocation();
    const {signIn} = useLogin();
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const user = form.user.value;
        signIn(user, () => navigate(state?.from || '/'));
    }

    return (
        <div className="page-content">
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    login: <input type="text" name="user"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}