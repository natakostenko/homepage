import { Link } from "react-router-dom";
import { blogPosts } from "../../../data";

export const Blog = () => {

    return (
        <div className="page-content">
            <h1>Blog</h1>
            {
                blogPosts.map(item => {
                    const {id, title} = item;
                    return (
                        <Link to={`/blog/${id}`} className="post" key={id}>
                            <h3 className="post__title">{title}</h3>
                        </Link>
                    )
                })
            }
        </div>
    );
}