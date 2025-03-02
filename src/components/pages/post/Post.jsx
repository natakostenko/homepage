import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
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