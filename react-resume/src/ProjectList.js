import { Link } from "react-router-dom";

const ProjectList = ({blogs,title}) => {

    return (
        <div className = "blog-list">
            <h2 id="blog-list-h2">{title}</h2>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Project: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default ProjectList;