import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../../../actions";

export const SinglePost = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const data = await getPost(id);
            setPost(data);
        })()
    }, []);

    
    if (!post) return null;

    const { title, body } = post;

    return (
        <div className="page-content">
            <Link to="/post">Return to post page...</Link>
            <h1>Single page</h1>

            <div className="single-post">
                <h3 className="single-post__title">{title}</h3>
                <p className="single-post__text">{body}</p>
            </div>
        </div>
    );
};
