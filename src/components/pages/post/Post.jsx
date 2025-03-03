import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../../actions";

export const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getPosts();
            setPosts(data);
        })()
    }, []);

    return (
        <div className="page-content">
            <h1>Post</h1>
            {posts.map(post => {
                const { id, title } = post;
                return (
                    <Link to={`/post/${id}`} className="post" key={id}>
                        <h3 className="post__title">{title}</h3>
                    </Link>
                );
            })}
        </div>
    );
};