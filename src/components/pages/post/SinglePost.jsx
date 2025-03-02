import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SinglePost = () => {
    const [post, setPost] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const { title, body } = post;

    return (
        <div className="page-content">
          <h1>Single page</h1>

            <div className="single-post">
                <h3 className="single-post__title">{title}</h3>
                <p className="single-post__text">{body}</p>
            </div>
        </div>
    );
};
