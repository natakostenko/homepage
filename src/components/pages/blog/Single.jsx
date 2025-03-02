import { useParams } from "react-router-dom";
import { blogPosts } from "../../../data";

export const Single = () => {
    const { id } = useParams();
    const blogPost = blogPosts.find(item => item.id == id);

    const { title, text } = blogPost;

    return (
        <div className="page-content">
            <h1>Single page</h1>

            <div className="single-blog-post">
                <h3 className="single-blog-post__title">{title}</h3>
                <p className="single-blog-post__text">{text}</p>
            </div>
        </div>
    );
}

