import { Navigate } from "react-router-dom";
import { useLogin } from "../../../hook/useLogin";

export const CreatePost = () => {
    const {user} = useLogin();

    if(!user) {
        return <Navigate to="/login"/>
    }

    return (
        <div className="create-post-block">
            <h1>
                Create new post
            </h1>
        </div>
    );
}

