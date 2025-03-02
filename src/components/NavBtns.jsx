import { useNavigate } from "react-router-dom";

const NavBtns = () => {
    const navigate = useNavigate();

    const navBackHandler = () => {
        navigate(-1);
    }

    const navForwardHandler = () => {
        navigate(1);
    }

    return (
        <div className="nav-btns-block">
            <button 
                className="nav-btn"
                onClick={navBackHandler}    
            >
                    back
            </button>
            <button
                className="nav-btn"
                onClick={navForwardHandler}
            >
                forward
            </button>
        </div>
    );
}

export default NavBtns;